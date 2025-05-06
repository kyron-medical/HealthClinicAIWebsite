import Contact from "@/app/contact/_components/Contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Kyron",
  description: "Contact Page for Kyron",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
