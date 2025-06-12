import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Typing from "../../animations/Typing";

const Landing = () => {
  return (
    <>
      <Analytics />
      <section
        id="home"
        className="flowing-lines relative z-10 overflow-hidden bg-oval-gradient  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container relative z-10">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full px-4 text-center">
              <div className="flex w-full flex-col items-center justify-center">
                <span>
                  <h1 className="mb-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Spend more time with your patients. We&#39;ll help you
                    handle
                    <Typing />
                  </h1>
                </span>
                <div className="w-2/3">
                  <p className="mb-12 rounded text-base !leading-relaxed text-slate-500  sm:text-lg md:text-xl">
                    Kyron provides a suite of proprietary AI agents to help your
                    staff automate your denial management process.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                  <motion.button
                    style={{ display: "contents" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                  >
                    <a
                      href="https://form.typeform.com/to/zstMkPH7"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
                    >
                      Request a Demo
                    </a>
                  </motion.button>
                  <motion.button
                    style={{ display: "contents" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                  >
                    <a
                      href="/about"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white bg-transparent px-6 py-3 font-bold text-blue-500 hover:bg-white hover:text-blue-500"
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
