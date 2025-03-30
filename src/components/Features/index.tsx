import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-16 md:py-20 lg:py-28"
        data-oid="o1mpqtk"
      >
        <div className="container" data-oid="-p9dl:m">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
            data-oid="v04yjyi"
          />

          <div
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
            data-oid="l3k24gi"
          >
            {featuresData.map((feature) => (
              <SingleFeature
                key={feature.id}
                feature={feature}
                data-oid="9w5_a5p"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
