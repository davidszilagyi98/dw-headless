import { getServerUrl } from "@/app/api/server";
import Link from "next/link";

export default function ImageText({ paragraph }: { paragraph: any }) {
  const contentForImageText = paragraph.item.fields.find(
    (field) => field.systemName === "contentforimagetext"
  );

  const imageTextPairs = contentForImageText.value.map(
    (imageItem: any, index: number) => {
      const imgUrl = imageItem.fields.find(
        (field) => field.systemName === "image"
      ).value[0].path;
      const heading = imageItem.fields.find(
        (field) => field.systemName === "heading"
      ).value;
      const text = imageItem.fields.find(
        (field) => field.systemName === "text"
      ).value;
      const link = imageItem.fields.find((field) => field.systemName === "link")
        .value.url;

      return { imgUrl, heading, text, link };
    }
  );

  return (
    <div>
      {imageTextPairs.map((pair) => (
        <div className="row row-cols-1 row-cols-sm-2">
          <div className="col">
            <img
              className="img-fluid"
              src={getServerUrl(pair.imgUrl)}
              style={{ width: "100%", maxHeight: "auto" }}
            />
          </div>
          <div className="col p-5 align-self-center">
            <h3 className="info-heading">{pair.heading}</h3>
            <p>{pair.text}</p>
            <button type="button" className="btn p-2 cta-button">
              <Link
                className="text-decoration-none button-text-color"
                href={pair.link}>
                Read more
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
