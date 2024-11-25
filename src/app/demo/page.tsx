import Breadcrumb from "@/components/Common/Breadcrumb";
import Demo from "@/components/Demo";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Page | Kyron",
  description: "Demo Page for Kyron",
  // other metadata
};

const DemoPage = () => {
  return (
    <>
      <Demo />
    </>
  );
};

export default DemoPage;
