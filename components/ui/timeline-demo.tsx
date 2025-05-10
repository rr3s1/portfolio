import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: <span className="text-gradient-magenta  bg-clip-text text-transparent" id="projects">Modern Next.js Portfolio</span>,
      content: (
        <div className="bg-transparent varela-round-regular" >
          <p className="mb-8 varela-round-regular font-normal text-neutral-800 md:text-sm lg:text-xl dark:text-neutral-200">
            Portfolio Landing Page crafted using Next.js, Three.js, Framer Motion and TailwindCSS
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://github.com/user-attachments/assets/b0ff4d9f-f34d-454c-9d2a-90346561ef0d"
              alt="Hero section"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/a56a8824-7032-4287-91d5-1f0a9670dca9"
              alt="Bento Grid section"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/ca4488c0-3990-4e31-8439-2c74142f2d0a"
              alt="Recent Projects"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/287aa0fc-f127-4e1a-a9b0-08a728262069"
              alt="Testimonials"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: <span className="text-gradient-magenta bg-clip-text text-transparent">SaaS Xora Modern UI/UX</span>,

      content: (
        <div>
         <p className="varela-round-regular mb-8 text-xs font-normal text-neutral-800 md:text-sm lg:text-xl dark:text-neutral-200">
            SaaS Landing Page developed using React.js and Tailwind CSS that exemplifies modern UI/UX principles.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://github.com/user-attachments/assets/d3dc9acf-b220-4cbc-9c13-bb7dc231148b"
              alt="SaaS Xora"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/4f54e4bb-338b-43cc-9efb-f46298428a35"
              alt="SaaS Xora"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/6bd5dca9-1760-4e04-a8f6-c2e03233782e"
              alt="SaaS Xora"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/cf1bd670-78bb-43a4-89db-f30eacdc1a3d"
              alt="SaaS Xora"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: <span className="text-gradient-magenta bg-clip-text text-transparent">3D Portfolio</span>,
      
      content: (
        <div>
          <p className="varela-round-regular mb-8 text-xs font-normal text-neutral-800 md:text-sm lg:text-xl dark:text-neutral-200">
            Minimalistic 3D portfolio landing page built with React.js, Three.js and TailwindCSS to demonstrate developer skills.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://github.com/user-attachments/assets/cd28a634-f16f-4f37-8bef-e8359b9a9551"
              alt="3D Portfolio"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/3259bdfa-6422-4c14-bf84-a9c56f1d3635"
              alt="3D Portfolio"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/5a4cce2c-14ee-4e51-98ff-fd421ca6f1e9"
              alt="3D Portfolio"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/ff053505-b5d1-4070-b612-cc1f0154ff3d"
              alt="3D Portfolio"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: <span className="text-gradient-magenta bg-clip-text text-transparent">Healthcare Management</span>,
      
      content: (
        <div>
         <p className="varela-round-regular mb-8 text-xs font-normal text-neutral-800 md:text-sm lg:text-xl dark:text-neutral-200">
            A full stack healthcare patient management application that allows patients to register, book and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://github.com/user-attachments/assets/7f35c87e-02ec-4e5c-81b7-a40731fdaf90"
              alt="Welcome Screen"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/0b60b500-fea5-44cb-962c-432bd883cf2a"
              alt="Patient Registration"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/aa77e153-6c51-4e34-84b4-85ae7d74ea79"
              alt="Patient Registration continued"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/9c505804-daee-496c-91f8-7503c24baa5b"
              alt="Admin dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: <span className="text-gradient-magenta bg-clip-text text-transparent">Awwwards Zentry Clone</span>,
    
      content: (
        <div>
         <p className="varela-round-regular mb-8 text-xs font-normal text-neutral-800 md:text-sm lg:text-xl dark:text-neutral-200">
            Visually captivating website inspired by Zentry, featuring scroll-triggered animations, geometric transitions and engaging video storytelling.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://github.com/user-attachments/assets/bf803d45-9ca1-43fa-a716-b1ceb8f5ae43"
              alt="Zentry Clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/6f1cb9c5-ac59-4e28-8db1-f427869e7e58"
              alt="Zentry Clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/ef0192de-549e-4901-9281-acadabaa89bc"
              alt="Zentry Clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/8397440a-8645-4741-9608-a71407bb8ad6"
              alt="Zentry Clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
    
      title: <span className="text-gradient-magenta bg-clip-text text-transparent">File Management Platform</span>,
      content: (
        <div>
          <p className=" varela-round-regular mb-8 text-xs font-normal text-neutral-800 md:text-sm lg:text-xl dark:text-neutral-200">
            A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://github.com/user-attachments/assets/458d6b98-8a0c-4c82-a976-b41eaf7c4f19"
              alt="File Management"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          
            <img
              src="https://github.com/user-attachments/assets/0af54ee2-c9a6-4f83-9943-9348677ddefe"
              alt="File Management"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
    
      title: <span className="text-gradient-magenta bg-clip-text text-transparent">3D iPhone Landing Page Clone</span>,
      content: (
        <div>
          <p className="varela-round-regular mb-8 text-xs font-normal text-neutral-800 md:text-sm lg:text-xl dark:text-neutral-200">
            Clone of Apple&apos;s iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://github.com/user-attachments/assets/d2804379-3420-4925-b028-40d9d675905a"
              alt="iPhone Clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/7f7dc2c9-197f-415e-aab9-f1c98f632d0c"
              alt="iPhone Clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/2569b905-0652-42ff-94cd-89697b04bac9"
              alt="iPhone Clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/aacbde79-92be-4fb9-98c0-70bb6b856c27"
              alt="iPhone Clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
    
      title: <span className="text-gradient-magenta bg-clip-text text-transparent">University Library Management System</span>,
      content: (
        <div>
          <p className="varela-round-regular mb-8 text-xs font-normal text-neutral-800 md:text-sm lg:text-xl dark:text-neutral-200">
            Full stack University Library Management System built with Next.js, TypeScript and Postgres. Production-grade platform featuring a public-facing app and an admin interface.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://github.com/user-attachments/assets/70421f92-6ce6-4a13-8c91-14932e286d40"
              alt="Library System"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/6bc6654b-f195-4375-9d0b-02ba2a613ade"
              alt="Library System"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/4eefe733-04ab-41bc-b204-8ae7a62c474f"
              alt="Library System"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://github.com/user-attachments/assets/079cf308-3db5-4566-aa08-4b41304520a0"
              alt="Library System"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full h-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}