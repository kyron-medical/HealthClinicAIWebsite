import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Clinic AI",
  description: "Spend time with patients while we automate the paperwork",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <section id="prototype" className="my-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">Our Front-End Prototype</h2>
        <img
          src="/images/frontend-prototype.png"
          alt="Front-End Prototype"
          className="mx-auto w-1/2"
        />
      </section>
      <section className="py-16 text-center md:py-20 lg:py-28">
        <div className="container">
          <h2 className="text-2xl font-bold">About Health Clinic AI</h2>
          <p className="text-lg text-body-color">
            We help your medical practice automate every repetitive task you
            do not want to do. No more insurance verification, appointment
            rescheduling, or back-and-forth to pull records from another system!
          </p>
        </div>
      </section>
      {/*<Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />*/}
      <Testimonials />
      {/*<Pricing />
      <Blog />
      <Contact />*/}
    </>
  );
}
