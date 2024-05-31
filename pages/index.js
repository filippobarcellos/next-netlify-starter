import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Universal Links spike test!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Universal Links spike test!!" />
        <Link href={"https://d9db0.app.link/xxjdIoia3Jb"}>continue on app</Link>
      </main>

      <Footer />
    </div>
  );
}
