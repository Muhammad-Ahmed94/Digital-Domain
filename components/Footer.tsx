import React from "react";
import SpecialButton from "./ui/SpecialButton";
import { MdOutlineMessage } from "react-icons/md";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-20 " id="contact">
      <div className="w-full absolute -bottom-72 left-0 min-h-96">
        <img
          className="w-full h-full opacity-70"
          src="/footer-grid.svg"
          alt="footer-grid"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take your{" "}
          <span className="text-purple underline font-bold">
            Digital Presence
          </span>{" "}
          to the next level
        </h1>
        <p className="text-center lg:text-lg md:text-xl mt-3 md:mt-6">
          Lets&apos;s set up a{"  "}
          <span className="text-purple font-bold">Meeting</span>
        </p>
        <a href="mailto:muneebbum757@gmail.com" className="font-bold my-4">
          <SpecialButton
            title="Leave a Message here"
            icon={
              <MdOutlineMessage className="text-xl md:text-lg sm:text-sm" />
            }
          />
        </a>
      </div>

      <div className="flex flex-col justify-between items-center md:flex-row">
        <p className="text-sm md:text-base md:font-normal font-light">
          Copyright &copy; 2024 MuneebDev
        </p>

        <div className="mt-5 flex items-center justify-center gap-4 md:gap-5 z-30 saturate-150 opacity-75">
          {socialMedia.map(({ id, link, img }) => (
            <div key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Image src={img} alt="image" height={35} width={35} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
