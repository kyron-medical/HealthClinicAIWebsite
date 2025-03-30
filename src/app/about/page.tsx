import AboutSectionTwo from "@/app/about/_components/AboutSectionTwo";
import { Metadata } from "next";
import AboutSectionThree from "@/app/about/_components/AboutSectionThree";
import GetStarted from "../_components/ui/started-button";
import AboutSectionOne from "./_components/AboutSectionOne";

export const metadata: Metadata = {
  title: "About Page | Kyron",
  description: "About Page for Kyron",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne data-oid="fp-6w:h" />
      <AboutSectionTwo data-oid="28nbl7d" />
      <AboutSectionThree data-oid="oy1s2g5" />
    </>
  );
};

export default AboutPage;
