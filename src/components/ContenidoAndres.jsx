import { Image } from "react-bootstrap";
import andres from "../assets/img/andres.png";
import banner from "../assets/img/banner-equipo.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const ContenidoAndres = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="banner-content">
          <Image className="" src={banner} alt="banner" fluid />
        </div>
      </div>
      <div className="text-center ">
        <Image
          className="icono-perfil icono-perfil-margin "
          src={andres}
          fluid
          roundedCircle
        />
      </div>
      <article className="text-white text-center container">
        <div>
          <h3 data-aos="fade-down" data-aos-delay="0">
            ANDRÉS BROULLÓN
          </h3>
          <h4 data-aos="fade-down" data-aos-delay="200">
            {" "}
            Fundador
          </h4>
          <h5 data-aos="fade-down" data-aos-delay="400" className="py-5">
            Soy una persona dinámica, empática, profesional y muy trabajadora, y
            sobre todo siempre con una sonrisa para ofrecer. También me
            considero altamente exigente, trabajando codo a codo con nuestro
            equipo de trabajo, para contagiar esta dinámica del inconformismo y
            conseguir los mejores resultados posibles. Busco mantenerme
            constantemente actualizado y expandir mis horizontes personales y
            profesionales, compartiendo cada detalle, lo que asegura que nuestro
            equipo siempre esté a la vanguardia.
          </h5>
        </div>
      </article>
      <div className="my-4 container">
        <article data-aos="fade-up" data-aos-delay="600" className=" py-3">
          <div className="d-flex justify-content-center ">
            <a
              href="tel:+34685531671"
              className="p-2 border-0 btn-enviar text-decoration-none text-center"
              size="sm"
              type="submit"
              value="Send"
            >
              <span className="text-black fs-18-a-14 "> +34685531671</span>
            </a>
          </div>
        </article>
        <article data-aos="fade-up" data-aos-delay="800" className="  py-3">
          <div className="d-flex justify-content-center ">
            <div
              className="p-2 border-0 btn-enviar text-center"
              size="sm"
              type="submit"
              value="Send"
            >
              <span className="text-black fs-18-a-14 "> ANDRES@WEREAL.ES</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoAndres;
