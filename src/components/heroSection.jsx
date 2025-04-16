import main_picture from "../assets/main_picture.png";
import scientific_icon from "../assets/scientific_icon.webp";
import { motion, useMotionValue } from "framer-motion";
function HeroSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row pl-2  w-full items-center justify-between border-b border-dashed border-zinc-800 pb-5">
        <div className="flex   flex-col">
          <h1 className="font-bold text-center md:text-left text-3xl md:text-5xl tracking-tight mb-2 text-white">
            Adrian Cabrera
          </h1>
          <span className="text-zinc-400 text-sm text-center md:text-left leading-7 md:text-lg">
            Building{" "}
            <a className="text-white bg-gray-700 p-1 cursor-pointer">
              Minimalist UI
            </a>{" "}
            &{" "}
            <span className="text-white ">
              Scientific Tools{" "}
              <motion.img
                animate={{ y: [0, -10, 0], rotate: [0, 20, -20, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                src={scientific_icon}
                className="inline align-top"
                width={15}
                alt="scientific icon"
              />
            </span>
          </span>
          <span className="text-zinc-500 leading-5  text-sm text-center md:text-left   md:text-lg mt-4 text-balance md:leading-7">
            Software Engineer building web & mobile apps. Programming since
            before the arrival of the AI.
          </span>
        </div>
        <div className=" relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
          <img
            src={main_picture}
            width={160}
            className="self-start rounded-md mt-5 md:mt-0 shadow-md shadow-amber-200 md:shadow-none transition-all duration-300 ease-in-out md:hover:shadow-md md:hover:shadow-amber-200"
            alt="profile  picture of me ghibli style"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
