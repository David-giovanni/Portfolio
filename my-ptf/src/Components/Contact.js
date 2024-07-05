import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="">
      <div id="contact" className="text-white border-neutral-900">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="mt-10 text-center text-4xl font-bold"
        >
          Get in Touch
          <div className="text-center tracking-tighter pt-10 font-normal">
            <p className="my-4 text-xl text-neutral-500">07 69 16 82 69</p>
            <p className="my-4 text-xl text-neutral-500">
              Giovani.doroftei00@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className=" text-white text-center">
          <form
            action="https://formspree.io/f/xvgpovgp"
            method="POST"
            className=" border border-y-2 border-x-2 border-purple-500 bg-opacity-80 xl:w-96 p-4 rounded-md"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 text-black bg-neutral-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-neutral-400 text-black rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-3 py-2 text-black bg-neutral-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="hover:bg-neutral-700 text-white duration-150 m-auto font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
