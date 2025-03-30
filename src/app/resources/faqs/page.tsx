import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Kyron",
  description:
    "Frequently Asked Questions about Kyron's AI-driven healthcare solutions",
};

// FAQ Category component

export default function FAQPage() {
  return (
    <>
      <Breadcrumb
        pageName="Frequently Asked Questions"
        description="Find answers to common questions about Kyron's AI-driven healthcare solutions"
        data-oid="-sg0p9-"
      />

      <section className="pb-[120px] pt-[120px]" data-oid="ws310:q">
        <div className="container" data-oid="xhvyu42"></div>
      </section>
    </>
  );
}
