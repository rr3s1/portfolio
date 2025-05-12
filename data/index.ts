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
    description: "Hi there! I enjoy developing web apps by using Next.js, Node.js, TypeScript with a keen eye for visually captivating UI/UX design. Experienced in delivering high performing, scalable applications that integrate advanced animation libraries (GSAP, Framer Motion) and cutting-edge 3D frameworks (Three.js, React Three Fiber). I prioritize clean design, strong security practices and efficiency in every project.",
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
    icon: "/public/arrow.svg",
    logo: "/logos/react.svg"
  },
  {
    quote:
      "Utilizing this powerful React framework...",
    name: "Next.js",
    title: "Server Rendering Framework",
    icon: "/public/arrow.svg",
    logo: "/logos/next.svg"
  },
  {
    quote:
      "Enhancing JavaScript development by adding static types...",
    name: "TypeScript",
    title: "Static Typed JavaScript",
    icon: "/public/arrow.svg",
    logo: "/logos/ts.svg"
  },
  {
    quote:
      "Employing a utility-first CSS framework...",
    name: "Tailwind CSS",
    title: "Utility First CSS",
    icon: "/public/arrow.svg",
    logo: "/logos/tailwind.svg"
  },
  {
    quote:
      "Utilizing this versatile JavaScript library to create...",
    name: "Three.js",
    title: "WebGL 3D Graphics",
    icon: "/public/arrow.svg",
    logo: "/logos/ts.svg" // Assuming this was a typo and should be threejs.svg, or if it truly reuses react.svg, keep as is. For this solution, I'll assume it should be specific to Three.js
  },
  {
    quote:
      "Building declarative and reusable 3D scenes...",
    name: "React Three Fiber & Drei",
    title: "React Three Abstraction",
    icon: "/public/arrow.svg",
    logo: "/logos/ts.svg" // Assuming a logo for R3F, or reuse react.svg if intended. For this solution, I'll assume it should be specific.
  },
  {
    quote:
      "Implementing high-performance, intricate...",
    name: "GSAP (GreenSock)",
    title: "High Performance Animations",
    icon: "/public/arrow.svg",
    logo: "/logos/gsap.svg"
  },
  {
    quote:
      "Integrating production-ready animations...",
    name: "Framer Motion",
    title: "Declarative Motion Library",
    icon: "/public/arrow.svg",
    logo: "/logos/gsap.svg" // Assuming a logo for Framer Motion, or reuse react.svg if intended. For this solution, I'll assume it should be specific.
  },
  {
    quote:
      "Leveraging the industry-standard platform...",
    name: "GitHub",
    title: "Collaborative Code Platform",
    icon: "/public/arrow.svg",
    logo: "/logos/github.svg"
  },
  {
    quote:
      "Utilizing the Node Package Manager...",
    name: "NPM",
    title: "JavaScript Dependency Manager",
    icon: "/public/arrow.svg",
    logo: "/logos/npm.svg"
  },
  {
    quote:
      "Employing this highly-configurable static-module bundler...",
    name: "Webpack",
    title: "Static Module Bundler",
    icon: "/public/arrow.svg",
    logo: "/logos/webpack.svg"
  }
];


export const techstackV2 = [
  {
    quote:
      "Builds interactive UIs using component architecture and Virtual DOM for performance. Declarative logic and hooks simplify state management. Its vast ecosystem and community support make it ideal for complex SPAs.",
    name: "React.js",
    title: "Declarative Component Framework",
    icon: "/logos/react.svg"
  },
  {
    quote:
      "Powerful React framework for production web apps, featuring SSR/SSG for SEO and performance. Simplifies routing and backend tasks with API routes. Built-in optimizations enhance developer experience and app speed.",
    name: "Next.js",
    title: "Server Rendering Framework",
    icon: "/logos/pngs/devicon-plain--nextjs.png" // Updated from TECHLIST
  },
  {
    quote:
      "Enhances JavaScript with static types, improving code quality and maintainability. Catches errors at compile time, offers excellent tooling like autocompletion, and simplifies collaboration on large projects.",
    name: "TypeScript",
    title: "Static Typed JavaScript",
    icon: "/logos/pngs/typescript.png" // Updated from TECHLIST
  },
  {
    quote:
      "A utility-first CSS framework for rapidly building custom UIs directly in HTML. Promotes consistency via a configurable design system. Its JIT engine ensures optimized, small CSS files for faster load times.",
    name: "Tailwind CSS",
    title: "Utility First CSS",
    icon: "/logos/pngs/tailwindcss.png" // Updated from TECHLIST
  },
  {
    quote:
      "Versatile JavaScript library for creating interactive 3D graphics in browsers via WebGL. Provides fine-grained control over scenes, cameras, lighting, and animations, supporting complex models and immersive experiences.",
    name: "Three.js",
    title: "WebGL 3D Graphics",
    icon: "/logos/pngs/ts.png" // Updated from TECHLIST
  },
  {
    quote:
      "Builds declarative 3D scenes in React using R3F, bridging React's model with Three.js. Drei provides helpers and components, reducing boilerplate and accelerating creation of complex, interactive 3D web experiences.",
    name: "React Three Fiber & Drei",
    title: "React Three Abstraction",
    icon: "/logos/ts.svg" // Keeping original as no direct match in TECHLIST
  },
  {
    quote:
      "High-performance JavaScript animation platform for intricate, controlled web animations. Excels at complex sequencing and animating diverse properties smoothly. Modular plugins like ScrollTrigger offer unparalleled creative control.",
    name: "GSAP (GreenSock)",
    title: "High Performance Animations",
    icon: "/logos/pngs/gsap.png" // Updated from TECHLIST
  },
  {
    quote:
      "Integrates production-ready animations, complex gestures, and layout transitions in React with an intuitive API. Simplifies state-based animations and fluid interactions. Easily adds sophisticated, physics-based motion within JSX.",
    name: "Framer Motion",
    title: "Declarative Motion Library",
    icon: "/logos/pngs/motion.png" // Updated from TECHLIST (assuming motion.png is for Framer Motion)
  },
  {
    quote:
      "Industry-standard platform for Git version control, source-code management, and collaboration. Features pull requests, issue tracking, and branching for team productivity. GitHub Actions enables CI/CD automation.",
    name: "GitHub",
    title: "Collaborative Code Platform",
    icon: "/logos/github.svg" // Keeping original as no direct 'github.png' in TECHLIST
  },
  {
    quote:
      "Node Package Manager for project dependencies and accessing the vast JavaScript code registry. Simplifies installing and managing libraries. `package.json` ensures consistent builds; `npm scripts` automate tasks.",
    name: "NPM",
    title: "JavaScript Dependency Manager",
    icon: "/logos/npm.svg" // Keeping original as no direct 'npm.png' in TECHLIST
  },
  {
    quote:
      "Highly-configurable static module bundler that processes and optimizes JS applications and assets for browsers. Improves load times using loaders and plugins for features like HMR and advanced build optimizations.",
    name: "Webpack",
    title: "Static Module Bundler",
    icon: "/logos/webpack.svg" // Keeping original as no direct 'webpack.png' in TECHLIST
  },
  // New items from TECHLIST start here
  {
    quote:
      "Platform for businesses to easily facilitate payments between multiple parties. Enables marketplaces and SaaS platforms to integrate payment splitting and complex payouts seamlessly.",
    name: "Stripe Connect",
    title: "Connected Accounts Platform",
    icon: "/logos/pngs/StripeConnect.png"
  },
  {
    quote:
      "Collection of beautifully designed, copy-paste UI components built with Tailwind CSS and Framer Motion. Ideal for crafting modern, highly animated web interfaces quickly.",
    name: "Aceternity UI",
    title: "Modern UI Components",
    icon: "/logos/pngs/aceternityui.png"
  },
  {
    quote:
      "Provides robust authentication and authorization as a service. Simplifies adding secure login, user management, and fine-grained access control to any application.",
    name: "Auth0",
    title: "Identity & Access Management",
    icon: "/logos/pngs/auth0.png"
  },
  {
    quote:
      "Amazon Web Services offers a broad array of global cloud-based products. Includes scalable compute, storage, databases, analytics, networking, machine learning, and more services.",
    name: "AWS",
    title: "Cloud Computing Services",
    icon: "/logos/pngs/aws.png"
  },
  {
    quote:
      "End-to-end cloud solution for comprehensive image and video management. Provides smart storage, optimization, real-time transformation, and delivery via CDN for web/mobile apps.",
    name: "Cloudinary",
    title: "Media Management Platform",
    icon: "/logos/pngs/cloudinary.png"
  },
  {
    quote:
      "Serverless backend platform featuring a reactive data model. Simplifies building full-stack, real-time applications with TypeScript, offering automatic state synchronization and data consistency.",
    name: "Convex",
    title: "Reactive Backend Platform",
    icon: "/logos/pngs/convex.png"
  },
  {
    quote:
      "Self-hostable Backend-as-a-Service platform. Provides pre-built APIs for authentication, databases, storage, functions, and real-time communication to accelerate modern app development.",
    name: "Appwrite",
    title: "Open-Source BaaS",
    icon: "/logos/pngs/appwrite.png"
  },
  {
    quote:
      "JavaScript framework for building native mobile applications for both iOS and Android from a single codebase. Leverages React's declarative UI paradigm for efficient mobile development.",
    name: "React Native",
    title: "Cross-Platform Mobile Dev",
    icon: "/logos/pngs/reactnative-wordmark.png"
  },
  {
    quote:
      "Service for sending emails directly from client-side JavaScript code without needing a backend. Useful for contact forms and simple email notifications in web apps.",
    name: "EmailJS",
    title: "Client-Side Email Service",
    icon: "/logos/pngs/emailjs.png"
  },
  {
    quote:
      "Open-source platform and toolkit for making universal React applications. Streamlines React Native development with tools, services, and a managed workflow for easier builds and deployments.",
    name: "Expo",
    title: "React Native Toolkit",
    icon: "/logos/pngs/expo.png"
  },
  {
    quote:
      "Real-time image optimization, transformation, and smart delivery CDN. Significantly enhances website performance with automatically optimized images and faster loading times across devices.",
    name: "ImageKit.io",
    title: "Image Optimization & CDN",
    icon: "/logos/pngs/imageKit.png"
  },
  {
    quote:
      "Cloud communications platform providing versatile APIs for SMS, voice, video, email, and chat. Enables developers to easily embed various communication features into their applications.",
    name: "Twilio",
    title: "Communication APIs",
    icon: "/logos/pngs/twilio-icon.png"
  },
  {
    quote:
      "Modern frontend build tool and development server known for its speed. Offers instant server start, lightning-fast Hot Module Replacement (HMR), and optimized builds for web projects.",
    name: "Vite",
    title: "Next-Gen Frontend Tooling",
    icon: "/logos/pngs/vitejs.png"
  },
  {
    quote:
      "Popular NoSQL document-oriented database. Stores data in flexible, JSON-like documents, enabling dynamic schemas and scalable solutions for modern application development.",
    name: "MongoDB",
    title: "NoSQL Document Database",
    icon: "/logos/pngs/mongodb.png"
  },
  {
    quote:
      "Integrates Tailwind CSS utility classes directly into React Native applications. Allows developers to use familiar Tailwind syntax for styling mobile apps consistently and rapidly.",
    name: "NativeWind",
    title: "Tailwind for React Native",
    icon: "/logos/pngs/nativewind.png"
  },
  {
    quote:
      "Powerful, open-source object-relational database system. Renowned for its reliability, data integrity, feature robustness, and performance in handling complex data workloads.",
    name: "PostgreSQL",
    title: "Relational Database System",
    icon: "/logos/pngs/postgresql.png"
  },
  {
    quote:
      "Modern email sending platform designed for developers. Focuses on high deliverability and reliability for transactional and marketing emails through a simple, clean API.",
    name: "Resend", // Assuming resent1.png is Resend
    title: "Email API for Developers",
    icon: "/logos/pngs/resent1.png"
  },
  {
    quote:
      "A collection of beautifully designed, re-usable UI components built with Radix UI and Tailwind CSS. Not a traditional library, but rather copy-pasteable code for custom UIs.",
    name: "shadcn/ui",
    title: "Reusable UI Components",
    icon: "/logos/pngs/shadcn.png"
  },
  {
    quote:
      "Developer-first authentication and user management service. Provides embeddable UI components (React, Next.js) and robust APIs for seamless integration of secure auth flows.",
    name: "Clerk",
    title: "User Management Platform",
    icon: "/logos/pngs/clerk.png"
  },
  {
    quote:
      "Lightweight, TypeScript-first Object Relational Mapper for SQL databases. Offers excellent type safety, schema migrations, and an intuitive query builder for modern backend development.",
    name: "Drizzle ORM",
    title: "TypeScript SQL ORM",
    icon: "/logos/pngs/drizzle.png"
  },
  {
    quote:
      "Implementation of dark mode theming to enhance user interface accessibility and visual comfort. Provides an alternative color scheme, often user-toggleable, for low-light environments.",
    name: "Dark Mode Theming",
    title: "UI Dark Mode Support",
    icon: "/logos/pngs/dark.png"
  },
  {
    quote:
      "Tools or libraries specifically for implementing dark mode toggling and theme management within React applications, often leveraging React Context for state propagation.",
    name: "React Dark Mode",
    title: "Dark Mode for React Apps",
    icon: "/logos/pngs/react-dark.png"
  },
  {
    quote:
      "Comprehensive suite of payment APIs powering online commerce globally. Enables businesses to securely accept payments, send payouts, and manage financial operations online effectively.",
    name: "Stripe",
    title: "Online Payment Processing",
    icon: "/logos/pngs/stripe.png"
  },
  {
    quote:
      "Serverless data platform offering Redis and Kafka for data-intensive applications. Features per-request pricing and global low-latency access, ideal for modern cloud architectures.",
    name: "Upstash",
    title: "Serverless Data Platform",
    icon: "/logos/pngs/upstash.png"
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
