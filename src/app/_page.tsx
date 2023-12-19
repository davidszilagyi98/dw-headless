import styles from "./page.module.css";

type Repository = {
  id: number;
};

export default function Home() {
  return <main className={styles.main}></main>;
}
