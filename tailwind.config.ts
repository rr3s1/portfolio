import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: { // <-- Start of extend
      boxShadow: {
        neon: '0 0 8px rgba(222,60,191,0.6), 0 0 16px rgba(83,191,200,0.5)',
        neonHover: '0 0 8px rgba(222,60,191,0.8), 0 0 16px rgba(83,191,200,0.7), 0 0 24px rgba(228,173,104,0.6)',
        neonCard: '0 0 10px rgba(139, 92, 246, 0.6)',
      },
      colors: { // <-- Start of colors (fontFamily removed from here)
        neonPink: '#DE3CBF',
        neonOrange: '#f97316',
        neonPurple: '#8b5cf6',
        neonBlue: '#3b82f6',
        neonCyan: '#53BFC8',
        neonGold: '#E4AD68',
        black: {
          '100': '#060718',
          '200': '#0f132a',
          '300': 'rgba(255, 255, 255, 0.125)',
          DEFAULT: '#000'
        },
        white: {
          '100': '#EAEAF0',
          '200': '#C1C2D3',
          DEFAULT: '#FFF'
        },
        magenta: {
          '400': '#FF2D96',
          DEFAULT: '#FF2AA9'
        },
        cyan: {
          '300': '#00CFFF',
          DEFAULT: '#14D5FF'
        },
        orange: {
          '300': '#FFA73C',
          DEFAULT: '#FF9C3B'
        },
        yellow: {
          '300': '#FFE480',
          DEFAULT: '#FFD54F'
        },
        gray: {
          '400': '#606575'
        },
        brand: {
          bg: '#0A0A16',
          'primary-50': '#4CC9F0',
          'primary-100': '#7209B7',
          accent: '#F72585'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        darkBg: '#181727',
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      }, // <-- End of colors

      // V V V V V CORRECT PLACEMENT FOR fontFamily V V V V V
      fontFamily: {
        title: ["var(--font-title)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
        quantico: ["var(--font-quantico)", "sans-serif"],
      },
      // ^ ^ ^ ^ ^ CORRECT PLACEMENT FOR fontFamily ^ ^ ^ ^ ^

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)'
          }
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)'
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)'
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)'
          }
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(180deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '50%': {
            transform: 'translateY(50%)'
          },
          '100%': {
            transform: 'translateY(-50%)'
          }
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%'
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%'
          }
        },
        gradientText: {
          to: {
            backgroundPosition: '200% center'
          }
        },
        tiltBeam: {
          '0%, 100%': {
            transform: 'translateY(10%) rotate(-1deg)'
          },
          '50%': {
            transform: 'translateY(-10%) rotate(1deg)'
          }
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))'
          }
        },
        "gradient-border": {
          "0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
          "25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
          "50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
          "75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
        },
        "gradient-1": {
          "0%, 100%": { top: "0", right: "0" },
          "50%": { top: "50%", right: "25%" },
          "75%": { top: "25%", right: "50%" },
        },
        "gradient-2": {
          "0%, 100%": { top: "0", left: "0" },
          "60%": { top: "75%", left: "25%" },
          "85%": { top: "50%", left: "50%" },
        },
        "gradient-3": {
          "0%, 100%": { bottom: "0", left: "0" },
          "40%": { bottom: "50%", left: "25%" },
          "65%": { bottom: "25%", left: "50%" },
        },
        "gradient-4": {
          "0%, 100%": { bottom: "0", right: "0" },
          "50%": { bottom: "25%", right: "40%" },
          "90%": { bottom: "50%", right: "25%" },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        shimmer: 'shimmer 2s linear infinite',
        aurora: 'aurora 15s ease-in-out infinite',
        'gradient-text': 'gradientText 3s ease infinite alternate',
        'tilt-beam': 'tiltBeam 10s ease-in-out infinite',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'gradient-x': 'gradient-x 6s ease-in-out infinite',
      }
    } // <-- End of extend
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],


} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;