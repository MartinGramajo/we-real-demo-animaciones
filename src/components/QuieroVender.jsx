import { Image } from "react-bootstrap";
import { useState } from "react";
import quiero from "../assets/img/quiero-vender.png";
import { Link } from "react-router-dom";

export default function QuieroVender() {
  const [navbarPosition, setNavbarPosition] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 450) {
      setNavbarPosition(true);
    } else {
      setNavbarPosition(false);
    }
    // console.log(window.scrollY); //Para ver en el medidor de scroll
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className="d-flex justify-content-center">
      <div className="navbar-bordes">
        <Link className="" to="/contacto">
          <Image
            className={
              navbarPosition
                ? "icono-reserva fixed-top ms-auto margen-reserva me-2"
                : "icono-reserva fixed-top ms-auto me-2 margen-reserva2"
            }
            src={quiero}
            alt="quiero vender"
            fluid
          />
        </Link>
      </div>
    </div>
  );
}
