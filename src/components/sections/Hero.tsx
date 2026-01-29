import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-blue-50 via-white to-purple-50 pt-24 p-4 hero">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Contenido texto */}
          <div className="">
            {/* Badge */}
            <span className="inline-block mb-4 rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-medium padding-4">
              Desarrollador Web · Flaserch Digital
            </span>

            <h2 className="text-2xl md:text-2xl font-bold text-slate-900 mb-6 leading-tight">
              Hola, soy Flavio Pegoraro<br />
              Creador de{" "}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Flaserch Digital.{" "}
              </span>
              <br />
              Desarrollo sitios web para negocios que quieren{" "}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                crecer
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-8 max-w-xl">
              Ayudo a empresas y emprendedores a transformar ideas en sitios web
              modernos, rápidos y pensados para generar resultados reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#projects" variant="primary" className="a-custom">
                Ver proyectos →
              </Button>
              <Button href="#contact" variant="secondary">
                Contactarme
              </Button>
            </div>
          </div>

          {/* Foto */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25" />
              <img
                src="/assets/images/me.jfif"
                alt="Flavio - Desarrollador Web"
                className="relative w-full max-w-md rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
