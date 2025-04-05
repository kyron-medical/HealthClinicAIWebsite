"use client";

import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <Analytics data-oid="io-mfzv" />
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        data-oid="-kx5hu_"
      >
        <div className="container relative z-10" data-oid="n1dygu4">
          <div className="flex flex-wrap justify-center" data-oid=":w1nmo4">
            <div className="w-full px-4 text-center" data-oid="z08.6n9">
              <div
                className="flex flex-col items-center justify-center"
                data-oid="a.-5az-"
              >
                <h1
                  className="mb-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  data-oid="8_wool9"
                >
                  Spend more time with your patients. We&#39;ll handle
                  everything else.
                </h1>
                <p
                  className="mb-12 rounded text-base !leading-relaxed text-white text-shadow-outline-black sm:text-lg md:text-xl"
                  data-oid="7q_9k8e"
                >
                  Kyron is an online tool you can use to automate medical
                  billing, patient appointment scheduling, insurance
                  verification, managing patient follow-ups, and more.
                </p>

                <div
                  className="flex flex-row justify-center"
                  data-oid="sb6xvnd"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="1d-dari"
                  >
                    <a
                      href="/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                      data-oid="we5wr3g"
                    >
                      Get Started
                    </a>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="p.sr4dk"
                  >
                    <a
                      href="/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 rounded-lg border border-white bg-transparent px-4 py-2 font-bold text-blue-500 hover:bg-white hover:text-blue-500"
                      data-oid="0ced3bj"
                    >
                      Learn More
                    </a>
                  </motion.button>
                </div>
              </div>

              <div
                className="mx-auto max-w-[800px] text-center"
                data-oid="1k_lasj"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
