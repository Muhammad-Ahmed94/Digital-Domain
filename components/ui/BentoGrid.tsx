import { cn } from "@/lib/utils";

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
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6} && 'flex justify-center w-full' `}>
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 3 ? (
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full h-full z-10">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-6 lg:mb-0 lg:w-1/3">
                <p className="font-sans font-bold text-lg lg:text-3xl md:text-xl z-10">
                  {description}
                </p>
                <div className="font-sans font-semibold text-gray-500 text-lg lg:text-xl max-w-96 z-10 mt-2">
                  {title}
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end w-full lg:w-2/3 gap-y-2 lg:gap-y-4"> {/* Vertical gap between rows of badges */}
                <div className="flex flex-wrap justify-center lg:justify-end gap-2 lg:gap-3"> {/* Horizontal gap between badges */}
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
                      className="py-2 px-3 text-xs md:text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10123e] will-change-transform whitespace-nowrap"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end gap-2 lg:gap-3">
                  {[
                    "Tailwind CSS",
                    "SASS(Sassy CSS)",
                    "Vanilla CSS",
                    "FramerMotion",
                  ].map((item, index) => (
                    <span
                      key={item}
                      className="py-2 px-3 text-xs md:text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10123e] will-change-transform whitespace-nowrap"
                      style={{ animationDelay: `${(index + 6) * 0.05}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center lg:justify-end gap-2 lg:gap-3">
                  {[
                    "Git & GitHub",
                    "API Integration",
                    "Google-Firebase",
                    "Backend Development",
                    "npm & yarn",
                  ].map((item, index) => (
                    <span
                      key={item}
                      className="py-2 px-3 text-xs md:text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10123e] will-change-transform whitespace-nowrap"
                      style={{ animationDelay: `${(index + 10) * 0.05}s` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="font-sans font-normal text-neutral-600 text-sm md:text-xs lg:text-base z-10">
                {description}
              </div>
              <div className="font-sans font-bold text-lg lg:text-xl max-w-96 z-10">
                {title}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};