import { Container } from '../components/layout/Container';
import { projects } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export function Projects() {
  return (
    <div className="min-h-screen pt-20">
      <Container>
        <h1 className="text-5xl font-bold text-gray-900 mb-12">Mis Proyectos</h1>
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-gray-200 pb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-500 mb-4">{project.client}</p>
              <div className="bg-gray-200 h-64 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-400">Imagen del proyecto</span>
              </div>
              <p className="text-lg text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              {project.result && (
                <p className="text-lg font-semibold text-blue-600 mb-6">
                  📊 {project.result}
                </p>
              )}
              <Button variant="primary">Ver proyecto →</Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
