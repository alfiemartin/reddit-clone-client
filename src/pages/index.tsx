import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reddit clone client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world</h1>
    </div>
  );
}
