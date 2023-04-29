import Image from "next/image";
import { Cta } from "../cta";
import { Svg } from "afb-react-svg";

export function Hero() {
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
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <h1>Lentes de Contato Dental de Porcelana</h1>
            <h2>Agora é o seu momento de sorrir com confiança!</h2>
            <h3>
              Com as <b>Lentes de Contato Dental de Porcelana</b> é possível
              recuperar a beleza e a genuinidade do seu sorriso.
            </h3>
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
