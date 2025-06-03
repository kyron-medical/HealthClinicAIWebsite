import GetStarted from "@/app/_components/ui/started-button";


const AboutSectionOne = () => {

  return (
    <>
      <section className="py-16 text-center md:py-20 lg:py-28">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">About Kyron Medical</h2>
          <p className="text-lg text-body-color">
            Kyron Medical is revolutionizing medical billing through
            intelligent, AI-driven denial handling. We specialize in
            transforming tedious and complex denial management processes into
            efficient, streamlined workflows that accelerate reimbursement and
            minimize revenue loss. Our sophisticated AI technology integrates
            seamlessly with existing medical billing and electronic health
            record (EHR) systems, proactively identifying and resolving claim
            denials with unmatched speed and accuracy.
            <br />
            <br />
            By automating denial handling, Kyron Medical significantly reduces
            administrative burdens, enabling healthcare providers to reclaim
            valuable time previously spent on manual billing tasks. This
            empowers medical practices to enhance patient care, boost financial
            performance, and operate more efficiently. With Kyron Medical,
            denial management shifts from months of paperwork to resolution in
            minutes, ensuring faster reimbursements and improved practice
            profitability.
          </p>
        </div>
        <div className="container pt-16">
          <GetStarted />
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
