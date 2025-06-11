import AboutSectionTwo from "@/app/about/_components/AboutSectionTwo";
import type { Metadata } from "next";
import AboutSectionThree from "@/app/about/_components/AboutSectionThree";
import AboutSectionOne from "./_components/AboutSectionOne";

export const metadata: Metadata = {
  title: "About Page | Kyron",
  description: "About Page for Kyron",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne data-oid="svgc.m-" />
      <AboutSectionTwo data-oid="f277pmg" />
      <AboutSectionThree data-oid="fmpzgfn" />
    </>
  );
};

export default AboutPage;
