"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24"
        data-oid="xfuovrw"
      >
        <div className="container mx-auto px-4" data-oid="26lm3h-">
          <div className="-mx-4 flex flex-wrap" data-oid="9ufib05">
            <div
              className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12"
              data-oid="-3nwg0r"
            >
              <div className="mb-12 max-w-[360px] lg:mb-16" data-oid="ps0g:ll">
                <Link
                  href="/"
                  className="footer-logo mb-8 inline-block"
                  data-oid="p8389pg"
                >
                  <Image
                    src="/images/logo/kyron_medical.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                    data-oid="3e6mou-"
                  />

                  <Image
                    src="/images/logo/kyron_medical.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                    data-oid="1wx0bzy"
                  />
                </Link>
                <p
                  className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark"
                  data-oid="38y-gj5"
                >
                  © 2025 Kyron, Inc All rights reserved.
                </p>
                <div
                  className="footer-social flex flex-wrap items-center justify-center gap-8 md:justify-start"
                  data-oid="apro0k5"
                >
                  {/* <a
                                         href="/"
                                         aria-label="social-link"
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="mr-6 mb-4 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                                        >
                                         <svg
                                           width="18"
                                           height="18"
                                           viewBox="0 0 22 22"
                                           fill="none"
                                           xmlns="http://www.w3.org/2000/svg"
                                         >
                                           <path
                                             d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                                             fill="currentColor"
                                           />
                                         </svg>
                                        </a> */}
                  {/* <a
                                         href="/"
                                         aria-label="social-link"
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="mr-6 mb-4 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                                        >
                                         <svg
                                           width="18"
                                           height="18"
                                           viewBox="0 0 22 22"
                                           fill="none"
                                           xmlns="http://www.w3.org/2000/svg"
                                         >
                                           <path
                                             fillRule="evenodd"
                                             clipRule="evenodd"
                                             d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                                             fill="currentColor"
                                           />
                                         </svg>
                                        </a> */}
                  {/* <a
                                         href="/"
                                         aria-label="social-link"
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="mr-6 mb-4 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                                        >
                                         <svg
                                           width="18"
                                           height="14"
                                           viewBox="0 0 18 14"
                                           className="fill-current"
                                         >
                                           <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                                         </svg>
                                        </a> */}
                  <a
                    href="https://www.linkedin.com/company/kyron-medical/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    data-oid="jkcfmyu"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                      data-oid="1j9q5v5"
                    >
                      <path
                        d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z"
                        data-oid="t0iezsl"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/kyronmedical/"
                    aria-label="instagram-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    data-oid="0lj8epv"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                      data-oid=":t6squp"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.563.334-3.637 1.408-1.074 1.074-1.349 2.356-1.408 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.334 2.563 1.408 3.637 1.074 1.074 2.356 1.349 3.637 1.408 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.563-.334 3.637-1.408 1.074-1.074 1.349-2.356 1.408-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.334-2.563-1.408-3.637-1.074-1.074-2.356-1.349-3.637-1.408-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"
                        data-oid="yt1ledg"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="ml-auto w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"
              data-oid="vtsx5pe"
            >
              <div className="mb-12 lg:mb-16" data-oid="lzqxln1">
                <h2
                  className="mb-10 text-xl font-bold text-black dark:text-white"
                  data-oid="kuwr6v9"
                >
                  Useful Links
                </h2>
                <ul data-oid="_dq2ah:">
                  <li data-oid="797grd.">
                    <Link
                      href="https://form.typeform.com/to/zstMkPH7"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      data-oid="6y1j5_1"
                    >
                      Get Started
                    </Link>
                  </li>
                  <li data-oid="hdfn8tz">
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      data-oid="tx8xj7v"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12"
              data-oid="68.sbd3"
            >
              <div className="mb-12 lg:mb-16" data-oid="6-9dvo2">
                <h2
                  className="mb-10 text-xl font-bold text-black dark:text-white"
                  data-oid="lv6a2gu"
                >
                  Social Media
                </h2>
                <ul data-oid="1g5_1jj">
                  <li data-oid="ir7y6bf">
                    <Link
                      href="https://www.linkedin.com/company/kyron-medical/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      data-oid="0bjf9q5"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li data-oid="bkh-ijv">
                    <Link
                      href="https://www.instagram.com/kyronmedical/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      data-oid="xt1j_7h"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
