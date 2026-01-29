export interface Project {
  id: number;
  name: string;
  client: string;
  description: string;
  technologies: string[];
  result?: string;
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'FakE-Market Ecommerce',
    client: 'Proyecto de portafolio',
    description:
      'Tienda online con catálogo de productos, carrito de compras funcional y sistema de búsqueda y filtros avanzados.',
    technologies: ['React', 'JavaScript', 'CSS', 'API REST'],
    result: 'Interfaz responsiva y optimizada',
    link: 'https://flpego.github.io/fake-ecommerce-react/',
    image: '/assets/images/ecommerce.jpg',
  },
  {
    id: 2,
    name: 'Pokédex API',
    client: 'Proyecto de portafolio',
    description:
      'Aplicación interactiva que consume la API de Pokémon mostrando información detallada de cada Pokémon con búsqueda en tiempo real.',
    technologies: ['React', 'JavaScript', 'PokeAPI', 'CSS'],
    result: 'App con +150 Pokémon',
    link: 'https://flpego.github.io/pokedex-pokeapi/',
    image: '/assets/images/pokedex.jpg',
  },
  {
    id: 3,
    name: 'Gestor de Extensiones',
    client: 'Proyecto de portafolio',
    description:
      'Panel de administración para gestionar extensiones del navegador con funcionalidades de agregar, remover y filtrar extensiones.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Estado Global'],
    result: 'UI moderna e intuitiva',
    link: 'https://extensions-manager-ui.netlify.app/',
    image: '/assets/images/extension-m.jpg',

  },
  {
    id: 4,
    name: 'Lista de Productos',
    client: 'Proyecto de portafolio',
    description:
      'Componente interactivo de lista de productos con carrito de compras, permitiendo agregar/remover items con interfaz fluida.',
    technologies: ['React', 'JavaScript', 'CSS Grid', 'Estado Local'],
    result: 'Gestión de carrito eficiente',
    link: 'https://products-list-with-react.netlify.app/',
    image: '/assets/images/lista-prod.jpg',
  },
  {
    id: 5,
    name: 'RutinasGyM - Plataforma de Fitness',
    client: 'Proyecto de portafolio',
    description:
      'Plataforma de rutinas de gimnasia con sistema de suscripción, articles sobre nutrición y entrenamientos personalizados.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Base de datos'],
    result: 'Plataforma con planes premium',
    link: 'https://rutinas-gym.netlify.app/',
    image: '/assets/images/r-gym.jpg',
  },
  {
    id: 6,
    name: 'Landing Page - Mi Agencia',
    client: 'Proyecto de portafolio',
    description:
      'Landing page profesional para agencia digital con secciones de servicios, precios, testimonios y formulario de contacto.',
    technologies: ['React', 'Tailwind CSS', 'Formularios', 'Email.js'],
    result: 'Diseño responsivo y conversión optimizada',
    link: 'https://simple-landing-page-withreact.netlify.app/',
    image: '/assets/images/mi-agencia.jpg',
  },
  {
    id: 7,
    name: 'Manso San Rafael',
    client: 'Negocio local',
    description:
      'Sitio web informativo para local de comidas rapidas en San Rafael, Mendoza con maps integrado.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Google Maps API'],
    result: 'Visibilidad en buscadores',
    link: 'https://manso-sanrafael.netlify.app/',
    image: '/assets/images/manso-sanrafael.jpg',
  },
];
