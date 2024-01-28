import { Image } from "react-bootstrap";
import josy from "../assets/img/jasy.png";
import banner from "../assets/img/banner-equipo.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const ContenidoJosy = () => {
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
          src={josy}
          alt="JOSY RIBEIRO DA SILVA"
          fluid
          roundedCircle
        />
      </div>
      <article className="text-white text-center container">
        <div>
          <h3 data-aos="fade-down" data-aos-delay="0">
            JOSY RIBEIRO DA SILVA
          </h3>
          <h4 data-aos="fade-down" data-aos-delay="200">
            {" "}
            Coordinadora
          </h4>
          <h5 data-aos="fade-down" data-aos-delay="400">
            En el corazón de WeReal, encontramos a JOSY RIBEIRO DA SILVA , una
            inspiración que nos demuestra que la constancia y la pasión son la
            clave para alcanzar nuestros sueños. Originaria de Brasil, Josy dió
            un gran salto de fé al mudarse a España en busca de un futuro mejor.
            Desde entonces, ha forjado un camino lleno de logros y aprendizajes
            que hoy la convierte en una pieza fundamental de nuestro equipo.
            Josy es una verdadera polifacética, con una amplia gama de
            profesiones y experiencia en su haber. Es la personificación de la
            perseverancia y la dedicación. En WeReal, estamos agradecidos por
            tenerla como coordinadora, y esperamos con ansias lo que el futuro
            le depare a esta talentosa y apasionada profesional.
          </h5>
        </div>
      </article>
      <div className="my-4 container">
        <article data-aos="fade-right" data-aos-delay="600" className=" py-3">
          <div className="d-flex justify-content-center ">
            <a
              href="tel:+34685531671"
              className="p-2 border-0 btn-enviar text-decoration-none text-center"
              size="sm"
              type="submit"
              value="Send"
            >
              <span className="text-black fs-18-a-14"> +34685531671</span>
            </a>
          </div>
        </article>
        <article data-aos="fade-left" data-aos-delay="800" className="  py-3">
          <div className="d-flex justify-content-center ">
            <div
              className="p-2 border-0 btn-enviar text-center"
              size="sm"
              type="submit"
              value="Send"
            >
              <span className="text-black fs-18-a-14"> JOSY@WEREAL.ES</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoJosy;
