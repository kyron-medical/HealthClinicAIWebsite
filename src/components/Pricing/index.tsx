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
      data-oid="gfeaw0g"
    >
      <div className="container" data-oid="fg4i90e">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
          data-oid="drdxs_5"
        />

        <div className="w-full" data-oid="g1gr3x9">
          <div
            className="mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-oid="d:baghf"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
              data-oid="peuyrxq"
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
              data-oid="or1yvc2"
            >
              <div className="relative" data-oid="14zyrmg">
                <div
                  className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"
                  data-oid="ld9w42x"
                ></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                  data-oid="6t3q-3f"
                >
                  <span
                    className="active h-4 w-4 rounded-full bg-white"
                    data-oid="99o:q86"
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
              data-oid="uvi9:-e"
            >
              Yearly
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          data-oid="1b7mq-c"
        >
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="ezk04zl"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="xp-dt1w"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="91i56sc"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="2-e-zd1"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="wnh3o2e"
            />

            <OfferList
              text="Lifetime Access"
              status="inactive"
              data-oid="y6970r7"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid=":yt-m-7"
            />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid=".om.8-7"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="nf4lsa7"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="cg6yenl"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="_-ajel9"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="9841sdr"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="59w7vrl"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="w0y2:m2"
            />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="ebxc_xe"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="lfehcae"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="r4w1j7x"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="2xvsfug"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="ntvu0zl"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="opz9tru"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="active"
              data-oid="fbqwo44"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]" data-oid="96z76zb">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="jkbbi8i"
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
            data-oid="x6r-qpz"
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
            data-oid="_g4wshx"
          />

          <defs data-oid="d.7icek">
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
              data-oid="_tquvel"
            >
              <stop stopColor="#4A6CF7" data-oid="964_f64" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="hfofno5"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
              data-oid="5wzi1.m"
            >
              <stop stopColor="#4A6CF7" data-oid="rl_evbn" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="t960kae"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
