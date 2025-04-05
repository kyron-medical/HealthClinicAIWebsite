import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-16 md:py-20 lg:py-28"
        data-oid="7oa_g:q"
      >
        <div className="container" data-oid="ft5t43t">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
            data-oid="i534a3o"
          />

          <div
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
            data-oid="yugc9oa"
          >
            {featuresData.map((feature) => (
              <SingleFeature
                key={feature.id}
                feature={feature}
                data-oid="08yudxm"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
