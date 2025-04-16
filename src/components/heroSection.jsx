import main_picture from "../assets/main_picture.png";
import scientific_icon from "../assets/scientific_icon.webp"
function HeroSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row  w-full items-center justify-between border-b border-dashed border-zinc-800 pb-5">
        <div className="flex   flex-col">
          <h1 className="font-bold text-center md:text-left text-3xl md:text-5xl tracking-tight mb-2 text-white">
            Adrian Cabrera
          </h1>
          <span className="text-zinc-400 text-center md:text-left leading-7 text-lg">
            Building <a className="text-white cursor-pointer">Minimalist UI</a>{" "}
            & <a className="text-white cursor-pointer">Scientific Tools <img src={scientific_icon} className="inline align-top" width={15} alt="scientific icon" /></a> 
          </span>
          <span className="text-zinc-500 text-center md:text-left   text-lg mt-4 text-balance leading-7">
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
