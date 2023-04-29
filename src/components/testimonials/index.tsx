import { DataTestimonials } from "@/data/testimonials/data.testimonials";
import { TestimonialsItem } from "./testimonial-item";

export function Testimonials() {
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
      </div>
    </section>
  );
}
