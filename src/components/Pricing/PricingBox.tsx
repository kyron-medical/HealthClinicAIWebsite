const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full" data-oid="vghhzce">
      <div
        className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark"
        data-oid=":yb9o-o"
      >
        <div className="flex items-center justify-between" data-oid="vo-nd9d">
          <h3
            className="price mb-2 text-[32px] font-bold text-black dark:text-white"
            data-oid="wpp_iqr"
          >
            $
            <span className="amount" data-oid="x5-_tfv">
              {price}
            </span>
            <span
              className="time text-lg font-medium text-body-color"
              data-oid="3v_-0ow"
            >
              /{duration}
            </span>
          </h3>
          <h4
            className="mb-2 text-xl font-bold text-dark dark:text-white"
            data-oid="gw6z-st"
          >
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color" data-oid="a9io7zd">
          {subtitle}
        </p>
        <div
          className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10"
          data-oid="iewqcmr"
        >
          <button
            className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
            data-oid="dicgdd."
          >
            Start Free Trial
          </button>
        </div>
        <div data-oid="58x6zz0">{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]" data-oid="uc3fdqr">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-oid="ovvw84t"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
              data-oid="ztvruzm"
            />

            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
              data-oid="qyyusl4"
            />

            <defs data-oid="w7l5g1h">
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
                data-oid="3g:nijd"
              >
                <stop
                  stopColor="#4A6CF7"
                  stopOpacity="0.62"
                  data-oid="qgjo04v"
                />

                <stop
                  offset="1"
                  stopColor="#4A6CF7"
                  stopOpacity="0"
                  data-oid="x.o_1s."
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
                data-oid="2eefcak"
              >
                <stop
                  stopColor="#4A6CF7"
                  stopOpacity="0.62"
                  data-oid="o11:u57"
                />

                <stop
                  offset="1"
                  stopColor="#4A6CF7"
                  stopOpacity="0"
                  data-oid="dg44man"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
