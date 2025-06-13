"use client";

import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
    >
      <a
        href="https://form.typeform.com/to/zstMkPH7"
        rel="noopener noreferrer"
        className="whitespace-nowrap rounded-xl bg-blue-500 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 sm:px-6 sm:text-base"
      >
        Request a Demo
      </a>
    </motion.button>
  );
};

export default GetStarted;
