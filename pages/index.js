import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Universal Links spike test!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Universal Links spike test!!" />
        <button
          onClick={"https://main--curious-duckanoo-749871.netlify.app/redirect"}
        >
          continue on app
        </button>
        <button
          onClick={
            "https://main--curious-duckanoo-749871.netlify.app/no-redirect"
          }
        >
          this one won't redirect
        </button>
      </main>

      <Footer />
    </div>
  );
}
