import type { Metadata } from "next";
import DemoForm from "./_components/DemoForm";


export const metadata: Metadata = {
  title: "Demo | Kyron",
  description: "Demo Page for Kyron",
  // other metadata
};

const DemoPage = () => {
  return <DemoForm data-oid="hcnm-_l" />;
};

export default DemoPage;
