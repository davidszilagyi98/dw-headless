import getAllParagraph from "../api/getAllParagraph";
import React from "react";
import { Paragraph } from "./Paragraph";

export default async function ParagraphList(props: { pageId: number }) {
  const paragraphList = await getAllParagraph(props.pageId);

  return (
    <div className="container-lg">
      {paragraphList.map((paragraph) => (
        <Paragraph paragraph={paragraph} />
      ))}
    </div>
  );
}
