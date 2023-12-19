import { getServerUrl } from "@/app/api/server";
import Link from "next/link";

export default async function EntryContent({ paragraph }: { paragraph: any }) {
  const imgUrl = paragraph.item.fields.find(
    (field) => field.systemName === "image"
  ).value[0].path;

  const heading = paragraph.item.fields.find(
    (field) => field.systemName === "heading"
  ).value;

  const longtext = paragraph.item.fields.find(
    (field) => field.systemName === "longtext"
  ).value;

  const buttonUrl = paragraph.item.fields.find(
    (field) => field.systemName === "button"
  ).value.url;

  return (
    <div className="row row-cols-1 row-cols-sm-2">
      <div className="col">
        <img
          className="img-fluid d-flex mx-auto"
          src={getServerUrl(imgUrl)}
          style={{ width: "80%", maxHeight: "auto" }}
        />
      </div>
      <div className="col p-5 align-self-center">
        <h1>{heading}</h1>
        <p>{longtext}</p>
        <button type="button" className="btn p-2 cta-button">
          <Link
            className="text-decoration-none button-text-color"
            href={buttonUrl}>
            Read more
          </Link>
        </button>
      </div>
    </div>
  );
}
