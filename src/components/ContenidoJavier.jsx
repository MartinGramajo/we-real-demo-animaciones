import { Image } from "react-bootstrap";
import javier from "../assets/img/ja.png";
import banner from "../assets/img/banner-equipo.jpg";

const ContenidoJavier = () => {
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
          src={javier}
          fluid
          roundedCircle
          alt="Javier Pastor Cobos"
        />
      </div>
      <article className="text-white text-center container">
        <div>
          <h3>JAVIER PASTOR COBOS</h3>
          <h4> Asesor Inmobiliario - Ventas</h4>
          <h5 className="py-5">
            ¿Cuál es su secreto para el éxito? ¡El aprendizaje constante y la
            curiosidad que lo impulsan a superarse cada día! Javier es un
            orgulloso asociado de INMOADAL, y también un agente de seguros de
            Caser. Como miembro de API, está más que preparado para ofrecerle un
            servicio de primer nivel. Pero su historia no termina allí... Desde
            sus inicios, Javier ha navegado por las aguas turbulentas del
            mercado inmobiliario y ha aprendido que la honestidad y la
            excelencia son las claves para superar cualquier desafío.
            Especializado en la captación de inmuebles exclusivos desde el
            principio, Javier es un apasionado de la diversidad que ofrece el
            mundo inmobiliario. Además, su amabilidad y empatía son sus
            principales herramientas para construir relaciones sólidas con sus
            clientes
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
              <span className="text-black h5">+34685531671</span>
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
              <span className="text-black h5"> JAVIER@WEREAL.ES</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContenidoJavier;
