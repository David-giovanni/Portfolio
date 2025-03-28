import React from "react";
import { PROJECTS } from "../index";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects">
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="text-white my-20 text-center text-4xl font-bold">
          Some <span className="text-neutral-500">Projects</span>
        </h1>
        <div>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="mb-8 flex flex-col lg:flex-row lg:justify-center lg:items-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 flex justify-center"
              >
                <img
                  className="rounded-xl object-contain"
                  src={project.image}
                  width={165}
                  height={150}
                  alt={project.title}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 lg:pl-6"
              >
                <h6 className="mb-2 text-white font-semibold text-center lg:text-left">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400 text-center lg:text-left">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
