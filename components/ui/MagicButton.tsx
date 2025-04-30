import React from "react";

const MagicButton = ({
                         title,
                         icon,
                         position,
                         handleClick,
                         otherClasses,
                     }: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[2px] focus:outline-none"
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF8A38_0%,#14D5FF_50%,#FF2AA9_100%)]" />

            {/* Button inner content */}
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
              px-7 text-sm font-medium text-white-100 backdrop-blur-3xl gap-2 bg-background/80 ${otherClasses}`}
            >
        {position === "left" && icon}
                {title}
                {position === "right" && icon}
      </span>
        </button>
    );
};

export default MagicButton;
