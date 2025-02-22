import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Typing from "../../animations/Typing";
import styles from "@/styles/Landing.module.css";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <Analytics />
      <section
        id="home"
        className="bg-oval-gradient flowing-lines relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container relative z-10">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full px-4 text-center">
              <div className="flex flex-col items-center justify-center w-full">
                <h1 className="mb-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Spend more time with your patients. We&#39;ll handle
                </h1>
                <Typing />
                <div className="w-2/3">
                  <p className="mb-12 rounded text-base !leading-relaxed text-slate-500  sm:text-lg md:text-xl">
                    Kyron is an online tool you can use to automate medical
                    billing, patient appointment scheduling, insurance
                    verification, managing patient follow-ups, and more.
                  </p>
                </div>

                <div className="flex flex-row justify-cente items-center">
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    >
                    <a
                      href="/contact"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
                    >
                      Get Started
                    </a>
                    </motion.button>
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    >
                    <a
                      href="/about"
                      rel="noopener noreferrer"
                      className="ml-4 rounded-lg border border-white bg-transparent px-6 py-3 font-bold text-blue-500 hover:bg-white hover:text-blue-500"
                    >
                      Learn More
                    </a>
                    </motion.button>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
