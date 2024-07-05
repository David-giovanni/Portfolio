import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiMongodb,
  SiTailwindcss,
  SiDocker,
  SiPowerbi,
  SiJavascript,
  SiPostman,
} from "react-icons/si";
import { FaNodeJs, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      easeIn: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const icons = [
    {
      component: <FaHtml5 className="text-7xl text-orange-500 rounded-xl" />,
      label: "HTML5",
      duration: 2.5,
      progress: 70,
    },
    {
      component: <FaCss3 className="text-7xl text-blue-500 rounded-xl" />,
      label: "CSS3",
      duration: 2.5,
      progress: 70,
    },
    {
      component: (
        <SiJavascript className="text-7xl text-yellow-400 bg-black rounded-xl" />
      ),
      label: "JavaScript",
      duration: 2.5,
      progress: 75,
    },
    {
      component: (
        <RiReactjsLine className="text-7xl text-cyan-400 bg-white rounded-xl" />
      ),
      label: "React",
      duration: 2.5,
      progress: 80,
    },
    {
      component: <SiTailwindcss className="text-7xl text-cyan-400" />,
      label: "Tailwind CSS",
      duration: 6,
      progress: 80,
    },
    {
      component: <SiMongodb className="text-7xl text-green-600" />,
      label: "MongoDB",
      duration: 4,
      progress: 65,
    },
    {
      component: <BiLogoPostgresql className="text-7xl text-blue-500" />,
      label: "PostgreSQL",
      duration: 5,
      progress: 60,
    },
    {
      component: <FaNodeJs className="text-7xl text-green-500 rounded-xl" />,
      label: "Node.js",
      duration: 2.5,
      progress: 65,
    },
    {
      component: <FaJava className="text-7xl text-black bg-white rounded-xl" />,
      label: "Java",
      duration: 2.5,
      progress: 60,
    },
    {
      component: <SiDocker className="text-7xl text-blue-400" />,
      label: "Docker",
      duration: 6,
      progress: 60,
    },
    {
      component: <SiPostman className="text-7xl text-orange-500" />,
      label: "Postman",
      duration: 3,
      progress: 70,
    },
    {
      component: <SiPowerbi className="text-7xl text-yellow-400" />,
      label: "Power BI",
      duration: 3.5,
      progress: 70,
    },
  ];

  return (
    <div
      id="technologies"
      className="text-white border-b border-neutral-800 pb-24 xl:px-52"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-white my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            variants={iconVariants(icon.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
            data-tooltip-id={`tooltip-${index}`}
            data-tooltip-content={icon.label}
          >
            {icon.component}
            <Tooltip id={`tooltip-${index}`} place="top" effect="solid" />
            <div className="w-full bg-neutral-800 rounded-full mt-4">
              <div
                className="bg-gradient-to-r from-blue-300 to-purple-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${icon.progress}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
        <p className=" text-center text-neutral-400 font-bold mt-10">
          They are constantly improving because, for me, the joy of this
          profession lies in the fact that you learn something new every day,
          especially when you are involved, curious, and passionate.
        </p>
      </motion.div>
    </div>
  );
};

export default Technologies;
