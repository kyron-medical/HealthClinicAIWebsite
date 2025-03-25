import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Typing from "../../animations/Typing";
import styles from "@/styles/Landing.module.css";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <Analytics data-oid="06w0e-a" />
      <section
        id="home"
        className="bg-oval-gradient flowing-lines relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        data-oid="cb0m.j4"
      >
        <div className="container relative z-10" data-oid="8ff771k">
          <div className="flex flex-wrap justify-center" data-oid="o:51e0_">
            <div className="flex w-full px-4 text-center" data-oid="ie3miqi">
              <div
                className="flex flex-col items-center justify-center w-full"
                data-oid=".cu4_sf"
              >
                <h1
                  className="mb-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  data-oid="gqt4gi1"
                >
                  Spend more time with your patients. We&#39;ll handle
                </h1>
                <Typing data-oid="q35z18b" />
                <div className="w-2/3" data-oid="qch3.f5">
                  <p
                    className="mb-12 rounded text-base !leading-relaxed text-slate-500  sm:text-lg md:text-xl"
                    data-oid="pq8z48-"
                  >
                    Kyron is an online tool you can use to automate medical
                    billing, patient appointment scheduling, insurance
                    verification, managing patient follow-ups, and more.
                  </p>
                </div>

                <div
                  className="flex flex-row justify-cente items-center"
                  data-oid="t:pod_k"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="jf6syhl"
                  >
                    <a
                      href="/contact"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
                      data-oid=":s.4i3j"
                    >
                      Get Started
                    </a>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="n_jak0x"
                  >
                    <a
                      href="/about"
                      rel="noopener noreferrer"
                      className="ml-4 rounded-lg border border-white bg-transparent px-6 py-3 font-bold text-blue-500 hover:bg-white hover:text-blue-500"
                      data-oid="68eatjc"
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
