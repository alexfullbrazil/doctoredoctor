import { Hero } from "@/components/hero";
import { Inter } from "next/font/google";
import { Svg } from "afb-react-svg";
import { About } from "@/components/about";
import { Accordion } from "@/components/accordion";
import { Procedures } from "@/components/procedures";

export default function EsteticaDental() {
  return (
    <main>
      <Hero />
      <About />
      <Procedures />
      <section className="accordion-wrapper">
        <h2 className="section-title">
          <span>Perguntas</span> Frequentes (FAQ)
        </h2>
        <>
          {Array.from({ length: 10 }, (_, index) => (
            <Accordion
              key={index}
              title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s?"
              content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
            />
          ))}
        </>
      </section>

      <div className="testimonials-wrapper"></div>
    </main>
  );
}
