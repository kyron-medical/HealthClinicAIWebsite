import Image from "next/image";
import SectionTitle from "../../../components/Common/SectionTitle";
import GetStarted from "@/app/_components/ui/started-button";

const checkIcon = (
  <svg
    width="16"
    height="13"
    viewBox="0 0 16 13"
    className="fill-current"
    data-oid=":4.050."
  >
    <path
      d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"
      data-oid="13:w8eu"
    />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p
      className="mb-5 flex items-center text-lg font-medium text-body-color"
      data-oid="px:f2y3"
    >
      <span
        className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
        data-oid="mqms0e:"
      >
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <section
        className="py-16 text-center md:py-20 lg:py-28"
        data-oid="01:bi0a"
      >
        <div className="container mx-auto max-w-3xl" data-oid="u476q_-">
          <h2 className="text-3xl font-bold mb-6" data-oid="8czm18o">
            About Kyron Medical
          </h2>
          <p className="text-lg text-body-color" data-oid="r33sn82">
            Kyron Medical is revolutionizing medical billing through
            intelligent, AI-driven denial handling. We specialize in
            transforming tedious and complex denial management processes into
            efficient, streamlined workflows that accelerate reimbursement and
            minimize revenue loss. Our sophisticated AI technology integrates
            seamlessly with existing medical billing and electronic health
            record (EHR) systems, proactively identifying and resolving claim
            denials with unmatched speed and accuracy.
            <br data-oid="beepjtb" />
            <br data-oid="5v3j0eq" />
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
        <div className="container pt-16" data-oid="x9burus">
          <GetStarted data-oid="5_l5-e8" />
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
