import React from "react";
import { EXPERIENCES } from "..";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <h1 className="text-white my-20 text-center text-4xl font-bold">
        Experience
      </h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4 flex flex-col items-center"
            >
              <p className="mb-2 text-sm text-neutral-400 text-center">
                {experience.year}
              </p>
              <div className="flex justify-center items-center h-full">
                <img
                  className="rounded-xl object-contain"
                  src={experience.image}
                  width={230}
                  alt={experience.title}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </motion.div>

            <div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <h6 className="mb-2 text-white font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
