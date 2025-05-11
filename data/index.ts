export const navItems = [
  { name: "PROJECTS", link: "#projects" },
  { name: "TECHSTACK", link: "#techstack" },
  { name: "GITHUB", link: "https://github.com/rr3s1", target: "_blank" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",

    className: "row-span-3 sm:row-span-3 md:row-span-4  lg:col-span-3 md:col-span-6  min-h-[45vh] sm:min-h-[50vh] md:min-h-[35vh] lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "ABOUT ME",
    description: "Hi there! My name is Rares and I enjoy developing web apps by using Next.js, Node.js, TypeScript with a keen eye for visually captivating UI/UX design. Experienced in delivering high performing, scalable applications that integrate advanced animation libraries (GSAP, Framer Motion) and cutting-edge 3D frameworks (Three.js, React Three Fiber). I prioritize clean design, strong security practices and efficiency in every project.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 justify-start text-justify-start text-2xl text-justify-start",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-30 blur-sm contrast-75 ",
    titleClassName: "justify-start text-justify-start font-bold text-2xl",
    img: "/DataRef.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "BACK-END",
    description: "Node.js, AWS, Appwrite, Firebase",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 opacity-30 blur-sm contrast-75",
    titleClassName: "justify-start text-justify-start font-bold text-2xl", 
    img: "",
    spareImg: "/22.png",
  },
  {
    id: 4,
    title: "FRONT-END",
    description: "React.js, Next.js, Vite, TypeScript, JavaScript (ES6+), React Native",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start text-justify-start font-bold text-2xl",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "3D & ANIMATION",
    description: "Three.js, React Three Fiber & Drei, GSAP, Framer Motion", 
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60", 
    titleClassName: "justify-start text-justify-start font-bold text-2xl", 
    img: "/b5.svg", 
    spareImg: "/grid.svg", 
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-6 md:col-span-6 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center items-center w-full h-full text-center",
    img: "", // Existing image
    spareImg: "",
  },
];


export const techstack = [
  {
    quote:
      "Leveraging its component-based architecture...",
    name: "React.js",
    title: "Declarative Component Framework",
    icon: "/public/arrow.svg", // This 'icon' seems to be a generic arrow, not the tech logo
    logo: "/logos/react.svg" // <<< ADD THIS
  },
  {
    quote:
      "Utilizing this powerful React framework...",
    name: "Next.js",
    title: "Server Rendering Framework",
    icon: "/public/arrow.svg",
    logo: "/logos/next.svg" // <<< ADD THIS
  },
  {
    quote:
      "Enhancing JavaScript development by adding static types...",
    name: "TypeScript",
    title: "Static Typed JavaScript",
    icon: "/public/arrow.svg",
    logo: "/logos/ts.svg" // <<< ADD THIS
  },
  {
    quote:
      "Employing a utility-first CSS framework...",
    name: "Tailwind CSS",
    title: "Utility First CSS",
    icon: "/public/arrow.svg",
    logo: "/logos/tailwind.svg" // <<< ADD THIS
  },
  {
    quote:
      "Utilizing this versatile JavaScript library to create...",
    name: "Three.js",
    title: "WebGL 3D Graphics",
    icon: "/public/arrow.svg",
    logo: "/logos/react.svg" // <<< ADD THIS
  },
  {
    quote:
      "Building declarative and reusable 3D scenes...",
    name: "React Three Fiber & Drei",
    title: "React Three Abstraction",
    icon: "/public/arrow.svg",
    logo: "/logos/react.svg" // <<< ADD THIS (or .svg if you have it)
  },
  {
    quote:
      "Implementing high-performance, intricate...",
    name: "GSAP (GreenSock)",
    title: "High Performance Animations",
    icon: "/public/arrow.svg",
    logo: "/logos/gsap.svg" // <<< ADD THIS
  },
  {
    quote:
      "Integrating production-ready animations...",
    name: "Framer Motion",
    title: "Declarative Motion Library",
    icon: "/public/arrow.svg",
    logo: "/logos/react.svg" // <<< ADD THIS
  },
  {
    quote:
      "Leveraging the industry-standard platform...",
    name: "GitHub",
    title: "Collaborative Code Platform",
    icon: "/public/arrow.svg",
    logo: "/logos/github.svg" // <<< ADD THIS
  },
  {
    quote:
      "Utilizing the Node Package Manager...",
    name: "NPM",
    title: "JavaScript Dependency Manager",
    icon: "/public/arrow.svg",
    logo: "/logos/npm.svg" // <<< ADD THIS
  },
  {
    quote:
      "Employing this highly-configurable static-module bundler...",
    name: "Webpack",
    title: "Static Module Bundler",
    icon: "/public/arrow.svg",
    logo: "/logos/webpack.svg" // <<< ADD THIS
  }
  // ... add logo paths for all your tech stack items
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
