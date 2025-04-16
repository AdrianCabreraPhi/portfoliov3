import { FaAngular, FaBootstrap, FaReact,FaNodeJs,FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango,SiMongodb } from "react-icons/si";
const ListProjects = [
  {
    name: "Namastox",
    description: "A computational tool supporting the use of NGRA workflows",
    src:"/namastox_video.mp4",
    technologies: [
      {
        name: "Angular",
        icon: (
          <FaAngular
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#DE002D]"
            size={30}
          />
        ),
      
      },
      {
        name: "Bootstrap 5",
        icon: (
          <FaBootstrap
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#8A0BFD]"
            size={30}
          />
        ),
      
      },
    ],
    link: "https://landing-page-namastox.vercel.app/",
  },

  {
    name: "Permanens",
    description: "Clinical Decisions Support System (CDSS)",
    src:"/permanens.mp4",
    technologies: [
      {
        name: "React",
        icon: (
          <FaReact
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#0CA0CB]"
            size={30}
          />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#39BDF8]"
            size={30}
          />
        ),
      },
    ],
    link: "http://permanens.upf.edu",
  },
  {
    name: "Flame v3",
    description:
      "Flame is a flexible framework supporting predictive modeling and similarity search",
      src:false,
    technologies: [
      {
        name: "Angular",
        icon: (
          <FaAngular
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#DE002D]"
            size={30}
          />
        ),
      },
      {
        name: "Bootstrap 5",
        icon: (
          <FaBootstrap
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#8A0BFD]"
            size={30}
          />
        ),
      },
      {
        name:"Django",
        icon: (
            <SiDjango
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#113527]"
            size={30}
          />
        )
      }
    ],
    link: "http://permanens.upf.edu",
  },
  {
    name: "RA Investment Tracker",
    description:
      "Tool to track your crypto investments",
      src:"/rainvestmentwebversion.mp4",
    technologies: [
      {
        name: "React",
        icon: (
          <FaReact
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#0CA0CB]"
            size={30}
          />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#39BDF8]"
            size={30}
          />
        ),
      },
      {
        name:"Node JS",
        icon: (
            <FaNodeJs
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#113527]"
            size={30}
          />
        )
      },
      {
        name:"Mongo DB",
        icon: (
            <SiMongodb
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#113527]"
            size={30}
          />
        )
      }
    ],
    link: "http://permanens.upf.edu",
  },
  {
    name: "RA Birthday Calendar",
    description:
      "Calendar to write down birthdays as a reminder and gift ideas",
      src:false,
    technologies: [
      {
        name: "React",
        icon: (
          <FaReact
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#0CA0CB]"
            size={30}
          />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <RiTailwindCssFill
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#39BDF8]"
            size={30}
          />
        ),
      },
      {
        name:"Python",
        icon: (
            <FaPython
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#113527]"
            size={30}
          />
        )
      },
      {
        name:"Node JS",
        icon: (
            <FaNodeJs
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#113527]"
            size={30}
          />
        )
      },
      {
        name:"Mongo DB",
        icon: (
            <SiMongodb
            className="transition-all duration-300 ease-in-out grayscale-100 group-hover:grayscale-0 text-[#113527]"
            size={30}
          />
        )
      },
    ],
    link: "http://permanens.upf.edu",
  },
];

export default ListProjects;
