import FullPageImageView from "../../_components/full-image-page";

export default async function PositionPage({
  params: { id: resourceId },
}: {
  params: { id: string };
}) {
  return <FullPageImageView resourceId={resourceId} resourceType="Case Study" />;
}
