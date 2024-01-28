import { Image } from "react-bootstrap";
import logo from "../assets/img/logo-caser.png";
import CartasServicios from "./CartasServicios";
import SegurosDestacados from "./SeguroDestacados";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const CajaServicios = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);

  return (
    <div id="seguros">
      <article className="container text-white">
        <h3 className=" text-center pt-5" style={{ zIndex: 2 }}>
          INNOVAMOS EN LO QUE REALMENTE NECESITAS
        </h3>
        <article data-aos="flip-left" className="d-flex justify-content-center">
          <Image className="my-2" src={logo} alt="banner servicios" fluid />
        </article>
      </article>
      <article>
        <div className="text-center py-5 my-5 bg-azul-situaciones text-white">
          <h1 data-aos="fade-down" className="texto-intermedacion">
            {" "}
            AGENTES EXCLUSIVOS DE CASER SEGUROS
          </h1>
        </div>
      </article>
      <article className="text-center container">
        <h5 data-aos="fade-up" className="text-white">
          Caser es un grupo asegurador que nació hace más de 75 años. Su
          propósito nos une:{" "}
          <b>Ofrecer un producto de valor y un excelente servicio</b> <br />
          En 1942 comenzaron dando cobertura a la Asociación de Agricultores.
          Poco a poco, fueron incorporando productos para particulares y
          empresas. De esta forma, fueron creciendo hasta convertirse en un
          grupo <b>asegurador multirramo</b> y especialista en servicio. <br />
          Procuran conocer en detalle las necesidades de los clientes y
          anticiparse con seguros y servicios innovadores.
        </h5>
      </article>
      <CartasServicios />
      <article>
        <SegurosDestacados />
      </article>
      <article data-aos="fade-up" className="text-center">
        <h3 className="text-white my-5">
          {" "}
          PARA CONOCER SOBRE <b>COMPRA Y ALQUILER</b> PUEDES HACER CLICK EN:
        </h3>
        <article className="d-flex justify-content-center ">
          <div className="btn-enviar d-flex justify-content-center ">
            <a
              className=" text-dark text-decoration-none"
              href="https://www.grupowereal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="">COMPRAR / ALQUILAR</h6>
            </a>
          </div>
        </article>
      </article>
    </div>
  );
};

export default CajaServicios;
