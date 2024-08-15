import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { div } from "three/webgpu";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-15" id="projects">
      <h1 className="heading">
        A quick overview of <span className="text-purple">My Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4 gap-12 mt-2">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] sm:w-[570px] h-[32rem] lg:min-h-[30.5rem] flex items-center justify-center w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex justify-center items-center overflow-hidden sm:h-[40vh] h-[30vh] w-[80vw] sm:w-[570px] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="/bg.img" />
                </div>
                <img src={img} alt={title} className="absolute z-10 bottom-0" />
              </div>
              <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                {title}
              </h1>
              <p className="text-sm font-light lg:font-normal lg:text-xl line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-center mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div className="border border-white/[0.2] flex items-center justify-center rounded-full lg:h-10 lg:w-10 w-9 h-9">
                      <img src={icon} alt={icon} className="p-2 " />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex justify-center items-center text-purple text-xm lg:text-xl md:text-xs">
                    Check live site here{" "}
                    <span>
                      <FaLocationArrow className="ms-2" />
                    </span>{" "}
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
