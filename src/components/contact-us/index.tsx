import { Cta } from "../cta";

export default function ContactUs() {
  return (
    <div className="contact-us-wrapper">
      <div className="container">
        <h2 className="section-title">
          <span>Fale</span> Conosco
        </h2>
        <p>
          A nossa equipe retornará rapidamente o seu contato paraesclarecer
          todas as suas dúvidas relacionadas aos procedimentos e possibilidades
          de pagamento. Preencha o formulário para que possamos te conhecer
          melhor.
        </p>
        <Cta
          buttonText="Agende agora sua consulta"
          color={"white"}
          background={"var(--black)"}
        />
      </div>
    </div>
  );
}
