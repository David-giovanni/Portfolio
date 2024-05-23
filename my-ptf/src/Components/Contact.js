import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="text-white border-neutral-900">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-10 text-center text-4xl font-bold"
      >
        Get in Touch
        <div className="text-center tracking-tighter pt-10 font-normal">
          <p className="my-4 text-xl text-neutral-500">
            3 rue michel ange 94380 Bonneuil sur marne
          </p>
          <p className="my-4 text-xl text-neutral-500">07 69 16 82 69</p>
          <p className="my-4 text-xl text-neutral-500">
            Giovani.doroftei00@gmail.com
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
