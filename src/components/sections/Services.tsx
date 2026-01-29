import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { services } from '../../data/services';
import { FaLaptopCode, FaShoppingCart, FaRocket, FaChartLine } from 'react-icons/fa';
import { JSX } from 'react';

const iconsMap: { [key: string]: JSX.Element } = {
  'Desarrollo Web': <FaLaptopCode className="text-white w-8 h-8" />,
  'Landing Pages': <FaRocket className="text-white w-8 h-8" />,
  'Ecommerce': <FaShoppingCart className="text-white w-8 h-8" />,
  'Rendimiento & SEO': <FaChartLine className="text-white w-8 h-8" />,
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50 padding-4">
      <Container>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12 padding-4">
          Servicios
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 padding-4">
          {services.map((service) => (
            <Card
              key={service.id}
              hover
              className="padding-4 flex flex-col items-center text-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="padding-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 flex items-center justify-center shadow-lg ">
                {iconsMap[service.title] || null}
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
