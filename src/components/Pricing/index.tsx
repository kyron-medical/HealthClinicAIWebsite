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
      data-oid="_2v9bu."
    >
      <div className="container" data-oid="_rcggsf">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
          data-oid="lljtyks"
        />

        <div className="w-full" data-oid="wis0o_h">
          <div
            className="mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-oid="2m2.t9v"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
              data-oid="3urpdue"
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
              data-oid="a:z9w.m"
            >
              <div className="relative" data-oid="81oi729">
                <div
                  className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"
                  data-oid="itmyb5w"
                ></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                  data-oid="v70o4as"
                >
                  <span
                    className="active h-4 w-4 rounded-full bg-white"
                    data-oid="esnftpz"
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
              data-oid="83c1_:5"
            >
              Yearly
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          data-oid="6e.x932"
        >
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="7:kwlmo"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="rffivnm"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="e-wb85z"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="rx-62r-"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="_j4_ftz"
            />

            <OfferList
              text="Lifetime Access"
              status="inactive"
              data-oid="75ya3u3"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="pmvde91"
            />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="sg6twbm"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="z2t6hlq"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="onzf_dd"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="qaew:m2"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="_:.:_73"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="_j400:d"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="inactive"
              data-oid="e-._ing"
            />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            data-oid="8cx_ksw"
          >
            <OfferList
              text="All UI Components"
              status="active"
              data-oid="0fe42_x"
            />

            <OfferList
              text="Use with Unlimited Projects"
              status="active"
              data-oid="yg.juvc"
            />

            <OfferList
              text="Commercial Use"
              status="active"
              data-oid="20b:krc"
            />

            <OfferList
              text="Email Support"
              status="active"
              data-oid="1fmp0ju"
            />

            <OfferList
              text="Lifetime Access"
              status="active"
              data-oid="0hp6qss"
            />

            <OfferList
              text="Free Lifetime Updates"
              status="active"
              data-oid="5i54.aa"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]" data-oid="8atmf.m">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-oid="gccwa6l"
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
            data-oid="kmw4ktj"
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
            data-oid="lizh8lj"
          />

          <defs data-oid="2quhxgx">
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
              data-oid="66.wv51"
            >
              <stop stopColor="#4A6CF7" data-oid="lxvbkmr" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="cid998b"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
              data-oid="0ziwkbw"
            >
              <stop stopColor="#4A6CF7" data-oid="w263eo9" />
              <stop
                offset="1"
                stopColor="#4A6CF7"
                stopOpacity="0"
                data-oid="brjt33d"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
