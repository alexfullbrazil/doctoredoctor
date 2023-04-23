import Image from "next/image";
import { Cta } from "../cta";
import { Svg } from "afb-react-svg";

export function Procedures() {
  return (
    <section className="procedures-wrapper">
      <div className="procedures-top">
        <h2 className="section-title">
          Conheça as <span>vantagens</span> e <span>indicações</span> de cada
          procedimento.
        </h2>
      </div>
      <div className="procedures-content">
        <h2 className="section-title">
          Facetas <span>Dentais</span>
        </h2>
        <h3>
          A Faceta Dentária é considerada a técnica mais eficaz quando se
          utiliza lâminas de cerâmica para grandes correções na cor, forma e
          harmonia dos dentes com o sorriso.
        </h3>
        <h4>São recomendadas se você quiser resolver:</h4>

        <ul>
          <li>Dentes desgastados pelo Bruxismo</li>
          <li>
            Dentes com múltiplas restaurações mediante à obturações ou cáries
          </li>
          <li>Fechamento de espaços demasiados entre os dentes (diastemas)</li>
          <li>Dentes amarelados</li>
          <li>Dentes escurecidos por bebidas com alto teor de corante</li>
          <li>Dentes escurecidos após tratamento de canal</li>
          <li>Falta de harmonia entre a sequência dental</li>
          <li>Aumento de dentes curtos</li>
          <li>Melhor harmonização do sorriso</li>
        </ul>
      </div>
    </section>
  );
}
