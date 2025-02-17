import AboutSectionTwo from "@/app/about/_components/AboutSectionTwo";
import { Metadata } from "next";
import AboutSectionThree from "@/app/about/_components/AboutSectionThree";

export const metadata: Metadata = {
  title: "About Page | Kyron",
  description: "About Page for Kyron",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <section className="py-16 text-center md:py-20 lg:py-28">
        <div className="container">
          <h2 className="text-2xl font-bold">About Kyron</h2>
          <p className="text-lg text-body-color">
            We help your medical practice automate every repetitive task you do
            not want to do. No more insurance verification, appointment
            rescheduling, or back-and-forth to pull records from another system!
          </p>
        </div>
      </section>
      <section className="text-center">
        <div className="container">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section>
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
