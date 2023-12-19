import ParagraphList from "./AllParagraph";

export default async function Page({ page }: { page: any }) {
  return (
    <>
      <ParagraphList pageId={page.id} />
    </>
  );
}
