import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Typing from "../../animations/Typing";

const Landing = () => {
  return (
    <>
      <Analytics data-oid="w2dkalm" />
      <section
        id="home"
        className="flowing-lines relative z-10 overflow-hidden bg-oval-gradient  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        data-oid="xtnxrcr"
      >
        <div className="container relative z-10" data-oid="bn33zo5">
          <div className="flex flex-wrap justify-center" data-oid="n7qy8x8">
            <div className="flex w-full px-4 text-center" data-oid="tpu2quc">
              <div
                className="flex w-full flex-col items-center justify-center"
                data-oid="df2.w.d"
              >
                <span data-oid="etzvv9h">
                  <h1
                    className="mb-5 rounded text-3xl font-bold leading-tight text-slate-900 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                    data-oid="ujfiss1"
                  >
                    Spend more time with your patients. We&#39;ll help you
                    handle
                    <Typing data-oid=":a5swm5" />
                  </h1>
                </span>
                <div className="w-2/3" data-oid="_zcp9lu">
                  <p
                    className="mb-12 rounded text-base !leading-relaxed text-slate-500  sm:text-lg md:text-xl"
                    data-oid="m4-n4dr"
                  >
                    Kyron provides a suite of proprietary AI agents to help your
                    staff automate your denial management process.
                  </p>
                </div>

                <div
                  className="justify-cente flex flex-row items-center"
                  data-oid="lli2rq-"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="zkcnc4x"
                  >
                    <a
                      href="https://form.typeform.com/to/zstMkPH7"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
                      data-oid="zavv3fr"
                    >
                      Request a Demo
                    </a>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                    data-oid="g59c1y8"
                  >
                    <a
                      href="/about"
                      rel="noopener noreferrer"
                      className="ml-4 rounded-lg border border-white bg-transparent px-6 py-3 font-bold text-blue-500 hover:bg-white hover:text-blue-500"
                      data-oid="q-slakc"
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
