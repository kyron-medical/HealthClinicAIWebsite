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
      <AboutSectionOne data-oid="gkycxg4" />
      <AboutSectionTwo data-oid="mcr4nk1" />
      <AboutSectionThree data-oid="xce6s:6" />
    </>
  );
};

export default AboutPage;
