import Breadcrumb from "@/components/Common/Breadcrumb";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import FileUploadBox from "../../app/demo/_components/FileUpload";

import { Metadata } from "next";
import DemoForm from "./_components/DemoForm";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Demo | Kyron",
  description: "Demo Page for Kyron",
  // other metadata
};

const DemoPage = () => {
  return <DemoForm data-oid="4w8jcc4" />;
};

export default DemoPage;
