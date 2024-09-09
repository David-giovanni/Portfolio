import React from "react";
import Gio from "../Assets/PhotoMoi.JPG";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const preventContextMenu = (e) => {
  e.preventDefault();
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-white font-bold pb-16 text-6xl tracking-tight lg:mt-16 lg:text-6xl"
            >
              Doroftei David Giovanni
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-white my-2 max-w-xl py-6 tracking-tighter"
            >
              I am a dedicated Full Stack Developer with a strong passion for
              crafting innovative software solutions. With hands-on experience
              in developing dynamic web applications using cutting-edge
              technologies like React, Node.js, and MongoDB, I thrive on solving
              complex challenges and delivering robust solutions.
              <br />I am continually expanding my skill set and staying updated
              with emerging technologies to ensure efficiency and excellence in
              my work. My enthusiasm for learning drives me to explore new
              frameworks and methodologies, constantly improving my proficiency.
              Currently, I am pursuing my studies at Epitech Paris, anticipating
              graduation in August 2025.
              <br />
              This educational journey complements my practical experience,
              providing me with a comprehensive understanding of software
              development principles and best practices. I am eager to leverage
              my skills and knowledge in a new opportunity where I can
              contribute to exciting projects, collaborate with talented
              developers, and make a meaningful impact in the field of
              technology.
            </motion.p>
          </div>
        </div>
        <div className="w-96 lg:w-1/2 m-auto">
          <div className="relative flex justify-center rounded-xl">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-3xl w-96"
              src={Gio}
              alt="Doroftei David Giovanni"
              onContextMenu={preventContextMenu}
              draggable="false"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
