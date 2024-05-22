import React from "react";
import moi from "../Assets/moi.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

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
              className="text-white my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a Full Stack Developer with a passion for creating innovative
              software solutions. I have experience in developing web
              applications using modern technologies such as React, Node.js, and
              MongoDB. I am always eager to learn new technologies and improve
              my skills. I am currently seeking new opportunities to work on
              exciting projects and collaborate with other developers. I am a
              Full Stack Developer with a passion for creating innovative
              software solutions. I have experience in developing web
              applications using modern technologies such as React, Node.js, and
              MongoDB. I am always eager to learn new technologies and improve
              my skills. I am currently seeking new opportunities to work on
              exciting projects and collaborate with other developers. I am a
              Full Stack Developer with a passion for creating innovative
              software solutions. I have experience in developing web
              applications using modern technologies such as React, Node.js, and
              MongoDB. I am always eager to learn new technologies and improve
              my skills. I am currently seeking new opportunities to work on
              exciting projects and collaborate with other developers.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-16">
          <div className="flex justify-center rounded-xl">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-3xl"
              src={moi}
              alt=""
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
