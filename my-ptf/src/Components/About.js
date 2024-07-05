import React from "react";
import cv from "../Assets/cv.png";
import CVFrancais from "../Assets/CVgio.pdf";
import CVAnglais from "../Assets/CV Gio Anglais.pdf";
import { motion } from "framer-motion";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CVFrancais;
    link.download = "Doroftei_David_Giovanni_CV.pdf";
    link.click();
  };

  const handleDownload2 = () => {
    const link = document.createElement("a");
    link.href = CVAnglais;
    link.download = "Doroftei_David_Giovanni_CV.pdf";
    link.click();
  };

  return (
    <div
      id="about-me"
      className="border-b border-neutral-900 pt-48 pb-4 justify-center"
    >
      <h1 className="text-white font-bold my-20 text-center text-4xl">
        My <span className="text-neutral-500">Resume</span>
      </h1>
      <div className="justify-center flex">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="xl:gap-20 items-center justify-center">
            <div>
              <img
                className="rounded-3xl m-auto w-96 filter blur-sm"
                src={cv}
                alt="Me"
              />
              <div className="xl:flex xl:gap-5">
                <motion.button
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-purple-400 via-blue-300 to-purple-500 flex m-auto text-white py-2 px-4 rounded-xl mt-4 shadow-md transition duration-300 ease-in-out"
                  onClick={handleDownload2}
                >
                  DOWNLOAD CV IN ENGLISH
                </motion.button>
                <motion.button
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-purple-400 via-blue-300 to-purple-500 flex m-auto  text-white py-2 px-4 rounded-xl mt-4 shadow-md transition duration-300 ease-in-out"
                  onClick={handleDownload}
                >
                  DOWNLOAD CV IN FRENCH
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
