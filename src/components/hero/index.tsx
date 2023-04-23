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
            <h1>
              Agora é o seu momento de <span>sorrir com confiança!</span>
            </h1>
            <h2>
              Com Facetas Dentais ou Lentes de Contato é possível recuperar a
              beleza e a genuinidade do seu sorriso.
            </h2>
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
