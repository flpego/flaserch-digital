import { Container } from "../layout/Container";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { projects } from "../../data/projects";
import {
  FaBuilding,
  FaLaptopCode,
  FaChartLine,
  FaExternalLinkAlt,
} from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white projects-custom ">
      <Container>
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12 projects-custom ">
          Proyectos
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Card key={project.id} hover className="flex flex-col">
              {/* Imagen */}
              <div className="mb-6 overflow-hidden rounded-xl h-56 bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <span className="text-slate-400">Imagen del proyecto</span>
                )}
              </div>

              {/* Nombre y cliente */}
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                {project.name}
              </h3>
              <div className="text-sm font-medium text-blue-600 mb-4 flex items-center gap-2">
                <FaBuilding /> {project.client}
              </div>

              {/* Descripción */}
              <p className="text-slate-600 mb-6 grow leading-relaxed">
                {project.description}
              </p>

              {/* Divisor */}
              <div className="h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-6"></div>

              {/* Tecnologías */}
              <div className="mb-8 px-4 py-2 bg-slate-50 rounded-lg">
                <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <FaLaptopCode className="text-blue-500" /> Tecnologías
                </p>
                <div className="flex flex-wrap gap-3 padding-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Resultado */}
              {project.result && (
                <div className="mb-8 px-4 py-2 bg-green-50 rounded-lg border border-green-200 flex items-center gap-2">
                  <FaChartLine className="text-green-600" />
                  <span className="text-green-800 font-semibold text-sm padding-4">
                    {project.result}
                  </span>
                </div>
              )}

              {/* CTA */}
              {project.link && (
                <div className="mt-auto ">
                  <Button
                    variant="primary"
                    href={project.link}
                    className="w-full text-center flex items-center justify-center gap-2 px-4 py-3 text-lg a-custom"
                  >
                    Ver proyecto <FaExternalLinkAlt className="inline-block" />
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
