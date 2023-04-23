import Image from "next/image";
import { Cta } from "../cta";
import { Svg } from "afb-react-svg";

export function About() {
  return (
    <section className="about-wrapper">
      <div className="about-content">
        <Svg src="logo.svg" />

        <h3>
          A{" "}
          <b>
            Doctor<span>&</span>doctor
          </b>{" "}
          é uma clínica odontológica especializada em estética dental,
          oferecendo métodos inovadores e equipamentos modernos para alta
          qualidade e bem-estar dos pacientes. Nossa equipe altamente
          especializada se esforça para proporcionar um atendimento
          personalizado e acolhedor desde o primeiro contato. Venha nos conhecer
          e desfrute de um sorriso saudável e radiante.
        </h3>
        <h2>
          Venha nos conhecer e desfrute de um sorriso saudável e radiante.
        </h2>
        <Cta
          buttonText={"Agende agora sua consulta"}
          color={"white"}
          background={"var(--black)"}
        />
      </div>
    </section>
  );
}
