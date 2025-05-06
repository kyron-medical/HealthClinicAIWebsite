"use client";

import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const DashboardButton = () => {
  const { user } = useUser();

  if (!user) {
    return <>Hi</>; // or some fallback UI
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
    >
      <Link
        href={`/biller/dashboard/${user.id}`}
        rel="noopener noreferrer"
        className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
      >
        Dashboard
      </Link>
    </motion.button>
  );
};

export default DashboardButton;
