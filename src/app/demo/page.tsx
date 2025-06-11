import type { Metadata } from "next";
import DemoForm from "./_components/DemoForm";

export const metadata: Metadata = {
  title: "Demo | Kyron",
  description: "Demo Page for Kyron",
  // other metadata
};

const DemoPage = () => {
  return (
    <section className="pb-[120px] pt-[120px]" data-oid="vhl1o2w">
      <div className="container" data-oid="hgeq:_o">
        <DemoForm data-oid="jdv38py" />
      </div>
    </section>
  );
};

export default DemoPage;
