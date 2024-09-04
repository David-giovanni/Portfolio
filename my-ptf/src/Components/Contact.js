import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
    >
      <div id="contact" className="text-white border-neutral-900">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="mt-10 text-center text-4xl font-bold"
        >
          Get in Touch
          <div className="text-center pt-10 font-normal">
            <p className="my-4 text-xl text-neutral-500">07 69 16 82 69</p>
            <p className="my-4 text-xl text-neutral-500">
              Giovani.doroftei00@gmail.com
            </p>
            <div className="flex justify-center gap-2">
              <a
                href="https://github.com/David-giovanni"
                className="text-neutral-500 hover:text-white flex justify-center items-center"
              >
                <FaGithub icon={FaGithub} className="" />
              </a>
              <a
                href="https://www.linkedin.com/in/david-giovanni-doroftei/"
                className="text-neutral-500 hover:text-white flex justify-center items-center"
              >
                <FaLinkedin icon={FaLinkedin} className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-5">
        <div className="bg-gradient-to-r from-purple-800 via-purple-500 to-blue-800 p-1 rounded-lg shadow-lg">
          <div className="bg-opacity-80 bg-gray-900 rounded-lg p-6 text-white text-center">
            <form
              action="https://formspree.io/f/xvgpovgp"
              method="POST"
              className="xl:w-96"
            >
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 text-white bg-gray-700 bg-opacity-75 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 text-white bg-gray-700 bg-opacity-75 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-2 text-white bg-gray-700 bg-opacity-75 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-purple-600 duration-300 text-white font-bold py-2 px-6 rounded-full"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
