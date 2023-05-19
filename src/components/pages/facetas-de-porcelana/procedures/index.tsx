import { useState } from "react";
import YoutubeVideo from "@/components/youtube-video";

export default function Procedures() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <section className="procedures-wrapper">
      <div className="procedures-top">
        <h2 className="section-title">
          Conheça as <span>vantagens</span> e <span>indicações</span> das
          Facetas Dentais de Porcelana
        </h2>
      </div>
      <div className="procedures-content">
        <p className="section-description">
          A técnica de Facetas Dentais consiste em preparar cada dente em
          porcelana, pensado unicamente para cada biotipo da pessoa, levando em
          consideração principalmente a cor, formato e tamanho.
        </p>

        {/* <YoutubeVideo url="https://www.youtube.com/embed/rZ0OVBlTdeg?modestbranding=1&rel=0&fs=0&controls=0" />
        <p style={{ lineHeight: "120%" }}>
          <small>
            Neste vídeo apresentamos um caso de Lentes de Contato Dental no
            Conceito <b>Complex Smile</b>. <br /> O Diferencial desta Técnica
            Desenvolvida na <b>Doctor&doctor</b> é que Levamos em Consideração
            Muitos Elementos Simultaneamente no Planejamento do Sorriso. Como
            Forma, Cor, Textura, Brilho, Visagismo, dentre Outros
          </small>
        </p>

        <br /> */}

        <p className="section-sub-title">
          São recomendadas se você quiser resolver:
        </p>
        <ul>
          <li>Mudar a Cor e forma dos dentes</li>
          <li>Fechamento de diastemas (espaços entre os dentes)</li>
          <li>Comprimento dos dentes</li>
          <li>Aumento de volume</li>
          <li>Dentes desgastados</li>
          <li>Dentes fraturados ou quebrados</li>
        </ul>

        <div className={`procedures-content-more ${show ? "show" : ""}`}>
          <hr />
          <p className="section-sub-title">
            O que são Facetas Dentais de Porcelana
          </p>
          <p>
            Se você busca um sorriso radiante e perfeito, as lentes de contato
            dental de porcelana podem ser a solução ideal para você. Elas são
            finas lâminas de porcelana que cobrem a superfície dos dentes,
            corrigindo imperfeições e proporcionando um sorriso natural e
            deslumbrante.
          </p>
          <p>
            As Facetas Dentais de Porcelana são altamente resistentes e
            duráveis, garantindo uma aparência impecável por muitos anos. Além
            disso, elas são altamente resistentes a manchas e descoloração,
            mantendo a aparência branca e radiante do seu sorriso.
          </p>
          <p>
            Uma das grandes vantagens das Facetas Dentais de Porcelana é sua
            capacidade de corrigir imperfeições dentárias, como espaçamentos,
            dentes desalinhados, dentes curtos ou desgastados, manchas e outras
            irregularidades. Elas podem ser utilizadas para mudanças sutis ou
            para transformações mais dramáticas, proporcionando um sorriso
            totalmente personalizado.
          </p>
          <p>
            As Facetas Dentais de Porcelana também são um tratamento minimamente
            invasivo, exigindo pouco ou nenhum desgaste dos dentes naturais.
            Isso significa que você pode obter um sorriso perfeito sem
            sacrificar a saúde dos seus dentes
          </p>
          <hr />
          <p className="section-sub-title">Diferenciais</p>
          <p>
            Na{" "}
            <b>
              Doctor<span>&</span>doctor
            </b>
            , oferecemos muito mais do que tratamentos dentários comuns. Nossa
            clínica é equipada com a mais moderna tecnologia de fluxo digital,
            permitindo a realização de tratamentos precisos e eficientes. Além
            disso, nosso planejamento digital do sorriso garante que você possa
            visualizar o resultado final antes mesmo de iniciar o tratamento,
            para que possa tomar uma decisão informada e confiante.
          </p>
          <p>
            Mas não paramos por aí. Nós nos destacamos por unir os conceitos
            estéticos dentais e de harmonização orofacial para criar sorrisos
            que se harmonizam com o biotipo facial do paciente. Com a ajuda do
            Visagismo Dental, podemos criar sorrisos que expressam temperamentos
            e emoções, proporcionando resultados únicos e personalizados.
          </p>
          <p>
            E se você está procurando por resultados rápidos e eficientes,
            nossos tratamentos agilizados são a escolha ideal. Com nossas
            técnicas inovadoras, podemos transformar seu sorriso em poucas
            consultas, para que você possa exibir um sorriso perfeito o mais
            rápido possível.
          </p>
          <p>
            Na{" "}
            <b>
              Doctor<span>&</span>doctor
            </b>
            , estamos comprometidos em proporcionar a você a melhor experiência
            odontológica possível. Nossa equipe altamente especializada se
            esforça para oferecer um atendimento personalizado e acolhedor desde
            o primeiro contato. Agende sua consulta hoje mesmo e descubra como
            podemos ajudá-lo a alcançar a perfeita sintonia entre estética
            dental e harmonização orofacial, com tratamentos modernos,
            eficientes e altamente personalizados.
          </p>
          <hr />
          <p className="section-sub-title">Para quem são recomendadas</p>
          <p>
            As Facetas Dentais de Porcelana são uma excelente opção para quem
            sofre com dentes amarelados ou escurecidos, pois elas possuem uma
            alta resistência a manchas e podem devolver a cor natural dos dentes
            ou mesmo clareá-los, dependendo da necessidade do paciente.
          </p>
          <p>
            Além disso, as Facetas Dentais de Porcelana também podem corrigir
            problemas como dentes pequenos ou desproporcionais em relação ao
            tamanho do rosto, bem como espaços entre os dentes, dentes tortos ou
            mal posicionados, e até mesmo dentes desgastados por bruxismo.
          </p>
          <p>
            Se você está insatisfeito com o tamanho, forma ou cor dos seus
            dentes, as Facetas Dentais de Porcelana podem ser uma solução eficaz
            e duradoura. Venha nos fazer uma visita e descubra como podemos
            transformar o seu sorriso e aumentar a sua autoestima.
          </p>
        </div>
        <button onClick={() => setShow(!show)}>
          {show ? "<- Voltar" : "Saiba mais ->"}
        </button>
        <hr />
      </div>
    </section>
  );
}
