import React from "react";
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
      className="border-b border-neutral-900 pt-48 pb-24 justify-center"
    >
      <h1 className="text-white font-bold mt-20 mb-10 text-center text-4xl">
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
              <div className="xl:flex xl:gap-5">
                <motion.button
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-purple-900 flex p-2 text-white px-6 rounded-full mt-4 hover:bg-purple-600 duration-300"
                  onClick={handleDownload2}
                >
                  DOWNLOAD CV IN ENGLISH
                </motion.button>
                <motion.button
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 0 }}
                  transition={{ duration: 1 }}
                  className="bg-purple-900 flex p-2 text-white px-6 rounded-full mt-4 hover:bg-purple-600 duration-300"
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
