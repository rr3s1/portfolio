import * as React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import MagicButton from "../components/ui/MagicButton";
import BackgroundBeamsDemo from "./ui/background-beams-demo";

const Footer = () => {
    return (
        <footer className="w-full relative flex flex-col min-h-[250px] justify-between pt-20 pb-10" id="contact">
            {/* background grid replaced with animated beams */}
            {/* <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none select-none">
                <div className="w-full h-full">
                    <BackgroundBeamsDemo />
                </div>
            </div> */}

            <div className="flex flex-col items-center z-10">
                
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-gradient-gold">your </span><span className="bg-gradient-to-r from-[#fde047] via-[#f472b6] to-[#a855f7] bg-clip-text text-transparent"> digital
                    presence </span>to the next level?
                </h1>

                <p className="text-sky-300 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:raressilviulazar@gmail.com">
                    <MagicButton
                        title="HIRE ME"
                        icon={<FaLocationArrow />}
                        position="right"
                        otherClasses="accent-gradient text-white-100 font-bold"
                    />
                </a>
            </div>

            <div className="flex flex-col items-center mt-16 z-10">
                <div className="flex items-center md:gap-3 gap-6 mb-4">
                    {/* GitHub */}
                    <a href="https://github.com/rr3s1" target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <Image src="/git.svg" alt="GitHub" width={20} height={20} />
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/raressilviulazar/" target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <Image src="/link.svg" alt="LinkedIn" width={20} height={20} />
                    </a>
                </div>
                <p className="md:text-base text-sm md:font-normal font-light text-center">
                    Copyright © {new Date().getFullYear()} Rares Silviu
                </p>
            </div>
        </footer>
    );
};

export default Footer;
