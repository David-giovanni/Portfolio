import React from "react";
import moi from "../Assets/moi.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about-me" className="border-b border-neutral-900 pb-4">
      <h1 className="text-white font-bold my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-3xl" src={moi} alt="Me"></img>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="text-white pt-20 my-2 max-w-xl py-6 font-light tracking-tighter">
              I am a Full Stack Developer with a passion for creating innovative
              software solutions. I have experience in developing web
              applications using modern technologies such as React, Node.js, and
              MongoDB. I am always eager to learn new technologies and improve
              my skills. I am currently seeking new opportunities to work on
              exciting projects and collaborate with other developers.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
