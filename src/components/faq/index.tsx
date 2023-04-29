import { DataFaqPorcelana } from "@/data/faq/data.faq.porcelana";
import { Accordion } from "@/components/accordion";

export function Faq() {
  return (
    <section className="faq-wrapper">
      <div className="container">
        <h2 className="section-title">
          <span>Perguntas</span> Frequentes (FAQ)
        </h2>
        <>
          {DataFaqPorcelana.map((item, index) => {
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
