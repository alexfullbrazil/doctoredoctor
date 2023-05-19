import { DataCases } from "@/components/pages/lentes-de-porcelana/cases/data.cases";
import CasesItem from "./cases-item";

export default function Cases() {
  return (
    <>
      <section className="cases-wrapper">
        <div className="container">
          <h2 className="section-title">
            <span>Casos de</span> Sucesso!
          </h2>
          <p className="section-sub-title">
            Veja alguns casos clínicos que revigoraram a autoestima de nossos
            pacientes e que comprovam a qualidade e resultados únicos em nossos
            procedimentos.
          </p>

          {DataCases.map((item, index) => {
            return (
              <CasesItem
                key={index}
                imageBefore={item.imageBefore}
                imageAfter={item.imageAfter}
                excerpt={item.excerpt}
                content={item.content}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
