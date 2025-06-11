import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-16 md:py-20 lg:py-28"
        data-oid="70zhpe0"
      >
        <div className="container" data-oid="9pm.w54">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
            data-oid="0f.tu4r"
          />

          <div
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
            data-oid="3::-xlh"
          >
            {featuresData.map((feature) => (
              <SingleFeature
                key={feature.id}
                feature={feature}
                data-oid="uqb67x7"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
