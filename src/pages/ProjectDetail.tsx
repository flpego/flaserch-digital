import { Container } from '../components/layout/Container';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Container className="py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Proyecto no encontrado
          </h1>
          <Button href="/">Volver a proyectos</Button>
        </div>
      </Container>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      <Container className="max-w-3xl">
        <Button href="/projects" variant="secondary" className="mb-8">
          ← Volver
        </Button>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {project.name}
        </h1>
        <p className="text-xl text-gray-500 mb-8">{project.client}</p>
        
        <div className="bg-gray-200 h-96 rounded mb-8 flex items-center justify-center">
          <span className="text-gray-400">Imagen del proyecto</span>
        </div>
        
        <div className="prose max-w-none">
          <h2>Sobre el proyecto</h2>
          <p>{project.description}</p>
          
          <h2>Tecnologías utilizadas</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          
          {project.result && (
            <>
              <h2>Resultados</h2>
              <p className="text-lg font-semibold text-blue-600">
                📊 {project.result}
              </p>
            </>
          )}
          
          <div className="mt-8">
            <Button variant="primary">Solicitar presupuesto</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
