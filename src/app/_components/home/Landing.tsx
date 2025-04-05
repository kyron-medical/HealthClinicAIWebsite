import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Typing from "../../animations/Typing";
import styles from "@/styles/Landing.module.css";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <Analytics data-oid="lewqbc5" />
      <section
        id="home"
        className="bg-oval-gradient flowing-lines relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        data-oid="bgbwdy."
      >
        <div className="container relative z-10" data-oid="2c.lkov">
          <div className="flex flex-wrap justify-center" data-oid="w0xel3_">
            <div className="flex w-full px-4 text-center" data-oid="xk.9:4m">
              <div
                className="flex flex-col items-center justify-center w-full"
                data-oid="09ycpgw"
              >
                <h1
                  className="mb-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  data-oid="nt4-j4v"
                >
                  Spend more time with your patients. We&#39;ll handle
                </h1>
                <Typing data-oid="k5fwdsz" />
                <div className="w-2/3" data-oid="64.u9o9">
                  <p
                    className="mb-12 rounded text-base !leading-relaxed text-slate-500  sm:text-lg md:text-xl"
                    data-oid="nd42cbw"
                  >
                    Kyron is an online tool you can use to automate medical
                    billing, patient appointment scheduling, insurance
                    verification, managing patient follow-ups, and more.
                  </p>
                </div>

                <div
                  className="flex flex-row justify-cente items-center"
                  data-oid="glzwica"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="s1yokyb"
                  >
                    <a
                      href="/contact"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
                      data-oid="i3ads0x"
                    >
                      Get Started
                    </a>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="5jln.ck"
                  >
                    <a
                      href="/about"
                      rel="noopener noreferrer"
                      className="ml-4 rounded-lg border border-white bg-transparent px-6 py-3 font-bold text-blue-500 hover:bg-white hover:text-blue-500"
                      data-oid="m27:o-."
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
