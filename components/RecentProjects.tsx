import { projects } from "@/data";
import React, { Suspense, lazy } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

// Lazy load the 3D pin component
const PinContainer = lazy(() => import("./ui/3d-pin").then(module => ({ default: module.PinContainer })));

const RecentProjects = () => {
  return (
    <div className="py-15" id="projects">
      <h1 className="heading">
        A quick overview of <span className="text-purple">My Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4 gap-12 mt-2">
        {projects.map(({ id, title, des, img, tech, link }, index) => (
          <div
            key={id}
            className="sm:h-[41rem] sm:w-[570px] h-[32rem] lg:min-h-[30.5rem] flex items-center justify-center w-[80vw]"
          >
            <Suspense 
              fallback={
                <div className="w-full h-full bg-[#13162d] rounded-2xl animate-pulse flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple"></div>
                </div>
              }
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex justify-center items-center overflow-hidden sm:h-[40vh] h-[30vh] w-[80vw] sm:w-[570px] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <Image 
                      src="/bg.png" 
                      alt="Project background"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80vw, 570px"
                      loading="lazy"
                    />
                  </div>
                  <Image 
                    src={img} 
                    alt={`${title} project screenshot`}
                    fill
                    className="absolute z-10 bottom-0 object-contain"
                    sizes="(max-width: 768px) 80vw, 570px"
                    loading={index < 3 ? "eager" : "lazy"}
                    priority={index < 3}
                  />
                </div>
                
                <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                  {title}
                </h1>
                <p className="text-sm font-light lg:font-normal lg:text-xl line-clamp-2">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {tech?.map((techName, techIndex) => (
                      <span
                      key={techIndex}
                      className="py-1 px-3 text-xs lg:text-sm rounded-lg text-center text-purple bg-[#10123e]"
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center items-center ml-4">
                    <p className="flex justify-center items-center text-purple text-xs lg:text-base font-medium">
                      Check live site
                      <FaLocationArrow className="ml-2 text-xs" />
                    </p>
                  </div>
                </div>
              </PinContainer>
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;