import { FaAngular, FaBootstrap, FaReact } from "react-icons/fa";
import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

function ProjectItem({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    const videoWidth = 500;
    x.set(posX - videoWidth);
    y.set(posY);
  };
  return (
    <a
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={project.link}
      target="_blank"
      className="flex flex-col   group w-[90vw] mx-auto md:w-auto md:mx-0 shadow-md relative transition-all duration-300 ease-in-out justify-between hover:shadow-amber-300 cursor-none hover:border-amber-300/20  rounded-md border border-dashed px-4 py-5 border-zinc-600"
    >
      <h1 className="text-xl font-bold tracking-tight text-gray-100">
        {project.name}
      </h1>
      <p className="leading-6  pt-4 text-gray-300">{project.description}</p>
      <div className="flex flex-row  items-center   gap-2 mt-10  ">
        <div className="flex flex-row flex-wrap gap-2 items-center">
          {project.technologies.map(function (technology) {
            return (
              <>
                {technology.icon}
                <span key={technology.name} className="text-zinc-400  md:text-sm  text-xs  transition-all duration-300 ease-in-out group-hover:text-zinc-300">
                  {technology.name}
                </span>
              </>
            );
          })}
        </div>
      </div>
      {project.src && (
        <motion.video
          src={project.src}
          autoPlay
          loop
          muted
          style={{
            position: "absolute",

            left: 300,
            top: -400,
            x: x,
            y: y,
            pointerEvents: "none",
            zIndex: 20,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-[500px] invisible rounded-md md:visible"
        />
      )}
    </a>
  );
}

export default ProjectItem;
