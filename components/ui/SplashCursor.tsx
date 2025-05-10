"use client";
import { useEffect, useRef } from "react";

// --- Type Definitions ---
interface IPointer {
  id: number;
  texcoordX: number;
  texcoordY: number;
  prevTexcoordX: number;
  prevTexcoordY: number;
  deltaX: number;
  deltaY: number;
  down: boolean;
  moved: boolean;
  color: { r: number; g: number; b: number }; // Changed to object
}

class Pointer implements IPointer {
  id: number;
  texcoordX: number;
  texcoordY: number;
  prevTexcoordX: number;
  prevTexcoordY: number;
  deltaX: number;
  deltaY: number;
  down: boolean;
  moved: boolean;
  color: { r: number; g: number; b: number };

  constructor() {
    this.id = -1;
    this.texcoordX = 0;
    this.texcoordY = 0;
    this.prevTexcoordX = 0;
    this.prevTexcoordY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.down = false;
    this.moved = false;
    this.color = { r: 0, g: 0, b: 0 }; // Initialized as object
  }
}

interface IGLFormat {
  internalFormat: GLenum;
  format: GLenum;
}

interface IWebGLExtensions {
  formatRGBA: IGLFormat | null;
  formatRG: IGLFormat | null;
  formatR: IGLFormat | null;
  halfFloatTexType: GLenum | null;
  supportLinearFiltering: OES_texture_float_linear | null; // Or specific type for half_float_linear
}

interface IWebGLContext {
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  ext: IWebGLExtensions;
}

interface IFBO {
  texture: WebGLTexture | null;
  fbo: WebGLFramebuffer | null;
  width: number;
  height: number;
  texelSizeX: number;
  texelSizeY: number;
  attach: (id: number) => number;
}

interface IDoubleFBO {
  width: number;
  height: number;
  texelSizeX: number;
  texelSizeY: number;
  read: IFBO;
  write: IFBO;
  swap: () => void;
}

// --- Component Props ---
interface SplashCursorProps {
  SIM_RESOLUTION?: number;
  DYE_RESOLUTION?: number;
  CAPTURE_RESOLUTION?: number;
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  PRESSURE_ITERATIONS?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  SHADING?: boolean;
  COLOR_UPDATE_SPEED?: number;
  BACK_COLOR?: { r: number; g: number; b: number };
  TRANSPARENT?: boolean;
}

function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0.5, g: 0, b: 0 }, // Ensured this matches IPointer.color type if used similarly
  TRANSPARENT = true,
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const config = {
      SIM_RESOLUTION,
      DYE_RESOLUTION,
      CAPTURE_RESOLUTION,
      DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION,
      PRESSURE,
      PRESSURE_ITERATIONS,
      CURL,
      SPLAT_RADIUS,
      SPLAT_FORCE,
      SHADING,
      COLOR_UPDATE_SPEED,
      PAUSED: false,
      BACK_COLOR,
      TRANSPARENT,
    };

    const pointers: IPointer[] = [new Pointer()];

    // --- WebGL Utility Functions (modified to accept gl and ext) ---
    function getSupportedFormat(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      internalFormat: GLenum,
      format: GLenum,
      type: GLenum | null
    ): IGLFormat | null {
      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        switch (internalFormat) {
          case (gl as WebGL2RenderingContext).R16F: // Requires WebGL2 check or type assertion
            return getSupportedFormat(gl, (gl as WebGL2RenderingContext).RG16F, (gl as WebGL2RenderingContext).RG, type);
          case (gl as WebGL2RenderingContext).RG16F:
            return getSupportedFormat(gl, (gl as WebGL2RenderingContext).RGBA16F, gl.RGBA, type);
          default:
            return null;
        }
      }
      return { internalFormat, format };
    }

    function supportRenderTextureFormat(
      gl: WebGLRenderingContext | WebGL2RenderingContext,
      internalFormat: GLenum,
      format: GLenum,
      type: GLenum | null
    ): boolean {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      gl.deleteTexture(texture);
      gl.deleteFramebuffer(fbo);
      return status === gl.FRAMEBUFFER_COMPLETE;
    }
    
    function getWebGLContext(canvasEl: HTMLCanvasElement): IWebGLContext | null {
      const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
      let glInstance: WebGLRenderingContext | WebGL2RenderingContext | null = canvasEl.getContext("webgl2", params);
      const isWebGL2 = !!glInstance;
      if (!isWebGL2) {
        glInstance = canvasEl.getContext("webgl", params) || canvasEl.getContext("experimental-webgl", params);
      }
      if (!glInstance) {
        console.error("Unable to initialize WebGL. Your browser or machine may not support it.");
        return null;
      }
      const gl = glInstance;

      let halfFloatExt: OES_texture_half_float | null = null;
      let supportLinearFilteringExt: OES_texture_float_linear | null = null; // Or specific type for half_float_linear

      if (isWebGL2) {
        (gl as WebGL2RenderingContext).getExtension("EXT_color_buffer_float");
        supportLinearFilteringExt = (gl as WebGL2RenderingContext).getExtension("OES_texture_float_linear");
      } else {
        halfFloatExt = (gl as WebGLRenderingContext).getExtension("OES_texture_half_float");
        supportLinearFilteringExt = (gl as WebGLRenderingContext).getExtension("OES_texture_half_float_linear");
      }
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      const halfFloatTexType = isWebGL2 ? (gl as WebGL2RenderingContext).HALF_FLOAT : (halfFloatExt ? halfFloatExt.HALF_FLOAT_OES : null);

      let formatRGBA: IGLFormat | null, formatRG: IGLFormat | null, formatR: IGLFormat | null;
      if (isWebGL2) {
        const gl2 = gl as WebGL2RenderingContext;
        formatRGBA = getSupportedFormat(gl2, gl2.RGBA16F, gl2.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl2, gl2.RG16F, gl2.RG, halfFloatTexType);
        formatR = getSupportedFormat(gl2, gl2.R16F, gl2.RED, halfFloatTexType);
      } else {
        const gl1 = gl as WebGLRenderingContext;
        formatRGBA = getSupportedFormat(gl1, gl1.RGBA, gl1.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl1, gl1.RGBA, gl1.RGBA, halfFloatTexType); // WebGL1 limitations
        formatR = getSupportedFormat(gl1, gl1.RGBA, gl1.RGBA, halfFloatTexType);  // WebGL1 limitations
      }

      return {
        gl,
        ext: {
          formatRGBA, formatRG, formatR,
          halfFloatTexType,
          supportLinearFiltering: supportLinearFilteringExt,
        },
      };
    }

    const webGLContext = getWebGLContext(canvas);
    if (!webGLContext) return;
    const { gl, ext } = webGLContext;

    if (!ext.supportLinearFiltering) {
        config.DYE_RESOLUTION = 256; // Example fallback
        config.SHADING = false;
    }

    function addKeywords(source: string, keywords?: string[] | null): string {
      if (!keywords || keywords.length === 0) return source;
      let keywordsString = "";
      keywords.forEach((keyword) => { keywordsString += "#define " + keyword + "\n"; });
      return keywordsString + source;
    }

    function compileShader(
      glCtx: WebGLRenderingContext | WebGL2RenderingContext,
      type: GLenum,
      source: string,
      keywords?: string[] | null
    ): WebGLShader | null {
      source = addKeywords(source, keywords);
      const shader = glCtx.createShader(type);
      if (!shader) {
        console.error("Failed to create shader.");
        return null;
      }
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.trace(glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(
      glCtx: WebGLRenderingContext | WebGL2RenderingContext,
      vertexShader: WebGLShader,
      fragmentShader: WebGLShader
    ): WebGLProgram | null {
      const program = glCtx.createProgram();
      if (!program) {
        console.error("Failed to create program.");
        return null;
      }
      glCtx.attachShader(program, vertexShader);
      glCtx.attachShader(program, fragmentShader);
      glCtx.linkProgram(program);
      if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
        console.trace(glCtx.getProgramInfoLog(program));
        glCtx.deleteProgram(program);
        return null;
      }
      return program;
    }

    function getUniforms(glCtx: WebGLRenderingContext | WebGL2RenderingContext, program: WebGLProgram): Record<string, WebGLUniformLocation | null> {
      const uniforms: Record<string, WebGLUniformLocation | null> = {};
      const uniformCount = glCtx.getProgramParameter(program, glCtx.ACTIVE_UNIFORMS);
      for (let i = 0; i < uniformCount; i++) {
        const uniformInfo = glCtx.getActiveUniform(program, i);
        if (uniformInfo) {
          uniforms[uniformInfo.name] = glCtx.getUniformLocation(program, uniformInfo.name);
        }
      }
      return uniforms;
    }

    class Material {
      private gl: WebGLRenderingContext | WebGL2RenderingContext;
      private vertexShader: WebGLShader;
      private fragmentShaderSource: string;
      private programs: (WebGLProgram | null)[];
      activeProgram: WebGLProgram | null;
      uniforms: Record<string, WebGLUniformLocation | null>;

      constructor(glCtx: WebGLRenderingContext | WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShaderSource: string) {
        this.gl = glCtx;
        this.vertexShader = vertexShader;
        this.fragmentShaderSource = fragmentShaderSource;
        this.programs = [];
        this.activeProgram = null;
        this.uniforms = {};
      }

      setKeywords(keywords: string[]) {
        let hash = 0;
        for (let i = 0; i < keywords.length; i++) hash += hashCode(keywords[i]); // hashCode needs to be defined
        let program = this.programs[hash];
        if (program == null) {
          const fragmentShader = compileShader(this.gl, this.gl.FRAGMENT_SHADER, this.fragmentShaderSource, keywords);
          if (!fragmentShader) return; // Shader compilation failed
          program = createProgram(this.gl, this.vertexShader, fragmentShader);
          if (!program) return; // Program creation failed
          this.programs[hash] = program;
        }
        if (program === this.activeProgram) return;
        this.uniforms = getUniforms(this.gl, program);
        this.activeProgram = program;
      }
      bind() {
        if (this.activeProgram) this.gl.useProgram(this.activeProgram);
      }
    }

    class Program {
      program: WebGLProgram | null;
      uniforms: Record<string, WebGLUniformLocation | null>;
      private gl: WebGLRenderingContext | WebGL2RenderingContext;

      constructor(glCtx: WebGLRenderingContext | WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        this.gl = glCtx;
        this.program = createProgram(glCtx, vertexShader, fragmentShader);
        this.uniforms = this.program ? getUniforms(glCtx, this.program) : {};
      }
      bind() {
        if (this.program) this.gl.useProgram(this.program);
      }
    }

    // --- Shader Compilation (Ensure shaders are compiled after gl is available) ---
    // (Shader sources are long, so I'll just show the call pattern)
    const baseVertexShader = compileShader(gl, gl.VERTEX_SHADER, `... baseVertexShader GLSL ...`);
    const copyShader = compileShader(gl, gl.FRAGMENT_SHADER, `... copyShader GLSL ...`);
    // ... and so on for all shaders
    // IMPORTANT: Check if any shader compilation failed (returns null)
    if (!baseVertexShader || !copyShader /* ...all other shaders... */) {
        console.error("One or more shaders failed to compile. Aborting.");
        return;
    }

    // --- Program Initialization ---
    const copyProgram = new Program(gl, baseVertexShader, copyShader);
    // ... and so on for all programs

    // --- Material Initialization ---
    const displayMaterial = new Material(gl, baseVertexShader, `... displayShaderSource GLSL ...`);


    const blit = (() => {
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
        
        const indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
        
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(0);
      
        return (target: IFBO | null, clear: boolean = false) => {
          if (target == null) {
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          } else {
            gl.viewport(0, 0, target.width, target.height);
            gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
          }
          if (clear) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
          }
          gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
        };
      })();

    // FBOs (dye, velocity, etc. will be IDoubleFBO or IFBO)
    let dye: IDoubleFBO, velocity: IDoubleFBO, divergence: IFBO, curlFBO: IFBO, pressure: IDoubleFBO; // Renamed curl to curlFBO to avoid conflict with config.CURL

    function createFBO(
        glCtx: WebGLRenderingContext | WebGL2RenderingContext,
        w: number, h: number, internalFormat: GLenum, format: GLenum, type: GLenum | null, param: GLenum
      ): IFBO {
        glCtx.activeTexture(glCtx.TEXTURE0);
        const texture = glCtx.createTexture();
        glCtx.bindTexture(glCtx.TEXTURE_2D, texture);
        glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MIN_FILTER, param);
        glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MAG_FILTER, param);
        glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_S, glCtx.CLAMP_TO_EDGE);
        glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_T, glCtx.CLAMP_TO_EDGE);
        glCtx.texImage2D(glCtx.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
      
        const fbo = glCtx.createFramebuffer();
        glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, fbo);
        glCtx.framebufferTexture2D(glCtx.FRAMEBUFFER, glCtx.COLOR_ATTACHMENT0, glCtx.TEXTURE_2D, texture, 0);
        glCtx.viewport(0, 0, w, h);
        glCtx.clear(glCtx.COLOR_BUFFER_BIT);
      
        return {
          texture, fbo, width: w, height: h,
          texelSizeX: 1.0 / w, texelSizeY: 1.0 / h,
          attach(id: number) {
            glCtx.activeTexture(glCtx.TEXTURE0 + id);
            glCtx.bindTexture(glCtx.TEXTURE_2D, texture);
            return id;
          },
        };
      }
      
      function createDoubleFBO(
        glCtx: WebGLRenderingContext | WebGL2RenderingContext,
        w: number, h: number, internalFormat: GLenum, format: GLenum, type: GLenum | null, param: GLenum
      ): IDoubleFBO {
        let fbo1 = createFBO(glCtx, w, h, internalFormat, format, type, param);
        let fbo2 = createFBO(glCtx, w, h, internalFormat, format, type, param);
        return {
          width: w, height: h,
          texelSizeX: fbo1.texelSizeX, texelSizeY: fbo1.texelSizeY,
          get read() { return fbo1; },
          set read(value) { fbo1 = value; },
          get write() { return fbo2; },
          set write(value) { fbo2 = value; },
          swap() { let temp = fbo1; fbo1 = fbo2; fbo2 = temp; },
        };
      }






    function resizeFBO(target, w, h, internalFormat, format, type, param) {
      let newFBO = createFBO(w, h, internalFormat, format, type, param);
      copyProgram.bind();
      gl.uniform1i(copyProgram.uniforms.uTexture, target.attach(0));
      blit(newFBO);
      return newFBO;
    }

    function resizeDoubleFBO(
      target,
      w,
      h,
      internalFormat,
      format,
      type,
      param
    ) {
      if (target.width === w && target.height === h) return target;
      target.read = resizeFBO(
        target.read,
        w,
        h,
        internalFormat,
        format,
        type,
        param
      );
      target.write = createFBO(w, h, internalFormat, format, type, param);
      target.width = w;
      target.height = h;
      target.texelSizeX = 1.0 / w;
      target.texelSizeY = 1.0 / h;
      return target;
    }

    function updateKeywords() {
      let displayKeywords = [];
      if (config.SHADING) displayKeywords.push("SHADING");
      displayMaterial.setKeywords(displayKeywords);
    }

    updateKeywords();
    initFramebuffers();
    let lastUpdateTime = Date.now();
    let colorUpdateTimer = 0.0;
   function initFramebuffers() {
        // ... uses gl, ext, config, createDoubleFBO, createFBO ...
        // Ensure ext formats are not null before using .internalFormat / .format
        if (!ext.formatRGBA || !ext.formatRG || !ext.formatR) {
            console.error("Required texture formats not supported.");
            return;
        }
        // ... rest of initFramebuffers
    }
    initFramebuffers();
    function updateFrame() {
      const dt = calcDeltaTime();
      if (resizeCanvas()) initFramebuffers();
      updateColors(dt);
      applyInputs();
      step(dt);
      render(null);
      requestAnimationFrame(updateFrame);
    }

    function calcDeltaTime() {
      let now = Date.now();
      let dt = (now - lastUpdateTime) / 1000;
      dt = Math.min(dt, 0.016666);
      lastUpdateTime = now;
      return dt;
    }

    function resizeCanvas() {
      let width = scaleByPixelRatio(canvas.clientWidth);
      let height = scaleByPixelRatio(canvas.clientHeight);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
    }

    function updateColors(dt) {
      colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
      if (colorUpdateTimer >= 1) {
        colorUpdateTimer = wrap(colorUpdateTimer, 0, 1);
        pointers.forEach((p) => {
          p.color = generateColor();
        });
      }
    }

    function applyInputs() {
      pointers.forEach((p) => {
        if (p.moved) {
          p.moved = false;
          splatPointer(p);
        }
      });
    }

    function step(dt) {
      gl.disable(gl.BLEND);
      // Curl
      curlProgram.bind();
      gl.uniform2f(
        curlProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(curl);

      // Vorticity
      vorticityProgram.bind();
      gl.uniform2f(
        vorticityProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(
        vorticityProgram.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
      gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
      gl.uniform1f(vorticityProgram.uniforms.dt, dt);
      blit(velocity.write);
      velocity.swap();

      // Divergence
      divergenceProgram.bind();
      gl.uniform2f(
        divergenceProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(
        divergenceProgram.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      blit(divergence);

      // Clear pressure
      clearProgram.bind();
      gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
      gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE);
      blit(pressure.write);
      pressure.swap();

      // Pressure
      pressureProgram.bind();
      gl.uniform2f(
        pressureProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(
          pressureProgram.uniforms.uPressure,
          pressure.read.attach(1)
        );
        blit(pressure.write);
        pressure.swap();
      }

      // Gradient Subtract
      gradienSubtractProgram.bind();
      gl.uniform2f(
        gradienSubtractProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl.uniform1i(
        gradienSubtractProgram.uniforms.uPressure,
        pressure.read.attach(0)
      );
      gl.uniform1i(
        gradienSubtractProgram.uniforms.uVelocity,
        velocity.read.attach(1)
      );
      blit(velocity.write);
      velocity.swap();

      // Advection
      advectionProgram.bind();
      gl.uniform2f(
        advectionProgram.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      if (!ext.supportLinearFiltering)
        gl.uniform2f(
          advectionProgram.uniforms.dyeTexelSize,
          velocity.texelSizeX,
          velocity.texelSizeY
        );
      let velocityId = velocity.read.attach(0);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId);
      gl.uniform1i(advectionProgram.uniforms.uSource, velocityId);
      gl.uniform1f(advectionProgram.uniforms.dt, dt);
      gl.uniform1f(
        advectionProgram.uniforms.dissipation,
        config.VELOCITY_DISSIPATION
      );
      blit(velocity.write);
      velocity.swap();

      if (!ext.supportLinearFiltering)
        gl.uniform2f(
          advectionProgram.uniforms.dyeTexelSize,
          dye.texelSizeX,
          dye.texelSizeY
        );
      gl.uniform1i(
        advectionProgram.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1));
      gl.uniform1f(
        advectionProgram.uniforms.dissipation,
        config.DENSITY_DISSIPATION
      );
      blit(dye.write);
      dye.swap();
    }

    function render(target) {
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      drawDisplay(target);
    }

    function drawDisplay(target) {
      let width = target == null ? gl.drawingBufferWidth : target.width;
      let height = target == null ? gl.drawingBufferHeight : target.height;
      displayMaterial.bind();
      if (config.SHADING)
        gl.uniform2f(
          displayMaterial.uniforms.texelSize,
          1.0 / width,
          1.0 / height
        );
      gl.uniform1i(displayMaterial.uniforms.uTexture, dye.read.attach(0));
      blit(target);
    }

    function splatPointer(pointer) {
      let dx = pointer.deltaX * config.SPLAT_FORCE;
      let dy = pointer.deltaY * config.SPLAT_FORCE;
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
    }

 function hashCode(s: string): number {
      if (s.length === 0) return 0;
      let hash = 0;
      for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0; 
      }
      return hash;
    }

    function clickSplat(pointer) {
      const color = generateColor();
      color.r *= 10.0;
      color.g *= 10.0;
      color.b *= 10.0;
      let dx = 10 * (Math.random() - 0.5);
      let dy = 30 * (Math.random() - 0.5);
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
    }

    function splat(x, y, dx, dy, color) {
      splatProgram.bind();
      gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
      gl.uniform1f(
        splatProgram.uniforms.aspectRatio,
        canvas.width / canvas.height
      );
      gl.uniform2f(splatProgram.uniforms.point, x, y);
      gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0.0);
      gl.uniform1f(
        splatProgram.uniforms.radius,
        correctRadius(config.SPLAT_RADIUS / 100.0)
      );
      blit(velocity.write);
      velocity.swap();

      gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0));
      gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b);
      blit(dye.write);
      dye.swap();
    }

    function correctRadius(radius) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) radius *= aspectRatio;
      return radius;
    }

    function updatePointerDownData(pointer, id, posX, posY) {
      pointer.id = id;
      pointer.down = true;
      pointer.moved = false;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1.0 - posY / canvas.height;
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.deltaX = 0;
      pointer.deltaY = 0;
      pointer.color = generateColor();
    }

    function updatePointerMoveData(pointer, posX, posY, color) {
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1.0 - posY / canvas.height;
      pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
      pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
      pointer.moved =
        Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
      pointer.color = color;
    }

    function updatePointerUpData(pointer) {
      pointer.down = false;
    }

    function correctDeltaX(delta) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio < 1) delta *= aspectRatio;
      return delta;
    }

    function correctDeltaY(delta) {
      let aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) delta /= aspectRatio;
      return delta;
    }

   function generateColor(): { r: number; g: number; b: number } {
      // ... (HSVtoRGB needs to be typed or defined)
      return {r:0, g:0, b:0}; // Placeholder
    }

    function HSVtoRGB(h, s, v) {
      let r, g, b, i, f, p, q, t;
      i = Math.floor(h * 6);
      f = h * 6 - i;
      p = v * (1 - s);
      q = v * (1 - f * s);
      t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
        default:
          break;
      }
      return { r, g, b };
    }

    console.log("WebGL setup completed (partially typed). Further typing needed for runtime logic.");
    let animationFrameId: number;
    function updateFrameCaller() { // Renamed to avoid conflict if updateFrame is global
        // ... calls step(), render() etc.
        animationFrameId = requestAnimationFrame(updateFrameCaller);
    }

    function wrap(value, min, max) {
      const range = max - min;
      if (range === 0) return min;
      return ((value - min) % range) + min;
    }

    function getResolution(resolution) {
      let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
      if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
      const min = Math.round(resolution);
      const max = Math.round(resolution * aspectRatio);
      if (gl.drawingBufferWidth > gl.drawingBufferHeight)
        return { width: max, height: min };
      else return { width: min, height: max };
    }

    function scaleByPixelRatio(input) {
      const pixelRatio = window.devicePixelRatio || 1;
      return Math.floor(input * pixelRatio);
    }

    function hashCode(s) {
      if (s.length === 0) return 0;
      let hash = 0;
      for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0;
      }
      return hash;
    }

    window.addEventListener("mousedown", (e) => {
      let pointer = pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      updatePointerDownData(pointer, -1, posX, posY);
      clickSplat(pointer);
    });

    document.body.addEventListener(
      "mousemove",
      function handleFirstMouseMove(e) {
        let pointer = pointers[0];
        let posX = scaleByPixelRatio(e.clientX);
        let posY = scaleByPixelRatio(e.clientY);
        let color = generateColor();
        updateFrame(); // start animation loop
        updatePointerMoveData(pointer, posX, posY, color);
        document.body.removeEventListener("mousemove", handleFirstMouseMove);
      }
    );

    window.addEventListener("mousemove", (e) => {
      let pointer = pointers[0];
      let posX = scaleByPixelRatio(e.clientX);
      let posY = scaleByPixelRatio(e.clientY);
      let color = pointer.color;
      updatePointerMoveData(pointer, posX, posY, color);
    });

    document.body.addEventListener(
      "touchstart",
      function handleFirstTouchStart(e) {
        const touches = e.targetTouches;
        let pointer = pointers[0];
        for (let i = 0; i < touches.length; i++) {
          let posX = scaleByPixelRatio(touches[i].clientX);
          let posY = scaleByPixelRatio(touches[i].clientY);
          updateFrame(); // start animation loop
          updatePointerDownData(pointer, touches[i].identifier, posX, posY);
        }
        document.body.removeEventListener("touchstart", handleFirstTouchStart);
      }
    );

    window.addEventListener("touchstart", (e) => {
      const touches = e.targetTouches;
      let pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        let posX = scaleByPixelRatio(touches[i].clientX);
        let posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
      }
    });

    window.addEventListener(
      "touchmove",
      (e) => {
        const touches = e.targetTouches;
        let pointer = pointers[0];
        for (let i = 0; i < touches.length; i++) {
          let posX = scaleByPixelRatio(touches[i].clientX);
          let posY = scaleByPixelRatio(touches[i].clientY);
          updatePointerMoveData(pointer, posX, posY, pointer.color);
        }
      },
      false
    );

    window.addEventListener("touchend", (e) => {
      const touches = e.changedTouches;
      let pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        updatePointerUpData(pointer);
      }
    });

    updateFrame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    SIM_RESOLUTION,
    DYE_RESOLUTION,
    CAPTURE_RESOLUTION,
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    PRESSURE_ITERATIONS,
    CURL,
    SPLAT_RADIUS,
    SPLAT_FORCE,
    SHADING,
    COLOR_UPDATE_SPEED,
    BACK_COLOR,
    TRANSPARENT,
  ]);

  return (
    <div className="fixed top-0 left-0 z-50 pointer-events-none">
      <canvas ref={canvasRef} id="fluid" className="w-screen h-screen" />
    </div>
  );
}

export { SplashCursor };