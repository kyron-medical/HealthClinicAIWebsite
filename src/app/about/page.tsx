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
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
