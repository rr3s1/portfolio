export const navItems = [
  // No 'name', 'title', 'des', 'description', 'quote' keys here - unchanged
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // "Testimonials" name remains, content will be emptied later
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    // Replaced 'title', kept 'description' empty as original
    title: "Leveraging 5+ years of IT support and collaboration skills in web development.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
     // Replaced 'title', kept 'description' empty as original
    title: "Bridging IT Support Expertise with Modern Full-Stack Development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    // Replaced 'title' and 'description' based on NEWINFO skills
    title: "My Core Skills & Technologies",
    description: "React, Next.js, Node.js, TypeScript & more",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    // Kept 'title' as it aligns with NEWINFO summary, kept 'description' empty
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    // Replaced 'title' and 'description' with project highlights from NEWINFO
    title: "Developing Full-Stack Healthcare & File Management Platforms",
    description: "Key Project Highlights",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    // Kept 'title' as a standard CTA, kept 'description' empty
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    // Replaced 'title' and 'des' with first project from NEWINFO
    title: "Full-Stack - Healthcare Patient Management Platform",
    des: "Next.js/TypeScript platform with patient registration, appointment booking/management, Twilio SMS notifications, and Appwrite/Sentry integration.",
    img: "/p1.svg", // Image may no longer be relevant
    iconLists: ["/next.svg", "/ts.svg", "/app.svg", "/tail.svg", "/c.svg"], // Icons might need update based on tech stack mentioned in 'des'
    link: "#", // Link should be updated if available
  },
  {
    id: 2,
    // Replaced 'title' and 'des' with second project from NEWINFO
    title: "Full-Stack - File Management & Storage Solution",
    des: "Secure file management/sharing using Next.js 15, TypeScript, Appwrite. Features user auth, global search, and storage analytics dashboards.",
    img: "/p2.svg", // Image may no longer be relevant
    iconLists: ["/next.svg", "/ts.svg", "/app.svg", "/tail.svg", "/re.svg"], // Icons might need update
    link: "#", // Link should be updated if available
  },
  {
    id: 3,
    // Replaced 'title' and 'des' with third project from NEWINFO
    title: "Landing Page - iPhone GSAP",
    des: "Interactive landing page recreating iPhone features using React, GSAP for animations, Tailwind CSS, and Three.js/R3F for 3D elements.",
    img: "/p3.svg", // Image may no longer be relevant
    iconLists: ["/re.svg", "/gsap.svg", "/tail.svg", "/three.svg", "/vite.svg"], // Icons might need update
    link: "#", // Link should be updated if available
  },
  {
    id: 4,
    // Replaced 'title' and 'des' with fourth project from NEWINFO
    title: "Landing Page - Zentry Inspired",
    des: "Modern landing page with scroll-based GSAP animations, clip-path effects, 3D hover effects, and video integration. Built with React and Tailwind CSS.",
    img: "/p4.svg", // Image may no longer be relevant
    iconLists: ["/re.svg", "/gsap.svg", "/tail.svg"], // Icons might need update
    link: "#", // Link should be updated if available
  },
];

export const testimonials = [
  // Replaced 'quote', 'name', 'title' with empty strings as NEWINFO lacks testimonials
  {
    quote: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    name: "",
    title: "",
  },
];

export const companies = [
  // No 'name', 'title', 'des', 'description', 'quote' keys here matching the request scope
  // The 'name' here likely refers to the company/technology logo identity, not a person's name or job title.
  // Some names (appwrite, docker) are mentioned in NEWINFO skills. Leaving as is.
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

export const workExperience = [
  // Replaced 'title' based on WORK EXPERIENCE from NEWINFO (most recent first).
  // 'desc' key was not in the replacement list, so it remains unchanged.
  {
    id: 1,
    title: "Software & Application Support | HSBC / Octopus",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.", // Original desc remains
    className: "md:col-span-2",
    thumbnail: "/exp1.svg", // Thumbnail may no longer be relevant
  },
  {
    id: 2,
    title: "IT Support Analyst | Greystar",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.", // Original desc remains
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg", // Thumbnail may no longer be relevant
  },
  {
    id: 3,
    title: "Software Licensing Administrator | Bournemouth University",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.", // Original desc remains
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg", // Thumbnail may no longer be relevant
  },
  {
    id: 4,
    title: "IT Administrator | Deskside Support Engineer | Orange",
    desc: "Developed and maintained user-facing features using modern frontend technologies.", // Original desc remains
    className: "md:col-span-2",
    thumbnail: "/exp4.svg", // Thumbnail may no longer be relevant
  },
  // Note: NEWINFO has 5 roles, original data had 4 slots. Mapping the most recent 4.
];

export const socialMedia = [
    // No 'name', 'title', 'des', 'description', 'quote' keys here - unchanged
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