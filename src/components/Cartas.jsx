import { Card, Image } from "react-bootstrap";
import ahorros from "../assets/img/ahorros.png";
import conocimientos from "../assets/img/conocimiento.png";
import financiar from "../assets/img/financiar.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import venga from "../assets/img/Venga.png";
import venda from "../assets/img/Venda.png";
import navegue from "../assets/img/Navegue.png";

export default function Cartas() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);

  return (
    <div className="py-5  container animate__animated  animate__backInLeft">
      <div className="cartas  ">
        <Card
          data-aos="zoom-in"
          data-aos-delay="0"
          className="carta cartas-gradiente text-white "
        >
          <Image className="w-100" src={venga} fluid alt="icono okay" />
        </Card>
        <Card
          data-aos="zoom-in"
          data-aos-delay="200"
          className="carta cartas-gradiente text-white"
        >
          <Image className="w-100" src={venda} fluid alt="icono okay" />
        </Card>
        <Card
          data-aos="zoom-in"
          data-aos-delay="400"
          className="carta cartas-gradiente text-white"
        >
          <Image className="w-100" src={navegue} fluid alt="icono okay" />
        </Card>
      </div>
    </div>
  );
}
