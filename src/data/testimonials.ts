export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Flavio transformó nuestra idea en una tienda online que realmente vende. Profesional y muy atento a los detalles.',
    author: 'María García',
    role: 'Propietaria de tienda de indumentaria',
  },
  {
    id: 2,
    text: 'El sitio que nos desarrolló es rápido, hermoso y nuestros clientes lo aman. Totalmente recomendado.',
    author: 'Carlos López',
    role: 'CEO de consultoría',
  },
  {
    id: 3,
    text: 'No solo creó un sitio web, entiende el negocio y piensa en resultados. Así es como debe ser.',
    author: 'Ana Martínez',
    role: 'Fundadora de startup',
  },
];
