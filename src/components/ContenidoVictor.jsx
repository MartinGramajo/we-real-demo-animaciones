import { Image } from "react-bootstrap";
import victor from "../assets/img/victor.png";
import banner from "../assets/img/banner-equipo.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const ContenidoVictor = () => {
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
          src={victor}
          fluid
          roundedCircle
          alt="Victor Dabat Aracil"
        />
      </div>
      <article className="text-white text-center container">
        <div>
          <h3 data-aos="fade-down" data-aos-delay="0">
            VICTOR DABAT ARACIL{" "}
          </h3>
          <h4 data-aos="fade-down" data-aos-delay="200">
            {" "}
            Asesor Inmobiliario - Ventas
          </h4>
          <h5 data-aos="fade-down" data-aos-delay="400">
            Soy el "benjamín" del equipo y me definiría como una persona alegre,
            extrovertida, inquieta y con muchas ganas de aprender dìa a dìa para
            crecer tanto a nivel personal como profesional. Soy también una
            persona muy familiar, con muy buenas amistades y amante a los
            animales. El bienestar de los mìos y de la gente que quiero es lo
            màs en mi vida. De la misma manera me preocupo por los intereses de
            mis clientes, de su bienestar y de ayudarles de la manera màs
            profesional posible para que puedan llevar a cabo sus proyectos y
            objetivos.
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
              <span className="text-black fs-18-a-14"> +34685531671</span>
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
              <span className="text-black fs-18-a-14"> VICTOR@WEREAL.ES</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoVictor;
