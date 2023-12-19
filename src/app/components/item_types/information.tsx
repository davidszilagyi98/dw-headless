import { getServerUrl } from "@/app/api/server";
import Link from "next/link";

export default async function Information({ paragraph }: { paragraph: any }) {
  const imageTextPairs = paragraph.item.fields
    .find((field) => field.systemName === "information")
    .value.map((imageItem: any, index: number) => {
      const imgUrl = imageItem.fields.find(
        (field) => field.systemName === "image"
      ).value[0].path;
      const heading = paragraph.item.fields
        .find((field) => field.systemName === "information")
        .value[index].fields.find(
          (field) => field.systemName === "heading"
        ).value;
      const text = paragraph.item.fields
        .find((field) => field.systemName === "information")
        .value[index].fields.find((field) => field.systemName === "text").value;

      return { imgUrl, heading, text };
    });

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 p-5">
        {imageTextPairs.map((pair) => (
          <div className="col">
            <img className="d-flex mx-auto" src={getServerUrl(pair.imgUrl)} />
            <h5 className="d-flex justify-content-center info-heading">
              {pair.heading}
            </h5>
            <p className="text-center">{pair.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
