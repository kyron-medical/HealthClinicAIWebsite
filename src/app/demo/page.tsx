import type { Metadata } from "next";
import DemoForm from "./_components/DemoForm";

export const metadata: Metadata = {
  title: "Demo | Kyron",
  description: "Demo Page for Kyron",
  // other metadata
};

const DemoPage = () => {
  return (
    <section className="pb-[120px] pt-[120px]" data-oid="oq5_5g2">
      <div className="container" data-oid=".pu5iw:">
        <DemoForm data-oid="hcnm-_l" />
      </div>
    </section>
  );
};

export default DemoPage;
