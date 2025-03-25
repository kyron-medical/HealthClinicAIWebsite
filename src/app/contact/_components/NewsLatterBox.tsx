"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div
      className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11"
      data-oid="wxj:6cx"
    >
      <h3
        className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white"
        data-oid="7a0n74h"
      >
        Join the Waitlist
      </h3>
      <p
        className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25"
        data-oid="5k67:7c"
      >
        Discounts, new features, free upgrades, and more.
      </p>
      <div data-oid="-s.0c06">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          data-oid="2.d.qg0"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          data-oid="aki7r2o"
        />

        <input
          type="submit"
          value="Subscribe"
          className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          data-oid="mblp84s"
        />

        <p
          className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark"
          data-oid="i9_3lrc"
        >
          You will be the first to know about new Kyron developments!
        </p>
      </div>

      <div data-oid="x_nqi80">
        <span className="absolute left-2 top-7" data-oid="tqrrzc9">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-oid="l3jj2e9"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
              data-oid="w87i4y7"
            />

            <defs data-oid=".he08z1">
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
                data-oid="o4oyh5w"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                  data-oid=".ncis:i"
                />

                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                  data-oid="sytylhv"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute bottom-24 left-1.5" data-oid="jy7qx:p">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-oid="-lypujg"
          >
            <path
              opacity="0.5"
              d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z"
              fill="url(#paint0_linear_1028_601)"
              data-oid="_hp1v4g"
            />

            <defs data-oid="5xq9dsx">
              <linearGradient
                id="paint0_linear_1028_601"
                x1="39.1948"
                y1="38.335"
                x2="10.6982"
                y2="10.2511"
                gradientUnits="userSpaceOnUse"
                data-oid="-ybbqpq"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                  data-oid="2qw_2bx"
                />

                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                  data-oid="yw_--7p"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-2 top-[140px]" data-oid="5yojqpw">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-oid="ybypx5h"
          >
            <path
              opacity="0.5"
              d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
              fill="url(#paint0_linear_1028_602)"
              data-oid="abxv8m0"
            />

            <defs data-oid="rp86:ph">
              <linearGradient
                id="paint0_linear_1028_602"
                x1="-0.571054"
                y1="-37.1717"
                x2="28.7937"
                y2="26.7564"
                gradientUnits="userSpaceOnUse"
                data-oid="ubypkrf"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                  data-oid=".9.:ppz"
                />

                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                  data-oid="x:1xde4"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute right-0 top-0" data-oid="bt-ywtd">
          <svg
            width="162"
            height="91"
            viewBox="0 0 162 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-oid="wbt_8jm"
          >
            <g opacity="0.3" data-oid="8szydqt">
              <path
                opacity="0.45"
                d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                stroke="url(#paint0_linear_1028_603)"
                data-oid="cbt-ym:"
              />

              <path
                opacity="0.45"
                d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                stroke="url(#paint1_linear_1028_603)"
                data-oid="lez5gi3"
              />

              <path
                opacity="0.45"
                d="M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69"
                stroke="url(#paint2_linear_1028_603)"
                data-oid="8jydml2"
              />

              <path
                opacity="0.45"
                d="M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102"
                stroke="url(#paint3_linear_1028_603)"
                data-oid="h56_57a"
              />
            </g>
            <defs data-oid="1e4gflg">
              <linearGradient
                id="paint0_linear_1028_603"
                x1="291.35"
                y1="12.1032"
                x2="179.211"
                y2="237.617"
                gradientUnits="userSpaceOnUse"
                data-oid="p6r_49j"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  data-oid="-.2ymh."
                />

                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                  data-oid="_748klr"
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1028_603"
                x1="333.35"
                y1="-12.8968"
                x2="221.211"
                y2="212.617"
                gradientUnits="userSpaceOnUse"
                data-oid="poe0gcb"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  data-oid="jjzv7b1"
                />

                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                  data-oid="4qbd8-b"
                />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1028_603"
                x1="294.35"
                y1="-3.89678"
                x2="182.211"
                y2="221.617"
                gradientUnits="userSpaceOnUse"
                data-oid="iduyghl"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  data-oid="9dh0gn."
                />

                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                  data-oid="gcxde38"
                />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1028_603"
                x1="331.35"
                y1="-36.8968"
                x2="219.211"
                y2="188.617"
                gradientUnits="userSpaceOnUse"
                data-oid="oeowz_f"
              >
                <stop
                  offset="0.328125"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  data-oid="q-2vyvr"
                />

                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                  data-oid="l0ot2-0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;
