import Image from "next/image";
import SectionTitle from "../../../components/Common/SectionTitle";
import GetStarted from "@/app/_components/ui/started-button";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <section className="py-16 text-center md:py-20 lg:py-28">
        <div className="container">
          <h2 className="text-2xl font-bold">About Kyron</h2>
          <p className="text-lg text-body-color">
            We help your medical practice automate every repetitive task you do
            not want to do. No more insurance verification, appointment
            rescheduling, or back-and-forth to pull records from another system!
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
