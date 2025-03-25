const SectionTitle = ({
  title,
  paragraph,
  width = "768px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
        data-oid="7ypasfx"
      >
        <h2
          className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
          data-oid="_rfgdp_"
        >
          {title}
        </h2>
        <p
          className="text-base !leading-relaxed text-body-color md:text-lg"
          data-oid="9:xzq1n"
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
