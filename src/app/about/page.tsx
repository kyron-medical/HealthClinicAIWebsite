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
      <AboutSectionOne data-oid="5evuc8b" />
      <AboutSectionTwo data-oid="a5d0ssz" />
      <AboutSectionThree data-oid="riv-0d2" />
    </>
  );
};

export default AboutPage;
