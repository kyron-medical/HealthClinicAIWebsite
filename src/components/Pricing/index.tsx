"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section
      id="pricing"
      className="relative z-10 py-16 md:py-20 lg:py-28"
      data-oid="x-fh0mu"
    >
      <div className="container" data-oid="tq811ms">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
          data-oid="ndtfg_f"
        />

        <div className="w-full" data-oid="7vx52ym">
          <div
            className="mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-oid="bbunj3t"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
              data-oid="vokjke-"
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
              data-oid="pfx2vrk"
            >
              <div className="relative" data-oid="-u82xmo">
                <div
                  className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"
                  data-oid="itweps0"
                ></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                  data-oid="d_w7pcl"
                >
                  <span
                    className="active h-4 w-4 rounded-full bg-white"
                    data-oid="bhlhy9y"
                  ></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
              data-oid="4faodio"
            >
              Yearly
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          data-oid="xzqhmk3"
        >
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="y7mm5sf"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="_1e5e:z"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="awbjxp."
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="x:xe0c:"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="wuwixiz"
            />

            <OfferList
              text="Lifetime Access"
              status="inactive"
              data-oid="4h3i9:8"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="7_l38ff"
            />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="4.ert_3"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="br154w-"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="i96.5dg"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="iyonfaa"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="uk3sj67"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid=":ul0.r."
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="iky3uu6"
            />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="2c:yv:6"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="4-_ap7m"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="p59dkj7"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="favx03f"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="eyg567_"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="u4347qc"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="active"
              data-oid="dn:5-m:"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]" data-oid="5_-l-dm">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="a3wqb6e"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
            data-oid="ap906dp"
          />

          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
            data-oid="6mdvavr"
          />

          <defs data-oid="ng8pnqy">
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
              data-oid="kwo0llm"
            >
              <stop stopColor="#4A6CF7" data-oid="axvu.4n" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="5-v51et"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
              data-oid="dcc0poc"
            >
              <stop stopColor="#4A6CF7" data-oid="b3rq1xh" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="i8ukaj4"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
