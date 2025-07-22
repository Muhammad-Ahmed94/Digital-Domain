import React from "react";
import SpecialButton from "./ui/SpecialButton";
import { MdOutlineMessage } from "react-icons/md";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-20" id="contact">
      <div className="w-full absolute -bottom-72 left-0 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="Footer grid background"
          fill
          className="w-full h-full opacity-70 object-cover"
          sizes="100vw"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
           Ready to transform your ideas into{" "}
          <span className="text-purple underline font-bold">
            Powerful Applications
          </span>{" "}
        </h1>
        <p className="text-center lg:text-lg md:text-xl mt-3 md:mt-6">
          Let&apos;s discuss{" "}
          <span className="text-purple font-bold">Contact</span>
        </p>
        <a
          href="mailto:muneebbum757@gmail.com"
          className="font-bold my-4"
          aria-label="Send email to Muneeb Ahmed"
        >
          <SpecialButton
            title="Let's start our conversation"
            icon={
              <MdOutlineMessage className="text-xl md:text-lg sm:text-sm" />
            }
          />
        </a>
      </div>

      <div className="flex flex-col items-center mt-16">
        <div className="mb-4 flex items-center justify-center gap-4 md:gap-5 z-30 saturate-150 opacity-75">
          {socialMedia.map(({ id, link, img }) => (
            <div key={id}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Muneeb's ${link.includes('github') ? 'GitHub' : link.includes('linkedin') ? 'LinkedIn' : 'Instagram'} profile`}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={img}
                  alt={`${link.includes('github') ? 'GitHub' : link.includes('linkedin') ? 'LinkedIn' : 'Instagram'} icon`}
                  height={28}
                  width={28}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs md:text-sm font-light">
          Copyright &copy; 2024 DevMuneeb
        </p>
      </div>
    </footer>
  );
};

export default Footer;