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
      data-oid="6j95tuv"
    >
      <div className="container" data-oid="loe:5wn">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
          data-oid="r3eaevv"
        />

        <div className="w-full" data-oid="dxryf4v">
          <div
            className="mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-oid="p9.0i6z"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
              data-oid="gstg7id"
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
              data-oid="tazpaez"
            >
              <div className="relative" data-oid=":h3_u5i">
                <div
                  className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"
                  data-oid="nb9sjlh"
                ></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                  data-oid="tgqesj-"
                >
                  <span
                    className="active h-4 w-4 rounded-full bg-white"
                    data-oid="2xbp9lz"
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
              data-oid="ee8.to1"
            >
              Yearly
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          data-oid="-x74_m5"
        >
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="ybe14cg"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="upba0v9"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="-db0xr9"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="7q9uzof"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="34.wicz"
            />

            <OfferList
              text="Lifetime Access"
              status="inactive"
              data-oid="4z3rv_5"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="9d8o9px"
            />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="4s3cn2g"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="ulh-uwn"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="vor4g1f"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="bsefqm0"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="v-dhxh:"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="y0212nn"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="1_2evu."
            />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="4voj_ww"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="_4b0vd7"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="sddqcti"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="b9qdk-z"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="jr3bf2t"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="_iz.3nj"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="active"
              data-oid="x565eaw"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]" data-oid="jlj8la7">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="-s8_x84"
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
            data-oid="jiz1:k-"
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
            data-oid=":uah6pr"
          />

          <defs data-oid="3l98j:j">
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
              data-oid="e3m69xi"
            >
              <stop stopColor="#4A6CF7" data-oid="mwjhvw7" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="m1w8kbi"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
              data-oid="ldiexk5"
            >
              <stop stopColor="#4A6CF7" data-oid="lt00vlj" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="dikcgqv"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
