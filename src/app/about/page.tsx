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
      <AboutSectionOne data-oid="5n5oox5" />
      <AboutSectionTwo data-oid="olppha." />
      <AboutSectionThree data-oid="o538aud" />
    </>
  );
};

export default AboutPage;
