import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Projects } from '../components/sections/Projects';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
    </div>
  );
}
