import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Health Clinic AI",
  description: "Contact Page for Health Clinic AI",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Want to bring your clinic into the AI era? Have any feature requests or issues to report?"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
