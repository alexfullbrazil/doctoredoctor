import Head from "next/head";
import { Svg } from "afb-react-svg";
import Footer from "@/components/footer";
import Image from "next/image";

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
      <main className="home-wrapper">
        <div className="about-logo-grid">
          <div className="about-logo-wrapper">
            <Svg src="logo.svg" />
          </div>
          <div className="about-slogan-wrapper">
            <p className="about-slogan" style={{ color: "var(--black)" }}>
              A perfeita sintonia entre estética dental e harmonização
              orofacial.
            </p>
          </div>
        </div>
        <Image
          src={"/assets/images/dr-saint-clair.jpg"}
          width={640}
          height={700}
          alt={"Dr. Saint Clair"}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: 480,
            borderRadius: 20,
          }}
          priority
        />
        <hr />
        <Footer />
      </main>
    </>
  );
}
