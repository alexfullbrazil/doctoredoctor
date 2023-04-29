import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import { Faq } from "@/components/faq";
import LentesDePorcelanaHead from "@/components/heads/lentes-de-porcelana";
import { Hero } from "@/components/hero";
import { Procedures } from "@/components/procedures";
import { Testimonials } from "@/components/testimonials";

export default function LentesDePorcelana() {
  return (
    <>
      <LentesDePorcelanaHead />
      <Hero />
      <About />
      <Procedures />
      <Cases />
      <Testimonials />
      <Faq />
    </>
  );
}
