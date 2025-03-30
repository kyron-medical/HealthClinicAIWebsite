import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/app/contact/_components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Kyron",
  description: "Contact Page for Kyron",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact data-oid="1z0yrzz" />
    </>
  );
};

export default ContactPage;
