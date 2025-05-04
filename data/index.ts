export const navItems = [
  { name: "Projects", link: "#projects" },
  { name: "Tech Stack", link: "#techstack" },
  { name: "GitHub", link: "https://github.com/rr3s1", target: "_blank" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "AVAILABLE",
    description: "Worldwide 24/7",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "SKILLS",
    description: "Frontend & Backend Development",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "PROJECTS",
    description: "Check out my latest work",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "EXPERIENCE",
    description: "",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center lg:row-span-1",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "EMAIL ME",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techstack = [
  // ——— existing testimonials ———
  {
    quote:
      "Leveraging its component-based architecture and Virtual DOM for building highly interactive, performant, and scalable user interfaces. Its declarative nature simplifies UI logic, while hooks provide powerful state management and lifecycle features. The vast ecosystem, including libraries like React Router and state-management solutions (Redux, Zustand), combined with strong community support, makes it ideal for developing complex single-page applications (SPAs).",
    name: "React.js",
    title: "Declarative Component Framework",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Utilizing this powerful React framework to build production-grade web applications with features like server-side rendering (SSR) and static-site generation (SSG) for superior SEO and initial-load performance. Its file-system–based routing simplifies page creation, while API routes allow for building backend functionality within the same project. Features like built-in image optimization, automatic code splitting, and middleware enhance both developer experience and application performance, making it perfect for full-stack development and content-heavy sites.",
    name: "Next.js",
    title: "Server Rendering Framework",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Enhancing JavaScript development by adding static types, which significantly improve code quality, maintainability, and developer productivity—especially in large-scale applications. TypeScript catches potential errors during compile time, provides excellent tooling support like autocompletion and refactoring within code editors, and makes code easier to understand and collaborate on. Its gradual-adoption strategy allows integration into existing JavaScript projects smoothly.",
    name: "TypeScript",
    title: "Static Typed JavaScript",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Employing a utility-first CSS framework to rapidly build custom, responsive user interfaces directly within the HTML markup. This approach eliminates the need for writing extensive custom CSS, avoids naming conflicts, and promotes consistency through a configurable design system (theme). Its Just-in-Time (JIT) engine ensures optimized production builds by purging unused styles, leading to smaller CSS files and faster load times while enabling rapid prototyping and development.",
    name: "Tailwind CSS",
    title: "Utility First CSS",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Utilizing this versatile JavaScript library to create and display stunning, interactive 3D graphics directly in the web browser via WebGL, without relying on plugins. It provides fine-grained control over scenes, cameras, lighting, materials, geometries, and animations—supporting complex 3D models, physics engines, post-processing effects, and immersive experiences ranging from product configurators and data visualizations to games.",
    name: "Three.js",
    title: "WebGL 3D Graphics",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Building declarative and reusable 3D scenes within React applications using React Three Fiber (R3F). R3F bridges the React component model with Three.js, allowing developers to leverage React's state management, hooks, and ecosystem for 3D development. Complemented by Drei, which provides a vast collection of essential helpers, components (like controls, loaders, shaders), and abstractions, significantly reducing boilerplate code and accelerating the creation of complex, interactive 3D web experiences.",
    name: "React Three Fiber & Drei",
    title: "React Three Abstraction",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Implementing high-performance, intricate, and precisely controlled web animations using the GreenSock Animation Platform. GSAP excels at complex sequencing via timelines, animating virtually any JavaScript-accessible property (CSS, SVG, Canvas objects, etc.) with remarkable smoothness and reliability across browsers. Its modular plugin system, including powerful tools like ScrollTrigger for scroll-based animations and Draggable for interactive elements, provides unparalleled creative control for sophisticated motion design.",
    name: "GSAP (GreenSock)",
    title: "High Performance Animations",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Integrating production-ready animations, complex gestures (like drag, hover, tap), and seamless layout transitions into React applications with an intuitive and declarative API. Framer Motion simplifies animating components based on state changes, orchestrating entrance/exit animations, and creating fluid interactions. Its excellent integration with the React component lifecycle and features like variants for managing animation states make it easy to add sophisticated, physics-based motion design directly within JSX.",
    name: "Framer Motion",
    title: "Declarative Motion Library",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Leveraging the industry-standard platform for Git-based version control, source-code management, and seamless collaboration. Utilizing features like pull requests for code reviews, issue tracking for project management, and branching strategies for parallel development enhances team productivity and code quality. Furthermore, integrating GitHub Actions enables powerful CI/CD pipelines to automate testing, building, and deployment processes, streamlining the entire development workflow.",
    name: "GitHub",
    title: "Collaborative Code Platform",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Utilizing the Node Package Manager as the backbone for managing project dependencies and accessing the world's largest registry of reusable JavaScript code. NPM simplifies installing, updating, and managing external libraries and tools. Using `package.json` and `package-lock.json` ensures consistent builds across environments, while `npm scripts` provide a convenient way to automate common development tasks like testing, linting, and building.",
    name: "NPM",
    title: "JavaScript Dependency Manager",
    icon: "/public/arrow.svg"
  },
  {
    quote:
      "Employing this highly-configurable static-module bundler to process and optimize JavaScript applications and their dependencies for the browser. Webpack bundles various assets (JS, CSS, images, fonts) into optimized chunks, improving load times. Through loaders (e.g., Babel for transpiling modern JS) and plugins (e.g., for minification, code splitting, environment variables), it enables advanced features like Hot Module Replacement (HMR) for a better development experience and sophisticated build optimizations for production deployment.",
    name: "Webpack",
    title: "Static Module Bundler",
    icon: "/public/arrow.svg"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
