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
      data-oid="no0tcsm"
    >
      <div className="container" data-oid="8v9vo9b">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
          data-oid="m8xs.6."
        />

        <div className="w-full" data-oid="pjk7xws">
          <div
            className="mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-oid="ull_nny"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
              data-oid="jrmaqzi"
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
              data-oid=".wagfsz"
            >
              <div className="relative" data-oid="o_b21z3">
                <div
                  className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"
                  data-oid="9a8i.7:"
                ></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                  data-oid="q8o7v.d"
                >
                  <span
                    className="active h-4 w-4 rounded-full bg-white"
                    data-oid="q-y12.9"
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
              data-oid=":l4cpu5"
            >
              Yearly
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          data-oid="bx6._7s"
        >
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="n30k7y_"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="qvr193a"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="o5h6ov0"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="mizf93h"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="aau8gkc"
            />

            <OfferList
              text="Lifetime Access"
              status="inactive"
              data-oid="jr52:i9"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="y.afq5r"
            />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="fcc.o4y"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid=":5zbs8p"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="z31ysxk"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="ysqz_sh"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="7uh_h4."
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="kne6lk6"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="2p3wg-g"
            />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="h85.ls."
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="ffev28w"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="brn0jud"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="ju:5bj8"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="-c:1yz5"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="hkw6sod"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="active"
              data-oid="97p.ikd"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]" data-oid="_q_x8i7">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="qc-axgv"
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
            data-oid="e.fz0v_"
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
            data-oid="_knh-q9"
          />

          <defs data-oid="q8.djb.">
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
              data-oid="_5u_lhg"
            >
              <stop stopColor="#4A6CF7" data-oid="a8nv5vg" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="gr_ygb."
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
              data-oid="my0wpv."
            >
              <stop stopColor="#4A6CF7" data-oid="23tc8-m" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="djft1_l"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
