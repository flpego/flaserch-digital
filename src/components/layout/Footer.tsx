import { Container } from "./Container";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white projects-custom">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/logos/logo-fs.png"
                alt="flaserch.digital"
                className="h-14 w-auto"
              />
              <span className="text-lg font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Flaserch Digital
              </span>
            </div>
            <p className="text-gray-400">
              Desarrollo web profesional para empresas y emprendedores.
            </p>
          </div>

          {/* Enlaces internos */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto directo */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=flaserch@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                  <FaEnvelope /> Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5492615590607"
                  className="flex items-center gap-2 hover:text-green-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/flavio-pegoraro-dev/"
                  className="flex items-center gap-2 hover:text-blue-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/flpego"
                  className="flex items-center gap-2 hover:text-gray-200 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          &copy; {currentYear} Flaserch Digital. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
