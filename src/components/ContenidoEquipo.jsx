import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import andres from "../assets/img/andres.png";
import victor from "../assets/img/victor.png";
import monica from "../assets/img/monica.png";
import josy from "../assets/img/jasy.png";
import javier from "../assets/img/ja.png";
import presentacion from "../assets/img/presentacion.png";

const ContenidoEquipo = () => {
  return (
    <div className="my-5">
      <article className="container bg-gris py-5">
        <Link className="text-decoration-none " to={"/Andres-Broullon"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={andres}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-white ">
                <h6>
                  Andrés Broullón <span className="ocultar ">Velázquez</span>{" "}
                </h6>
                <Image
                  className="presentacion-pills"
                  src={presentacion}
                  fluid
                />
              </div>
            </div>
          </div>
        </Link>
      </article>
      <article className="container bg-blanco py-5">
        <Link className="text-decoration-none " to={"/Victor-Dabat-Aracil"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={victor}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-black ">
                <h6>Victor Dabat Aracil</h6>
                <Image
                  className="presentacion-pills"
                  src={presentacion}
                  fluid
                />
              </div>
            </div>
          </div>
        </Link>
      </article>
      <article className="container bg-gris py-5">
        <Link
          className="text-decoration-none "
          to={"/Monica-Porchetto-Velazquez"}
        >
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={monica}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-white">
                <h6>Mónica Porchetto Velázquez</h6>
                <Image
                  className="presentacion-pills"
                  src={presentacion}
                  fluid
                />
              </div>
            </div>
          </div>
        </Link>
      </article>
      <article className="container bg-blanco py-5">
        <Link className="text-decoration-none " to={"/Josy-Ribeiro-Da-Silva"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={josy}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-black">
                <h6>Josy Ribeiro Da Silva</h6>
                <Image
                  className="presentacion-pills"
                  src={presentacion}
                  fluid
                />
              </div>
            </div>
          </div>
        </Link>
      </article>
      <article className="container bg-gris py-5">
        <Link className="text-decoration-none " to={"/Javier-Pastor-Cobos"}>
          <div className="d-flex">
            <Image
              className="icono-equipo mx-4"
              src={javier}
              fluid
              roundedCircle
            />
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-white ">
                <h6>Javier Pastor Cobos</h6>
                <Image
                  className="presentacion-pills"
                  src={presentacion}
                  fluid
                />
              </div>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default ContenidoEquipo;
