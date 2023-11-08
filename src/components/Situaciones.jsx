import { Image } from "react-bootstrap";
import etiqueta from "../assets/img/etiqueta.png";

const Situaciones = () => {
  return (
    <div className="bg-azul-situaciones mb-4 ">
      <div className="container text-white">
        <div>
          <div className="py-5 mb-4 text-center">
            <h2>Situaciones en las que posiblemente te encuentres:</h2>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 pb-5">
              <article className="d-flex">
                <div className="me-3">
                  <Image
                    style={{ width: "50px" }}
                    src={etiqueta}
                    alt="caja"
                    fluid
                  />
                </div>
                <div>
                  <h5>
                    - Quieres comprar una vivienda de forma particular a otra
                    inmobiliaria. <br />- El tipo de producto que ofrecen en tu
                    entidad no te sirve. <br />
                    - Tienes las condiciones pero no sabes como hacerlo. <br />
                    - No tienes tiempo para ver la mejor opción para ti. <br />
                    - Tienes en mente una vivienda, pero no quieres reservar
                    porque no sabes si te darán el préstamo. <br />
                  </h5>

                  <hr
                    style={{
                      width: "100%",
                      color: "white",
                      marginTop: "50px",
                    }}
                  />
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-6 pb-5">
              <article className="d-flex">
                <div className="me-3">
                  <Image
                    style={{ width: "50px" }}
                    src={etiqueta}
                    alt="caja"
                    fluid
                  />
                </div>
                <div>
                  <h5>
                    En todas estas situaciones, queremos que cuentes con
                    nosotros,
                    <br />
                    porque podemos ayudarte con nuestro servicio de{" "}
                    <b>PLAN CREAR</b>. Además, si quieres comprar la vivienda
                    con nosotros tenemos <br />
                    una amplia variedad de opciones. Puedes reservar <br />
                    la vivienda que te gusta y si por alguna razón, las opciones
                    <br /> que encontramos para tu hipoteca no te sirven, no te
                    preocupes <br />
                    <span className="texto-reserva">
                      {" "}
                      ¡No pierdes la reserva!{" "}
                    </span>
                  </h5>

                  <hr
                    style={{
                      width: "100%",
                      color: "white",
                      marginTop: "50px",
                    }}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Situaciones;
