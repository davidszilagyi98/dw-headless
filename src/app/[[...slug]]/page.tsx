import styles from "../page.module.css";
import { getPageBySlug } from "../api/getPages";
import Navigation from "../components/Navigation";
import Page from "../components/Page";
import Footer from "../components/Footer";
import ParagraphList from "../components/AllParagraph";

export default async function ContentPage({ params: { slug } }) {
  const urlSlug = `/${slug?.join("/")}`;
  const page = await getPageBySlug(urlSlug);

  if (!page && slug) {
    return <h1>404</h1>;
  }

  const content = page ? <Page page={page} /> : <ParagraphList pageId={1} />;

  return (
    <main className={styles.main}>
      <Navigation />
      {content}
      <Footer />
    </main>
  );
}
