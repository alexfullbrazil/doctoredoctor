import { DataTestimonials } from "@/components/pages/lentes-de-porcelana/testimonials/data.testimonials";
import TestimonialsItem from "./testimonial-item";
import Cta from "@/components/cta";

export default function Testimonials() {
  return (
    <section className="testimonials-wrapper">
      <div className="container">
        <h2 className="section-title">Depoimentos</h2>
        <div className="testimonials-grid">
          {DataTestimonials.map((item, index) => {
            return (
              <TestimonialsItem
                key={index}
                name={item.name}
                avatar={item.avatar}
                content={item.content}
              />
            );
          })}
        </div>
        <Cta
          color={"white"}
          background={"var(--black)"}
          buttonText="Quero falar com um atendente"
        />
      </div>
    </section>
  );
}
