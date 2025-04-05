"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import "./../../../styles/navbar.css";
import GetStarted from "../ui/started-button";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute h-20 bg-transparent bg-opacity-90"
        }`}
        data-oid="tmmqwqb"
      >
        <div
          className="container mx-auto flex flex-col items-center justify-between px-4 lg:flex-row"
          data-oid="ejsb0kq"
        >
          <div
            className="relative flex w-full flex-col items-center justify-between lg:flex-row"
            data-oid="lv_9jo:"
          >
            {/* Logo */}
            <div className="w-60 max-w-full px-4 xl:mr-12" data-oid="3n4bxi2">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
                data-oid="4kikte-"
              >
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="Kyron Logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                  data-oid="34yp_-s"
                />

                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="Kyron Logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                  data-oid="m2glvr8"
                />
              </Link>
            </div>
            <div
              className="flex w-full flex-col items-center justify-between px-4 lg:flex-row"
              data-oid="39ohw6."
            >
              <div data-oid="yg8w6ve">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  data-oid="22n-is_"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                    data-oid="3mkhecx"
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                    data-oid=".d.k1g8"
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                    data-oid="yu_y1oo"
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 flex w-[250px] flex-col rounded border-[.5px] border-body-color/50 bg-white px-6  duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:flex-row lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                  data-oid="rfuo2zu"
                >
                  <ul
                    className="mb-5 block lg:flex lg:space-x-12"
                    data-oid="3mg5jmu"
                  >
                    {menuData.map((menuItem, index) => (
                      <li
                        key={index}
                        className="group relative"
                        data-oid="::ry4:_"
                      >
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`nav-link flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "active text-primary underline-offset-2 dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                            data-oid="c_h7et2"
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                              data-oid="8qedx3v"
                            >
                              {menuItem.title}
                              <span className="pl-3" data-oid="pjuqsr_">
                                <svg
                                  width="25"
                                  height="24"
                                  viewBox="0 0 25 24"
                                  data-oid=".06ys9:"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                    data-oid="9-m6gyj"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                              data-oid="otxjv4p"
                            >
                              {menuItem.submenu?.map((submenuItem, index) =>
                                submenuItem.path ? (
                                  <Link
                                    href={submenuItem.path}
                                    key={index}
                                    className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                    data-oid="3z7nr3u"
                                  >
                                    {submenuItem.title}
                                  </Link>
                                ) : null,
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Mobile-only login and signup */}
                  <div className="mb-5 block lg:hidden" data-oid="7z3hn_8">
                    <SignedOut data-oid="n3ib3j-">
                      <div
                        className="flex flex-col items-center justify-between gap-4"
                        data-oid="igmi_5a"
                      >
                        <SignInButton data-oid="j:x1b91">Login</SignInButton>
                        <GetStarted data-oid="6j93kne" />
                      </div>
                    </SignedOut>
                    <SignedIn data-oid="_k1tnys">
                      <div
                        className="flex flex-col items-center justify-between"
                        data-oid="96rgjxw"
                      >
                        <UserButton data-oid="sp.:c2f" />
                      </div>
                    </SignedIn>
                  </div>
                </nav>
              </div>

              {/* Large screen login and signup */}
              <div
                className="hidden flex-col items-center justify-end gap-4 sm:flex-row lg:flex"
                data-oid="l:tkdx8"
              >
                <SignedOut data-oid="dok_4jv">
                  <SignInButton data-oid="-smhsb9">Login</SignInButton>
                  <GetStarted data-oid="voa9nkt" />
                </SignedOut>
                <SignedIn data-oid="z2cj0-p">
                  <UserButton data-oid="a2jqren" />
                </SignedIn>
              </div>
            </div>{" "}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
