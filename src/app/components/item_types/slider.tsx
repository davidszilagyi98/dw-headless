import { getServerUrl } from "@/app/api/server";
import Link from "next/link";

export default async function Slider({ paragraph }: { paragraph: any }) {
  const imageTextPairs = paragraph.item.fields
    .find((field) => field.systemName === "image")
    .value.map((imageItem: any, index: number) => {
      const imgUrl = imageItem.fields.find(
        (field) => field.systemName === "imageforslider"
      ).value[0].path;
      const text = paragraph.item.fields
        .find((field) => field.systemName === "image")
        .value[index].fields.find((field) => field.systemName === "text").value;
      const header = paragraph.item.fields
        .find((field) => field.systemName === "image")
        .value[index].fields.find(
          (field) => field.systemName === "header"
        ).value;
      const link = paragraph.item.fields
        .find((field) => field.systemName === "image")
        .value[index].fields.find((field) => field.systemName === "button")
        .value.url;

      return { imgUrl, text, header, link };
    });

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade m-5">
        <div className="carousel-inner rounded">
          {imageTextPairs.map((pair, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={getServerUrl(pair.imgUrl)}
                className="d-block w-25 mx-auto"
                alt={`Slide ${index + 1}`}
              />
              <h3 className="d-flex justify-content-center mt-3 ">
                {pair.header}
              </h3>
              <p className="d-flex justify-content-center">{pair.text}</p>
              <div className="text-center">
                <button type="button" className="article-button btn p-2">
                  <Link className="article-link" href={pair.link}>
                    Read more
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon bg-warning"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon bg-warning"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
