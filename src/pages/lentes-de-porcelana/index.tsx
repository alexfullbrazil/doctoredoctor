import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Procedures } from "@/components/procedures";
import { Testimonials } from "@/components/testimonials";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function LentesDePorcelana() {
  return (
    <>
      <Head>
        <title>Lentes de Contato Dental de Porcelana | Doctor&doctor</title>
        <meta property="og:site_name" content="Doctor&doctor" />
        <meta
          property="og:title"
          content="Lentes de Contato Dental de Porcelana | Doctor&doctor"
        />
        <meta
          property="og:description"
          content="Com as Lentes de Contato Dental de Porcelana é possível recuperar a beleza e a genuinidade do seu sorriso."
        />
        <meta
          property="og:url"
          content="https://esteticadental.doctoredoctor.com.br/lentes-de-porcelana"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://esteticadental.doctoredoctor.com.br/assets/images/og/og-image-lentes-de-porcelana.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://esteticadental.doctoredoctor.com.br/assets/images/og/og-image-lentes-de-porcelana.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
      </Head>

      <main>
        <Hero />
        <About />
        <Procedures />
        <Cases />
        <Testimonials />
        <Faq />
      </main>
    </>
  );
}
