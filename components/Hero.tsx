import SpecialButton from "./ui/SpecialButton";
import { HiOutlineDownload } from "react-icons/hi";
import { TextGenerateEffect } from "./ui/TextGenerate-Effect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      {/* Grid background with better performance */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center items-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center w-full mt-6">
            {/* Text content */}
            <div className="flex flex-col flex-1">
              <TextGenerateEffect
                className="text-center lg:text-left text-6xl md:text-5xl lg:text-[4rem]"
                words="Hi, I'm Muneeb Ahmed."
                duration={0.3}
              />
              <TextGenerateEffect
                className="text-center lg:text-left text-4xl md:text-3xl lg:text-2xl text-gray-500"
                words="A Full-Stack MERN Developer specialize in creating scalable and efficient web and mobile apps."
                duration={0.4}
              />
            </div>

            {/* Optimized profile image with proper sizing */}
            <div className="flex-shrink-0 lg:ml-8">
              <div className="relative w-48 h-60 lg:w-56 lg:h-72 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/my-pic.jpg"
                  alt="Muneeb Ahmed - Software Engineer-Full Stack MERN Developer"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover"
                  priority
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Resume download button */}
          <div className="mt-8">
            <a
              href="/my-resume.pdf"
              download
              title="download resume"
              className="inline-block"
              aria-label="Download Muneeb's Resume"
            >
              <SpecialButton
                title="My Resume"
                icon={
                  <HiOutlineDownload className="text-xl md:text-lg sm:text-sm" />
                }
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
