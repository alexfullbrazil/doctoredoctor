import { Cta } from "../cta";
import { Svg } from "afb-react-svg";

export function About() {
  return (
    <section className="about-wrapper">
      <div className="about-content">
        <div className="about-logo-grid">
          <div className="about-logo-wrapper">
            <Svg src="logo.svg" width={200} height={79} />
          </div>
          <div className="about-slogan-wrapper">
            <h4>
              A perfeita sintonia entre estética dental e harmonização
              orofacial.
            </h4>
          </div>
        </div>

        <h3>
          Na{" "}
          <b>
            Doctor<span>&</span>doctor
          </b>
          , somos apaixonados por criar sorrisos deslumbrantes e naturais que
          combinam perfeitamente com a harmonização orofacial. Nossa equipe
          altamente especializada é composta por especialistas em estética
          dental e harmonização orofacial, trabalhando juntos para alcançar
          resultados únicos e personalizados para cada paciente. Utilizamos
          métodos inovadores e equipamentos modernos para garantir a mais alta
          qualidade e bem-estar dos nossos pacientes.
          <br />
          <br />
          Nosso diferencial é a combinação única dessas duas especialidades em
          uma abordagem ímpar, que traz resultados surpreendentemente naturais,
          elegantes e joviais. Venha nos conhecer e experimente a perfeita
          sintonia entre estética dental e harmonização orofacial para um
          sorriso saudável e radiante que destaca a sua beleza natural.
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
