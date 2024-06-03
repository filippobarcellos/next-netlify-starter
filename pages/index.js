import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

// https://inventorymanchester.co.uk/beta/platform/selling/deeplink/compliance?property=d9376ea2-9475-4702-95a2-127268885ee9
// passar url completa no mesmo host pra ver se abre
// verificar se abre qualquer url (nao e o que queremos, apenas /beta/compliance etc)
// testar host diferente se nao funcionar (foi o que funcionou na sexta)
// ter certeza de que so essa url funciona

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Universal Links spike test!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Universal Links spike test!!" />
        <Link href={"/compliance?property=123456"}>
          continue on app (link within same host)
        </Link>
      </main>

      <Footer />
    </div>
  );
}
