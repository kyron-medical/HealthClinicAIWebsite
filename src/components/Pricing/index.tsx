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
      data-oid=":t3j-j5"
    >
      <div className="container" data-oid="ltpb..x">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
          data-oid="7wyg0e2"
        />

        <div className="w-full" data-oid="5jnf-rs">
          <div
            className="mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-oid=":u7_u7_"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
              data-oid="dgfi753"
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
              data-oid="u6ubf_u"
            >
              <div className="relative" data-oid="u2n.18k">
                <div
                  className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"
                  data-oid="lkfmotw"
                ></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                  data-oid="j8gicof"
                >
                  <span
                    className="active h-4 w-4 rounded-full bg-white"
                    data-oid="e2o_wh7"
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
              data-oid="m3a.lyu"
            >
              Yearly
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          data-oid="9h2vze0"
        >
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="mx6.a93"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="my3a2_2"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="m.r-ley"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="y6stqsx"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="jv:h.kh"
            />

            <OfferList
              text="Lifetime Access"
              status="inactive"
              data-oid="x31ava:"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="__brkqw"
            />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="aqv2vie"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="q3vzkx8"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="gvlt1mc"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="tglgh6j"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="uccdye2"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="e1ku_u_"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="f0se1a3"
            />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid=".y.r3wj"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="27o7.am"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="0tunfem"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="o6cl00x"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="vmfnh5j"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="je6k2wu"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="active"
              data-oid="5.lm96t"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]" data-oid="n:0i_v1">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="0_vteg8"
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
            data-oid="lsmunjr"
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
            data-oid="jdbj8eh"
          />

          <defs data-oid="eq439ve">
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
              data-oid="8x7mklv"
            >
              <stop stopColor="#4A6CF7" data-oid="lk8gitz" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="cy2da9t"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
              data-oid="1b9dk6i"
            >
              <stop stopColor="#4A6CF7" data-oid="v-.6eb." />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="x-cp1t8"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
