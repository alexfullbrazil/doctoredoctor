import Image from "next/image";
import Cta from "../../../cta";
import { Svg } from "afb-react-svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="hero-image-wrapper">
          <div className="hero-logo-wrapper">
            <Svg src="logo.svg" />
          </div>
          <Image
            src={"/assets/images/dr-saint-clair.jpg"}
            width={640}
            height={700}
            alt={"Dr. Saint Clair"}
            priority
          />
          <div className="hero-image-description">
            <small>Dr. Saint Clair B. Netto - Crosp: 39163</small>
          </div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            {/* <div className="home-navigation">
              <Link href="/lentes-de-porcelana">Lentes de Porcelana</Link>
              <Link href="/facetas-de-porcelana">Facetas de Porcelana</Link>
            </div> */}
            <p className="hero-sub-title">
              Agora é o seu momento de sorrir com confiança!
            </p>
            <p className="hero-description">
              <b>
                A perfeita sintonia entre estética dental e harmonização
                orofacial.
              </b>
            </p>
            <Cta
              buttonText={"Agende agora sua consulta"}
              color={"white"}
              background={"var(--black)"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
