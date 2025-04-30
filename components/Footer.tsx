import * as React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import MagicButton from "../components/ui/MagicButton";
import BackgroundBeamsDemo from "./ui/background-beams-demo";

const Footer = () => {
    return (
        <footer
            className="relative w-full overflow-hidden px-4 py-10 rounded-3xl shadow-lg border border-white/10 bg-gradient-to-br from-black-200/80 via-black-100/60 to-black-200/80 backdrop-blur-xl mx-auto max-w-5xl"
            id="contact"
        >
            {/* Aurora/gradient overlay for extra depth */}
            <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8A38]/20 via-[#14D5FF]/10 to-[#FF2AA9]/20 blur-2xl opacity-60" />
            </div>

            <div className="flex flex-col items-center z-10 relative">
                <h1 className="heading text-2xl lg:max-w-[45vw] text-white drop-shadow-md">
                    Ready to take <span className="text-gradient-gold">your </span><span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> digital
                    presence </span>to the next level?
                </h1>

                <p className="text-sky-300 md:mt-10 text-2xl font-bold my-5 text-center max-w-xl">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:raressilviulazar@gmail.com">
                    <MagicButton
                        title="EMAIL"
                        icon={<FaLocationArrow />}
                        position="right"
                        otherClasses="accent-gradient text-white-100 text-base font-bold shadow-neon"
                    />
                </a>
            </div>

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
                <p className="text-xs text-white-200 font-light text-center tracking-wide">
                    Copyright © {new Date().getFullYear()} Rares Silviu
                </p>
            </div>
        </footer>
    );
};

export default Footer;
