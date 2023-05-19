import Image from "next/image";
import Cta from "../../../cta";
import { Svg } from "afb-react-svg";

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
            <h1 className="hero-title">
              Lentes de Contato Dental de Porcelana
            </h1>
            <p className="hero-sub-title">
              Agora é o seu momento de sorrir com confiança!
            </p>
            <p className="hero-description">
              Com as <b>Lentes de Contato Dental de Porcelana</b> é possível
              recuperar a beleza e a genuinidade do seu sorriso.
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
