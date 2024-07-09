import About from "@/components/pages/shared/about"
import Cases from "@/components/pages/lentes-de-porcelana/cases"
import ContactUs from "@/components/pages/shared/contact-us"
import Faq from "@/components/pages/lentes-de-porcelana/faq"
import Footer from "@/components/pages/shared/footer"
import Head from "@/components/pages/lentes-de-porcelana/head"
import Hero from "@/components/pages/lentes-de-porcelana/hero"
import Procedures from "@/components/pages/lentes-de-porcelana/procedures"
import Testimonials from "@/components/pages/lentes-de-porcelana/testimonials"
import Script from "next/script"

export default function LentesDePorcelana() {
  return (
    <>
      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'AW-1070255284', 'auto');
          ga('send', 'pageview');
        `}
      </Script> */}

      <Head />
      <Hero />
      <About />
      <Procedures />
      <Cases />
      <Testimonials />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  )
}
