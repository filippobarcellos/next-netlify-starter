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
        <a
          href={
            "https://main--curious-duckanoo-749871.netlify.app/redirect?propertyId=123456"
          }
        >
          continue on app
        </a>
        <a href={"https://main--curious-duckanoo-749871.netlify.app/redirect"}>
          this one is without the query params
        </a>
      </main>

      <Footer />
    </div>
  );
}
