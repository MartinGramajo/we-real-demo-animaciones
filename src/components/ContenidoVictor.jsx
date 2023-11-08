import { Image } from "react-bootstrap";
import victor from "../assets/img/victor.png";
import banner from "../assets/img/banner-equipo.jpg";

const ContenidoVictor = () => {
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
          <h3>VICTOR DABAT ARACIL </h3>
          <h4> Asesor Inmobiliario - Ventas</h4>
          <h5>
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
        <article className=" py-3">
          <div className="d-flex justify-content-center ">
            <a
              href="tel:+34685531671"
              className="p-2 border-0 btn-enviar text-decoration-none text-center"
              size="sm"
              type="submit"
              value="Send"
            >
              <span className="text-black h5"> +34685531671</span>
            </a>
          </div>
        </article>
        <article className="  py-3">
          <div className="d-flex justify-content-center ">
            <div
              className="p-2 border-0 btn-enviar text-center"
              size="sm"
              type="submit"
              value="Send"
            >
              <span className="text-black h5"> VICTOR@WEREAL.ES</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoVictor;
