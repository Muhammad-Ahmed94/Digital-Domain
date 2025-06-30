import { Suspense, lazy } from "react";
import SpecialButton from "./ui/SpecialButton";
import { HiOutlineDownload } from "react-icons/hi";
import { TextGenerateEffect } from "./ui/TextGenerate-Effect";
import Image from "next/image";

// Lazy load Spotlight
const Spotlight = lazy(() =>
  import("./ui/Spotlight").then((module) => ({ default: module.Spotlight }))
);

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      {/* LAZY SPOTLIGHT */}
      <Suspense fallback={null}>
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
      </Suspense>

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

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my digital ecosystem. Let&apos;s build something amazing!
            🚀
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center w-full mt-6">
            {/* Text content */}
            <div className="flex flex-col flex-1">
              <TextGenerateEffect
                className="text-center lg:text-left text-4xl md:text-5xl lg:text-6xl"
                words="Hi, I'm Muneeb Ahmed, Full-Stack MERN Developer & passionate about my work"
                duration={0.5}
              />

              <h1 className="text-center lg:text-left tracking-wider text-sm md:text-lg lg:text-xl mt-4">
                Specializing in{" "}
                <span className="text-[#429333] font-extrabold">MongoDB</span>,{" "}
                <span className="text-[#4F4A50] font-extrabold">
                  Express.js,
                </span>{" "}
                <span className="text-[#61DAF8] font-extrabold">React,</span>{" "}
                and{" "}
                <span className="text-[#8BC949] font-extrabold">Node.js</span>{" "}
                to create scalable web applications. I transform complex
                business requirements into elegant, high-performance digital
                solutions that drive growth and user engagement
              </h1>
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
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
