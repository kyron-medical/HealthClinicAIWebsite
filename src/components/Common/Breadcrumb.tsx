import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
        data-oid="2_.8u-t"
      >
        <div className="container py-16 lg:py-24" data-oid=".zvbvr6">
          <div
            className="flex flex-col items-center text-center"
            data-oid="ts5kja7"
          >
            <div className="relative mb-6 inline-block" data-oid="swu6owv">
              <span
                className="absolute -left-6 -top-6 z-[-1] h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30"
                data-oid="0zs-_7d"
              ></span>
              <span
                className="absolute -bottom-6 -right-6 z-[-1] h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30"
                data-oid="n19nwh2"
              ></span>
              <ul
                className="flex items-center rounded-full bg-white px-4 py-2 shadow-md dark:bg-gray-800"
                data-oid="ta.bzua"
              >
                <li className="flex items-center" data-oid="1kpfx:_">
                  <Link
                    href="/"
                    className="pr-1 text-sm font-medium text-body-color hover:text-primary"
                    data-oid="rtt:b1u"
                  >
                    Home
                  </Link>
                  <span
                    className="mx-3 block h-1.5 w-1.5 rotate-45 border-r-2 border-t-2 border-body-color"
                    data-oid="xn-fiji"
                  ></span>
                </li>
                <li
                  className="text-sm font-medium text-primary"
                  data-oid="53.e7-z"
                >
                  {pageName}
                </li>
              </ul>
            </div>

            <h1
              className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl"
              data-oid="_1te1:6"
            >
              {pageName}
            </h1>

            <p
              className="mx-auto max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300"
              data-oid="3jp:y4e"
            >
              {description}
            </p>

            <div
              className="mt-8 flex items-center justify-center space-x-4"
              data-oid="zrbk_r3"
            >
              <span
                className="inline-flex h-1 w-12 rounded bg-blue-500"
                data-oid="kkr_4if"
              ></span>
              <span
                className="inline-flex h-1 w-3 rounded bg-blue-500"
                data-oid="9:y..-w"
              ></span>
              <span
                className="inline-flex h-1 w-1 rounded bg-blue-500"
                data-oid="801mgf-"
              ></span>
            </div>
          </div>
        </div>

        <div data-oid="a.6nqu:">
          <span className="absolute left-0 top-0 z-[-1]" data-oid="j65xn3i">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="0oi6cz-"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
                data-oid="-aa:0xz"
              />

              <defs data-oid="2tmurs3">
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                  data-oid="x3zv._7"
                >
                  <stop stopColor="#4A6CF7" data-oid="g-vrpq-" />
                  <stop
                    offset="1"
                    stopColor="#4A6CF7"
                    stopOpacity="0"
                    data-oid="u.edbfx"
                  />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]" data-oid="k78ah7k">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="44cb4ps"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
                data-oid="-pueum:"
              />

              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
                data-oid="nad77yp"
              />

              <defs data-oid=":gd7vvn">
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                  data-oid="3kwyx-_"
                >
                  <stop stopColor="#4A6CF7" data-oid="kvhc7xu" />
                  <stop
                    offset="1"
                    stopColor="#4A6CF7"
                    stopOpacity="0"
                    data-oid="s1_ub_a"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                  data-oid="rddg_nx"
                >
                  <stop stopColor="#4A6CF7" data-oid="_9ht_6p" />
                  <stop
                    offset="1"
                    stopColor="#4A6CF7"
                    stopOpacity="0"
                    data-oid="trxyjpv"
                  />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
