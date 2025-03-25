"use client";

import { motion } from "framer-motion";

interface TestDriveProps {
  handleSubmit: () => void;
}

const TestDrive: React.FC<TestDriveProps> = ({ handleSubmit }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      onClick={handleSubmit}
      data-oid="jplnlpw"
    >
      <a
        href="https://form.typeform.com/to/zstMkPH7"
        rel="noopener noreferrer"
        className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
        data-oid="_35y8dy"
      >
        Test Drive Kyron
      </a>
    </motion.button>
  );
};

export default TestDrive;
