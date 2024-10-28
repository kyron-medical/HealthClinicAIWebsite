import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import { Metadata } from "next";
import RequestDemoButton from "@/components/Common/RequestDemoButton";

export const metadata: Metadata = {
  title: "About Page | Health Clinic AI",
  description: "About Page for Health Clinic AI",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <section className="py-16 text-center md:py-20 lg:py-28">
        <div className="container">
          <h2 className="text-2xl font-bold">About Health Clinic AI</h2>
          <p className="text-lg text-body-color">
            We help your medical practice automate every repetitive task you
            don't want to do. No more insurance verification, appointment
            rescheduling, or back-and-forth to pull records from another system!
          </p>
        </div>
      </section>
      <section className="text-center">
        <div className="container">
          <RequestDemoButton />
        </div>
      </section>
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
