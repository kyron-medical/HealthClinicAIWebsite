"use client";

import { Testimonial } from "@/types/testimonial";
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
      data-oid="d3od4b4"
    >
      <div className="container" data-oid="0ea1j8e">
        <SectionTitle
          title="What Our Users Say"
          paragraph=""
          center
          data-oid="n9c9tq5"
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          data-oid="4r03mbz"
        >
          <div
            className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
            data-oid="dm_7zgf"
          >
            {testimonialData.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
                data-oid="ju2x2in"
              >
                <SingleTestimonial
                  testimonial={testimonial}
                  data-oid="6nf6v37"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]" data-oid="4aofjor">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="4w-kznv"
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
            data-oid="vlz_r.:"
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
            data-oid="zr4fyso"
          />

          <defs data-oid=".o-dbl-">
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
              data-oid="el21amg"
            >
              <stop stopColor="#4A6CF7" data-oid="6twcgg:" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="zty.i_y"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
              data-oid="c8mktti"
            >
              <stop stopColor="#4A6CF7" data-oid="poq0e9i" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="i::s9pb"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]" data-oid="gg5n135">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="cudha0k"
        >
          <g opacity="0.5" data-oid="x8mizlg">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
              data-oid="jgm:lc1"
            />

            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
              data-oid="-kteg-j"
            />

            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
              data-oid="iw_39mp"
            />

            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
              data-oid="_b9q3rg"
            />
          </g>
          <defs data-oid="y._0sxd">
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
              data-oid="8:t49wj"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" data-oid="64_4tic" />
              <stop offset="1" stopColor="#4A6CF7" data-oid="hjy-mo8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
              data-oid="93_z.sz"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" data-oid="rdyyus:" />
              <stop offset="1" stopColor="#4A6CF7" data-oid="ewpdyo_" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
              data-oid="721kcoe"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" data-oid="e8o9t:n" />
              <stop offset="1" stopColor="#4A6CF7" data-oid="5s8-0ig" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
              data-oid="bp:ay3g"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" data-oid="r3lpdhn" />
              <stop offset="1" stopColor="#4A6CF7" data-oid="9:1_d6v" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
