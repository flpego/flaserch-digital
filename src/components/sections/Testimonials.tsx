import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <Container>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          Lo que dicen mis clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <p className="text-slate-600 mb-4">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-slate-200">
                <p className="font-semibold text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
