"use client";

import ScrollUp from "@/components/Common/ScrollUp";

import { Metadata } from "next";
import Landing from "./_components/home/Landing";
import Testimonials from "./_components/home/Testimonials";
import Image from "next/image";
import Orb from "@/app/_components/orbs/orb";
import PinkOrb from "@/app/_components/orbs/pink-orb";
import GreenOrb from "@/app/_components/orbs/green-orb";
import { InfiniteCarousel } from "./news/_components/InfiniteCarousel";
import { CarouselPlugin } from "@/app/_components/ui/carousel";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Landing />
      <section id="prototype" className="my-8 text-center">
        <div className="flex flex-row items-center ">
          <div className="mx-auto w-1/3 pl-16 text-left">
            <h2 className="mb-4 text-4xl font-bold">
              Our Physician Dashboard Gives You{" "}
              <span className="bg-gradient-to-b from-[#4A6CF7] to-[#3628d2] bg-clip-text text-transparent">
                Full Control
              </span>{" "}
              Over Your Billing
            </h2>
            <p className="text-lg text-body-color">
              Our physician dashboard is designed to give you full control over
              your billing, scheduling, and patient records. You can easily
              automate every repetitive task you do not want to do.
            </p>
          </div>
          <Image
            src="/images/frontend-prototype.png"
            alt="Front-End Prototype"
            className="mx-auto w-1/2"
            width={500}
            height={400}
          />
        </div>
      </section>

      <section id="Features" className="py-16 text-center md:py-20 lg:py-28">
        <div className="container">
          <h3>
            <span className="text-2xl text-slate-700">As featured in...</span>
          </h3>

          <div className="mt-24 flex">
            <InfiniteCarousel>
              <Image
                src={"/logos/news/brown-university.png"}
                className=""
                alt={""}
                height={200}
                width={300}
              />
              <Image
                src={"/logos/news/warren-alpert.png"}
                className=""
                alt={""}
                height={200}
                width={300}
              />

              <Image
                src={"/logos/news/bdh.png"}
                className=""
                alt={""}
                height={200}
                width={300}
              />

              <Image
                src={"/logos/news/american-bazaar.jpg"}
                className=""
                alt={""}
                height={200}
                width={300}
              />

              <Image
                src={"/logos/news/providence-journal.png"}
                className=""
                alt={""}
                height={200}
                width={300}
              />

              <Image
                src={"/logos/news/usa-today.png"}
                className=""
                alt={""}
                height={200}
                width={300}
              />

              <Image
                src={"/logos/news/boston-globe.png"}
                className=""
                alt={""}
                height={200}
                width={300}
              />

              <Image
                src={"/logos/news/new-england-council.png"}
                className=""
                alt={""}
                height={200}
                width={300}
              />
            </InfiniteCarousel>
          </div>
        </div>
      </section>

      <section className="py-16 text-center md:py-20 lg:py-28">
        <div className="container">
          <h2 className="text-2xl font-bold">About Kyron</h2>
          <p className="text-lg text-body-color">
            We help your medical practice automate every repetitive task you do
            not want to do. No more insurance verification, appointment
            rescheduling, or back-and-forth to pull records from another system!
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 pt-24">
            <div className="hover:scale-102 flex transform flex-row items-center rounded-lg border p-3 shadow-lg transition-transform">
              <Orb color="pink" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Denials Management</h3>
                <p className="text-left text-body-color">
                  <span className="text-left font-bold">
                    Turn denials into approvals.
                  </span>{" "}
                  Proactively identify, analyze, and resolve claim denials with
                  intelligent automation, reducing revenue loss and
                  administrative burden.
                </p>
              </div>
            </div>
            <div className="hover:scale-102 flex transform flex-row items-center rounded-lg border p-3 shadow-lg transition-transform">
              <Orb color="green" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Claims Management</h3>
                <p className="text-left text-body-color">
                  <span className="font-bold">
                    Faster claims, fewer errors, higher revenue.
                  </span>{" "}
                  AI-powered claims processing ensures accuracy, accelerates
                  approvals, and minimizes rework—so you get paid faster.
                </p>
              </div>
            </div>
            <div className="hover:scale-102 flex transform flex-row items-center rounded-lg border p-3 shadow-lg transition-transform">
              <Orb color="pearl" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Prior Authorization</h3>
                <p className="text-left text-body-color">
                  <span className="font-bold">
                    Instant approvals, fewer delays. AI streamlines prior
                  </span>{" "}
                  authorizations by automating documentation, reducing provider
                  workload, and expediting patient care.
                </p>
              </div>
            </div>
            <div className="hover:scale-102 flex transform flex-row items-center rounded-lg border p-3 shadow-lg transition-transform">
              <Orb color="orange" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">
                  Eligibility Verification
                </h3>
                <p className="text-left text-body-color">
                  <span className="font-bold">
                    Verify in seconds, reduce rejections.
                  </span>{" "}
                  AI-driven eligibility checks instantly confirm patient
                  coverage, preventing claim denials and improving front-end
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
