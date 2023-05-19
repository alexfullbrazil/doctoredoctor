import { DataFaq } from "./data.faq";
import Accordion from "@/components/accordion";

export default function Faq() {
  return (
    <section className="faq-wrapper">
      <div className="container">
        <h2 className="section-title">
          <span>Perguntas</span> Frequentes (FAQ)
        </h2>
        <>
          {DataFaq.map((item, index) => {
            return (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </>
      </div>
    </section>
  );
}
