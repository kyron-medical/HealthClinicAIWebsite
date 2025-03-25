"use client";

import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <Analytics data-oid="54_:m6t" />
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        data-oid="n_69nob"
      >
        <div className="container relative z-10" data-oid="m-1hz83">
          <div className="flex flex-wrap justify-center" data-oid="e4j3c4e">
            <div className="w-full px-4 text-center" data-oid="amam762">
              <div
                className="flex flex-col items-center justify-center"
                data-oid="83e2xu5"
              >
                <h1
                  className="mb-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  data-oid="urmwop2"
                >
                  Spend more time with your patients. We&#39;ll handle
                  everything else.
                </h1>
                <p
                  className="mb-12 rounded text-base !leading-relaxed text-white text-shadow-outline-black sm:text-lg md:text-xl"
                  data-oid="mtvl8p."
                >
                  Kyron is an online tool you can use to automate medical
                  billing, patient appointment scheduling, insurance
                  verification, managing patient follow-ups, and more.
                </p>

                <div
                  className="flex flex-row justify-center"
                  data-oid="o.ksrty"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="vsxjjcv"
                  >
                    <a
                      href="/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                      data-oid=".se9jl_"
                    >
                      Get Started
                    </a>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="nb4xlw8"
                  >
                    <a
                      href="/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 rounded-lg border border-white bg-transparent px-4 py-2 font-bold text-blue-500 hover:bg-white hover:text-blue-500"
                      data-oid="l5bqfmc"
                    >
                      Learn More
                    </a>
                  </motion.button>
                </div>
              </div>

              <div
                className="mx-auto max-w-[800px] text-center"
                data-oid="dt541w-"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
