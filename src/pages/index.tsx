import Head from "next/head";
import { Svg } from "afb-react-svg";
import Footer from "@/components/pages/shared/footer";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/pages/home/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Doctor&doctor</title>
        <meta
          name="description"
          content="A perfeita sintonia entre estética dental e harmonização orofacial."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Hero />

      <Footer />
    </>
  );
}
