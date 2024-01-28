import { Image } from "react-bootstrap";
import icono1 from "../assets/img/familia.png";
import icono2 from "../assets/img/empresario.png";
import icono3 from "../assets/img/empresa.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const CartasServicios = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);
  return (
    <div>
      <article className="container text-white">
        <div className="row  text-center my-5">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="col-12 col-md-6 col-lg-4"
          >
            <div>
              <div className=" d-flex align-items-center justify-content-center">
                <Image
                  className="icono-proceso"
                  src={icono1}
                  alt="proceso"
                  fluid
                />
              </div>
              <div className="my-4">
                <h4> PARTICULARES</h4>
                <h5>
                  Coche - Moto - Hogar - Salud - Dental - Decesos - Mascotas -
                  Ahorro e inversión - Móviles y Tablet - Vida - Inquilinos -
                  Seguros de viajes - Responsabilidad Civil
                </h5>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="col-12 col-md-6 col-lg-4"
          >
            <div>
              <div className=" d-flex align-items-center justify-content-center">
                <Image
                  className="icono-proceso"
                  src={icono2}
                  alt="proceso"
                  fluid
                />
              </div>
              <div className="my-4">
                <h4> AUTÓNOMOS</h4>
                <h5>
                  Salud - Responsabilidad Civil - Comercios - Furgonetas -
                  Defensa jurídica - Vida - Retirada de Carnet
                </h5>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="col-12 col-md-6 col-lg-4 "
          >
            <div>
              <div className=" d-flex align-items-center justify-content-center">
                <Image
                  className="icono-proceso"
                  src={icono3}
                  alt="proceso"
                  fluid
                />
              </div>
              <div className="my-4">
                <h4> EMPRESAS </h4>
                <h5>
                  Salud - Caución - Accidentes - Responsabilidad Civil -
                  Transportes- Comercios - Construcción e Ingeniería - Daños
                  Materiales - Agrocaser
                </h5>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CartasServicios;
