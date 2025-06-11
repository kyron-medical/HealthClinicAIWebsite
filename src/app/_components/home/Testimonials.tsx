"use client";

import type { Testimonial } from "@/types/testimonial";
import SectionTitle from "../../../components/Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Musharof Chy",
    designation: "Infectious Disease Specialist",
    content:
      "Kyron Medical offers software that's seamless, accurate, and saves staff countless hours of administrative work.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Dr. Devid Weilium",
    designation: "Cardiologist",
    content: "Kyron's denial management system is a game changer.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Dr. Lethium Frenci",
    designation: "Primary Care Provider",
    content:
      "This platform simplifies the entire billing workflow. With Kyron Medical, doctors can finally focus on patient care without worrying about claim submissions or insurance follow-ups.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="relative z-10  py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      data-oid="81q5ubt"
    >
      <div className="container" data-oid="_yhay-g">
        <SectionTitle
          title="What Our Users Say"
          paragraph=""
          center
          data-oid="1avadc4"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          data-oid="q24xt3z"
        >
          <div
            className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
            data-oid="-:1ls6r"
          >
            {testimonialData.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
                data-oid="i47dmo7"
              >
                <SingleTestimonial
                  testimonial={testimonial}
                  data-oid="sa97nln"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]" data-oid="rfq52ec">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="3ydg_cb"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
            data-oid="g0_31co"
          />

          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
            data-oid=".d8k5wk"
          />

          <defs data-oid="bfgjd5h">
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
              data-oid="gn7sv84"
            >
              <stop stopColor="#4A6CF7" data-oid="vx025wg" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="jt3nb3x"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
              data-oid="ct344yw"
            >
              <stop stopColor="#4A6CF7" data-oid="m-2jixs" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="ao5e4-d"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]" data-oid="bcz6q34">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="mgdw_vn"
        >
          <g opacity="0.5" data-oid="wksfk8r">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
              data-oid="g1zs9rd"
            />

            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
              data-oid="_2czwa4"
            />

            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
              data-oid=".9.kwzb"
            />

            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
              data-oid="qpn7cv-"
            />
          </g>
          <defs data-oid="f1g23h6">
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
              data-oid="_rkex56"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" data-oid=".s0vcjb" />
              <stop offset="1" stopColor="#4A6CF7" data-oid="fs2-2li" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
              data-oid="og3xz4v"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" data-oid="yav813n" />
              <stop offset="1" stopColor="#4A6CF7" data-oid="dborzts" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
              data-oid="e3fyzx8"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" data-oid="7s.2c8." />
              <stop offset="1" stopColor="#4A6CF7" data-oid="uuqfzl1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
              data-oid="2-r_fik"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" data-oid="9638476" />
              <stop offset="1" stopColor="#4A6CF7" data-oid="ia_190r" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
