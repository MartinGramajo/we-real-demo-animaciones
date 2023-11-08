import { Card, Image } from "react-bootstrap";
import ahorros from "../assets/img/ahorros.png";
import conocimientos from "../assets/img/conocimiento.png";
import financiar from "../assets/img/financiar.png";

export default function Cartas() {
  return (
    <div className="py-5  container animate__animated  animate__backInLeft">
      <div className="cartas  ">
        <Card className="carta cartas-gradiente text-white ">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title className="text-center">
              <Image className="w-50" src={ahorros} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="text-center fs-18 ">
              CON NUESTRO SERVICIO AHORRARAS MUCHO DINERO A LARGO PLAZO
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="carta cartas-gradiente text-white">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title className="text-center">
              <Image
                className="w-50"
                src={conocimientos}
                fluid
                alt="icono okay"
              />
            </Card.Title>
            <Card.Subtitle className="text-center fs-18 ">
              NO TENDRÁS QUE VISITAR DIFERENTES BANCOS PARA BUSCAR OTRAS
              OPCIONES
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="carta cartas-gradiente text-white">
          <Card.Body className="d-flex flex-column justify-content-evenly mx-3">
            <Card.Title className="text-center">
              <Image className="w-50" src={financiar} fluid alt="icono okay" />
            </Card.Title>
            <Card.Subtitle className="text-center fs-18 ">
              TE EDUCAMOS FINANCIERAMENTE
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
