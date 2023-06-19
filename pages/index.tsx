import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://thirdweb.com/">thirdweb</a>!
        </h1>
          <Link href="/page2" className={styles.card}>
            <h2>Teste aqui</h2>
          </Link>
      </main>
    </div>
  );
};

export default Home;
