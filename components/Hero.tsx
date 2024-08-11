

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { GridBackgroundDemo } from './ui/DotGrid'
import { TextGenerateEffect } from './ui/TextGenerate-Effect';
import SpecialButton from './ui/SpecialButton';
import { HiOutlineDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen" fill='white' />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='purple' />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='blue' />
      </div>
      <div className="relative">
        <GridBackgroundDemo />
        <div className="flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="max-w-[89vw] md:max-2xl: lg:max-w-[60vw] flex flex-col items-center">
            <h2 className="tracking-widest uppercase text-center max-w-80">
              Dynamic Web magic with next
            </h2>
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
            {/* <p className='p-2 tracking-widest text-center'>Hi, i'm Muneeb a passionate tech geek. Carrying digital persona all over the world. </p> */}
            <a
              href="/dummy-cv.pdf"
              download
              title="download cv"
              className="py-3"
            >
              <SpecialButton
                title="Download CV"
                icon={
                  <HiOutlineDownload className="text-xl md:text-lg sm:text-sm" />
                }
              />
            </a>
            {/* for next js content should be placed in public directory. must */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero