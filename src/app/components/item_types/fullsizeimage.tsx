import { getServerUrl } from "@/app/api/server";

export default async function FullSizeImage({ paragraph }: { paragraph: any }) {
  const imgUrl = paragraph.item.fields.find(
    (field) => field.systemName === "image"
  ).value[0].path;
  return (
    <div>
      <img
        width={1000}
        height={300}
        src={getServerUrl(imgUrl)}
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
