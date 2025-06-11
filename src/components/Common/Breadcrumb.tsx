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
        data-oid="9sl_jz0"
      >
        <div className="container py-16 lg:py-24" data-oid="a:jotyg">
          <div
            className="flex flex-col items-center text-center"
            data-oid="_i3aszl"
          >
            {/* <div className="relative mb-6 inline-block">
                                    <span className="absolute -left-6 -top-6 z-[-1] h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30"></span>
                                    <span className="absolute -bottom-6 -right-6 z-[-1] h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30"></span>
                                    <ul className="flex items-center rounded-full bg-white px-4 py-2 shadow-md dark:bg-gray-800">
                                      <li className="flex items-center">
                                        <Link
                                          href="/"
                                          className="pr-1 text-sm font-medium text-body-color hover:text-primary"
                                        >
                                          Home
                                        </Link>
                                        <span className="mx-3 block h-1.5 w-1.5 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                                      </li>
                                      <li className="text-sm font-medium text-primary">{pageName}</li>
                                    </ul>
                                   </div> */}

            <h1
              className="mb-6 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl"
              data-oid="5fhbq28"
            >
              {pageName}
            </h1>

            <p
              className="mx-auto max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300"
              data-oid="9rd15bh"
            >
              {description}
            </p>

            <div
              className="mt-8 flex items-center justify-center space-x-4"
              data-oid="8-2vuhy"
            >
              <span
                className="inline-flex h-1 w-12 rounded bg-blue-500"
                data-oid="u9xc7ib"
              ></span>
              <span
                className="inline-flex h-1 w-3 rounded bg-blue-500"
                data-oid="ozvdp4y"
              ></span>
              <span
                className="inline-flex h-1 w-1 rounded bg-blue-500"
                data-oid="bdo9vr7"
              ></span>
            </div>
          </div>
        </div>

        <div data-oid="iv36n_1">
          <span className="absolute left-0 top-0 z-[-1]" data-oid="dzkwjf4">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="q0.wkbw"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
                data-oid="m7bsq17"
              />

              <defs data-oid="0rux_v7">
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                  data-oid="mb0eqv9"
                >
                  <stop stopColor="#4A6CF7" data-oid="67:ki3e" />
                  <stop
                    offset="1"
                    stopColor="#4A6CF7"
                    stopOpacity="0"
                    data-oid="fj1t0n0"
                  />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]" data-oid="h6d9xi6">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-oid=".zne47x"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
                data-oid="fgoa91s"
              />

              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
                data-oid="qr1ftbq"
              />

              <defs data-oid="q2edt4l">
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                  data-oid="ja66hj_"
                >
                  <stop stopColor="#4A6CF7" data-oid="-kl4xrw" />
                  <stop
                    offset="1"
                    stopColor="#4A6CF7"
                    stopOpacity="0"
                    data-oid="eacsy2t"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                  data-oid="v57wggk"
                >
                  <stop stopColor="#4A6CF7" data-oid="t-udbxm" />
                  <stop
                    offset="1"
                    stopColor="#4A6CF7"
                    stopOpacity="0"
                    data-oid="ndsbsa-"
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
