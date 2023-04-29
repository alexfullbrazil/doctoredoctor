import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Procedures } from "@/components/procedures";
import { Testimonials } from "@/components/testimonials";
import { NextSeo } from "next-seo";

export default function LentesDePorcelana() {
  return (
    <>
      <NextSeo
        title="Lentes de Contato Dental de Porcelana | Doctor&doctor"
        description="Com as Lentes de Contato Dental de Porcelana é possível recuperar a beleza e a genuinidade do seu sorriso."
        canonical="https://esteticadental.doctoredoctor.com.br/lentes-de-porcelana"
        openGraph={{
          url: "https://esteticadental.doctoredoctor.com.br/lentes-de-porcelana",
          title: "Lentes de Contato Dental de Porcelana | Doctor&doctor",
          description:
            "Com as Lentes de Contato Dental de Porcelana é possível recuperar a beleza e a genuinidade do seu sorriso.",
          images: [
            {
              url: "https://esteticadental.doctoredoctor.com.br//assets/images/og/og-image-lentes-de-porcelana.jpg",
              width: 1200,
              height: 600,
              alt: "Lentes de Contato Dental de Porcelana | Doctor&doctor",
              type: "image/jpeg",
            },
            {
              url: "https://esteticadental.doctoredoctor.com.br//assets/images/og/og-image-lentes-de-porcelana.jpg",
            },
          ],
          siteName: "Doctor&doctor",
        }}
      />
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
