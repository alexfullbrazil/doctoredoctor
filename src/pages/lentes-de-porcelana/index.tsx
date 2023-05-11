import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import ContactUs from "@/components/contact-us";
import { Faq } from "@/components/faq";
import Footer from "@/components/footer";
import LentesDePorcelanaHead from "@/components/heads/lentes-de-porcelana";
import { Hero } from "@/components/hero";
import { Procedures } from "@/components/procedures";
import { Testimonials } from "@/components/testimonials";
import Head from "next/head";
import Script from "next/script";

export default function LentesDePorcelana() {
  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'AW-1070255284', 'auto');
          ga('send', 'pageview');
        `}
      </Script>

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
