import { Image } from "react-bootstrap";
import monica from "../assets/img/monica.png";
import banner from "../assets/img/banner-equipo.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
const ContenidoMonica = () => {
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
          src={monica}
          fluid
          roundedCircle
        />
      </div>
      <article className="text-white text-center container">
        <div>
          <h3 data-aos="fade-down" data-aos-delay="0">
            MÓNICA PORCHETO VELÀZQUEZ
          </h3>
          <h4 data-aos="fade-down" data-aos-delay="200">
            {" "}
            Asesora Inmobiliaria - Capacitación
          </h4>
          <h5 data-aos="fade-down" data-aos-delay="400">
            Me considero una persona pro-activa y con un alto nivel de
            autoexigencia, esta característica me lleva a querer aprender todos
            los días algo nuevo. Es para mi una satisfacción finalizar mi ida
            habiendo aprendido <b> algo nuevo</b> ya sea en lo personal como en
            lo profesional y cada cosa que aprendo la desarrollo para que roce
            la perfección. Soy una Honesta, valores que traigo de familia, ese
            rasgo ha hecho que transmita confianza por lo que pretendo que
            sientas que puedes confiar en mi y que harè todo lo que estè a mi
            alcance para ayudar a realizar los objetivos.
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
              <span className="text-black fs-18-a-14">+34685531671</span>
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
              <span className="text-black fs-18-a-14"> MONICA@WEREAL.ES</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoMonica;
