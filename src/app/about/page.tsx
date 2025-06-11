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
      <AboutSectionOne data-oid="6o_evhx" />
      <AboutSectionTwo data-oid="wu.hy9h" />
      <AboutSectionThree data-oid="2f514ii" />
    </>
  );
};

export default AboutPage;
