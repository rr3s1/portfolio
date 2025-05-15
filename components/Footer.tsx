import * as React from "react";

import Image from "next/image";


import { ContactForm } from "@/components/ui/contact-form";

const Footer = () => {
    return (
        <footer 
            className=" relative w-full overflow-hidden px-4 pb-1 rounded-3xl shadow-lg border border-white/10 bg-gradient-to-br from-black-200/80 via-black-100/60 to-black-200/80 backdrop-blur-xl mx-auto max-w-5xl"
            
        >
            {/* Aurora/gradient overlay for extra depth */}
            <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/20 via-[#8B5CF6]/10 to-[#FF2AA9]/20 blur-2xl opacity-60" />
            </div>

            <div className="flex flex-col items-center z-10 relative mt-20 ">
                <h1 className="heading text-2xl lg:max-w-[45vw] text-white drop-shadow-md"><span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> UPGRADE </span>
                
                <span className="text-sky-400 font-quantico"> YOUR
                </span>
                 <span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> BUSINESS
                     </span>
                </h1>

                <p className="text-sky-300 md:mt-10 text-2xl font-normal my-5 text-center font-quantico max-w-xl">
           
                    Whether you need a blazing-fast landing page,<br /> a secure full-stack app
    or a 3D interactive demo 
                </p>
                
                
            
            </div>
            
            <ContactForm />

            <div className="flex flex-col items-center mt-16 z-10 relative">
                <div className="flex items-center gap-6 mb-4">
                    {/* GitHub */}
                    <a href="https://github.com/rr3s1" target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 flex justify-center items-center rounded-lg border border-white/10 bg-black-200/80 hover:shadow-neon transition-all duration-200">
                        <Image src="/git.svg" alt="GitHub" width={20} height={20} className="drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]" />
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/raressilviulazar/" target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 flex justify-center items-center rounded-lg border border-white/10 bg-black-200/80 hover:shadow-neon transition-all duration-200">
                        <Image src="/link.svg" alt="LinkedIn" width={20} height={20} className="drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]" />
                    </a>
                </div>
                
                <a href="#Hero" className="w-15 h-15 flex justify-center items-center rounded-lg border border-white/10 bg-black-200/80 hover:shadow-neon transition-all duration-200">
    <Image src="/rs-concept.png" alt="RSHome" width={50} height={50} className="drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]" />
</a>
                    <p className="text-xs text-white-200 font-light mt-5 text-center font-quantico tracking-wide" id="contact">
                    Copyright © {new Date().getFullYear()} Rares Silviu Lazar
                </p>
            </div>
        </footer>
    );
};

export default Footer;
