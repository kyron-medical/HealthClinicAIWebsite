import Resource from "../resource-type";
import resourcesData from "../data/resource-data";
import Pipeline from "./pipeline";

export default async function FullPageImageView(props: {
  resourceId: string;
  resourceType: string;
}) {
  if (!resourcesData || resourcesData.length === 0) {
    return;
  }

  const data: Resource | undefined = resourcesData.find(
    (resource) => resource.id === props.resourceId,
  );

  if (!data) {
    return <div data-oid="55x0bhc">Resource not found.</div>;
  }

  return (
    <section
      className="pb-[120px] pt-[120px] flex justify-center items-center"
      data-oid="hoscqcv"
    >
      <div className="container" data-oid="koj_ihl">
        <div
          className="w-8/12 rounded-[25px] bg-[#2EA84A] p-4 "
          data-oid="31j..21"
        >
          <Pipeline data-oid="hcqx70h" />

          <div className="" data-oid="0_7r41k">
            {/* Using Server actions we can favorite the position, send you back to the home page, and ensure the position is favorited on from the homepage all in one function. */}
            {/* <form
                      action={async () => {
                      "use server";
                       await deletePosition(data.id);
                      }}
                      >
                      <Button type="submit" variant={"default"}>
                      Favorite
                      </Button>
                      </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
