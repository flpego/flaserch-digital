import { Container } from './Container';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/logos/logo-fs.png" 
              alt="flaserch.digital" 
              className="h-14 w-auto"
            />
            <span className="text-xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Flaserch Digital
            </span>
          </div>
          <ul className="hidden md:flex gap-8 text-gray-600">
            <li>
              <a href="#services" className="hover:text-blue-600 transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 transition">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-blue-600 transition">
                Proceso
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
