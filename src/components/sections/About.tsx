import { Container } from "../layout/Container";

export function About() {
  return (
    <section id="about" className="p-6 bg-slate-50">
      <Container className="max-w-3xl m-8">
        <div className="flex flex-col items-center mb-8 gap-4">
          <h4 className="text-2xl font-bold text-slate-900">Si quieres impulsar tu negocio de manera digital</h4>
          <p><span className="font-bold flex justify-center span-text-shadow">
              Bienvenido a Flaserch Digital.
            </span></p>
          <img
            src="/assets/logos/logo-fs.png"
            alt="Flaserch Digital"
            className="h-60 w-60 rounded-md "
          />
        </div>

        <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
          <p className="">
            
            <hr />
            Trabajo con negocios y emprendedores que necesitan una presencia
            online profesional, clara y efectiva.
          </p>

          <p>
            Me especializo en diseñar y desarrollar sitios web modernos,
            enfocados en rendimiento, experiencia de usuario y conversión. No
            hago sitios “bonitos solamente”: construyo herramientas que
            funcionan.
          </p>

          <p>
            Utilizo tecnologías actuales como React, TypeScript y Tailwind CSS,
            cuidando tanto el código como el resultado final que ve el cliente.
          </p>
        </div>
      </Container>
    </section>
  );
}
