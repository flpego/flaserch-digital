import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-slate-50 projects-custom"
    >
      <Container className="max-w-3xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            ¿Listo para tu proyecto?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Transformo ideas en productos
            digitales confiables y funcionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="primary"
              href="https://mail.google.com/mail/?view=cm&to=flaserch@gmail.com"
              className="flex items-center gap-2 px-6 py-3 text-lg a-custom"
            >
              <FaEnvelope /> Enviarme un email
            </Button>

            <Button
              variant="secondary"
              href="https://wa.me/5492615590607"
              className="flex items-center gap-2 px-6 py-3 text-lg"
            >
              <FaWhatsapp /> WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
