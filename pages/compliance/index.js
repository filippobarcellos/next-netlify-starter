import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useEffect, useRef } from "react";

export default function Compliance() {
  useEffect(() => {
    if (window) {
      window.location.replace(
        "streetconsumer://compliance?propertyId=d9376ea2-9475-4702-95a2-127268885ee9"
      );
    }
  }, [window]);

  return (
    <div className="container">
      <Head>
        <title>You are being redirect to the app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="You're being redirect to the app or store if you don't have the app" />
      </main>

      <Footer />
    </div>
  );
}
