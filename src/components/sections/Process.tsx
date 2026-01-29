import { Container } from '../layout/Container';
import { Card } from '../ui/Card';

export function Process() {
  const steps = [
    {
      number: 1,
      title: 'Consulta',
      description: 'Hablamos sobre tu negocio, objetivos y necesidades.',
    },
    {
      number: 2,
      title: 'Propuesta',
      description: 'Te presento un plan claro con timeline y presupuesto.',
    },
    {
      number: 3,
      title: 'Desarrollo',
      description: 'Construyo tu sitio con tecnología moderna y escalable.',
    },
    {
      number: 4,
      title: 'Lanzamiento',
      description: 'Desplegamos y optimizamos para buscadores.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-slate-50 projects-custom">
      <Container>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12 projects-custom">
          Mi Proceso de Trabajo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              hover
              className="padding-4 flex flex-col items-center text-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Número dentro de círculo */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-2xl shadow-lg">
                {step.number}
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{step.title}</h3>

              {/* Descripción */}
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
