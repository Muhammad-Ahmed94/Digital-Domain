import { cn } from "@/lib/utils";
import { Suspense, lazy } from "react";
import Image from "next/image";

// Lazy load the Globe component for better performance
// const GlobeDemo = lazy(() => import("./GridGlobe").then(module => ({ default: module.GlobeDemo })));

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6} && 'flex justify-center w-full' `}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={`Bento grid item ${id}`}
              fill
              className={cn(imgClassName, "object-cover object-center")}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={`Spare image for item ${id}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          )}
        </div>
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-normal text-neutral-600 text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-xl max-w-96 z-10">
            {title}
          </div>
          
          {/* Lazy load Globe component only when needed */}
          {id === 2 && (
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            }>
              {/* <GlobeDemo /> */}
            </Suspense>
          )}
          
          {/* Tech stack grid - optimized */}
          {id === 3 && (
            <div className="flex flex-col text-center gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex gap-3 lg:gap-8 mt-16">
                {[
                  "React JS",
                  "Express JS", 
                  "Node JS",
                  "MongoDB",
                  "MERN-Stack",
                  "Next JS"
                ].map((item, index) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10123e] will-change-transform"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>

              <div className="flex gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {[
                  "Tailwind CSS",
                  "SASS(Sassy CSS)",
                  "Vanilla CSS", 
                  "FramerMotion",
                ].map((item, index) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10123e] will-change-transform"
                    style={{
                      animationDelay: `${(index + 6) * 0.1}s`
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 lg:gap-8">
                {[
                  "Git & GitHub",
                  "API Integration", 
                  "Google-Firebase",
                  "Backend Development",
                  "npm & yarn",
                ].map((item, index) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10123e] will-change-transform"
                    style={{
                      animationDelay: `${(index + 10) * 0.1}s`
                    }}
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};