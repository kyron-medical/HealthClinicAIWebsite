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
      data-oid="ufy1h7h"
    >
      <div className="container" data-oid="b4b0:3u">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
          data-oid="yoxht:c"
        />

        <div className="w-full" data-oid="o535bhu">
          <div
            className="mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-oid=".las7km"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
              data-oid="iam9pro"
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
              data-oid="cy3ya1i"
            >
              <div className="relative" data-oid="m73y3bw">
                <div
                  className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"
                  data-oid="8or1p:a"
                ></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                  data-oid="z0.f0.2"
                >
                  <span
                    className="active h-4 w-4 rounded-full bg-white"
                    data-oid="z0npc71"
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
              data-oid="iffsyi6"
            >
              Yearly
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          data-oid="m27sq4i"
        >
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="plsriy1"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="j646po0"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="19e:hea"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="x177gl1"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="vg477qi"
            />

            <OfferList
              text="Lifetime Access"
              status="inactive"
              data-oid="mi:hbtl"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="-hkh9lo"
            />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="a4st6tj"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="eumclu9"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="_i1t8-:"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="yr9-ims"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="yi76n_r"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="jgl_3o6"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="lt6xn5t"
            />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="tlv23um"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="c3rp3jo"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid=".ox32hr"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="ul8p9wn"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="pkqm-yv"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="c64jw9_"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="active"
              data-oid="h0cyyv6"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]" data-oid="w5qnkfr">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="gsvmt__"
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
            data-oid="zw8_xmr"
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
            data-oid="lhea1ph"
          />

          <defs data-oid="y9okju3">
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
              data-oid="jssac9f"
            >
              <stop stopColor="#4A6CF7" data-oid="-q6c-ve" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="maexbin"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
              data-oid="m.6dddx"
            >
              <stop stopColor="#4A6CF7" data-oid="nxi-ksx" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="6ihl_-8"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
