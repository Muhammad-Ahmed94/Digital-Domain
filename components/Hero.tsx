import { Spotlight } from "./ui/Spotlight";
import SpecialButton from "./ui/SpecialButton";
import { HiOutlineDownload } from "react-icons/hi";
import { TextGenerateEffect } from "./ui/TextGenerate-Effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
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

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            className="text-center text-6xl md:text-4xl lg:text-6xl"
            words="Transforming Concepts into Seamless Experiences"
            duration={0.5}
          />
          <TextGenerateEffect
            className="text-center tracking-wider text-sm md:text-xl lg:text-2xl"
            words="Hi, i'm Muneeb, a passionate tech geek. Carrying digital persona all over the world."
            duration={2.5}
          />

          <a href="/dummy-cv.pdf" download title="download cv" className="py-3">
            <SpecialButton
              title="Download CV"
              icon={
                <HiOutlineDownload className="text-xl md:text-lg sm:text-sm" />
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
