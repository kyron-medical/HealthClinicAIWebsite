import type { Metadata } from "next";
import DemoForm from "./_components/DemoForm";

export const metadata: Metadata = {
  title: "Demo | Kyron",
  description: "Demo Page for Kyron",
  // other metadata
};

const DemoPage = () => {
  return (
    <section className="pb-[120px] pt-[120px]" data-oid="tapo:-r">
      <div className="container" data-oid="4aylctf">
        <DemoForm data-oid="gbdz7m." />
      </div>
    </section>
  );
};

export default DemoPage;
