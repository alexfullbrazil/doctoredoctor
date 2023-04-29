import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import ContactUs from "@/components/contact-us";
import { Faq } from "@/components/faq";
import Footer from "@/components/footer";
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
      <ContactUs />
      <Footer />
    </>
  );
}
