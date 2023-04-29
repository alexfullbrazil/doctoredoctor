import { DataCases } from "@/data/cases/data.cases";
import { CasesItem } from "./cases-item";

export function Cases() {
  return (
    <>
      <section className="cases-wrapper">
        <div className="container">
          <h2 className="section-title">
            <span>Casos de</span> Sucesso!
          </h2>
          <h3>
            Veja alguns casos clínicos que revigoraram a autoestima de nossos
            pacientes e que comprovam a qualidade e resultados únicos em nossos
            procedimentos.
          </h3>

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
