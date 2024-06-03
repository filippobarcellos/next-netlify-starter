import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Compliance() {
  return (
    <div className="container">
      <Head>
        <title>Redirect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="<title>You're being redirect to the app or store if you don't have the app</title>" />
      </main>

      <Footer />
    </div>
  );
}
