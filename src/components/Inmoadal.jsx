import { Image } from "react-bootstrap";
import inmoadal from "../assets/img/inmoadal-trans.png";
import logo from "../assets/img/logoNav.png";
import { Link } from "react-router-dom";

const Inmoadal = () => {
  return (
    <div className="d-flex justify-content-around text-white bg-azul-situaciones">
      <div>
        {" "}
        <Image
          style={{ width: "200px" }}
          className="py-5"
          src={logo}
          alt="wsp"
          fluid
        />
      </div>
      <div className="py-5">
        <div>
          <Link to="/aviso-legal"> Aviso Legal</Link>
        </div>
        <div>
          <Link to="/politicas-de-privacidad"> Política de Privacidad</Link>
        </div>
        <div>
          <Link to="/compromiso-de-proteccion">
            {" "}
            Compromiso de Protección de Datos{" "}
          </Link>
        </div>
        <div>
          <Link to="/politicas-de-cookies"> Política de Cookies</Link>
        </div>
        <div>
          <a
            href="https://wereal.canales-eticos.com/#/"
            target="_blank"
            rel="noreferrer"
          >
            Canal Ético
          </a>
        </div>
      </div>
      <div>
        {" "}
        <Image
          style={{ width: "200px" }}
          className="py-4"
          src={inmoadal}
          alt="wsp"
          fluid
        />
      </div>
    </div>
  );
};

export default Inmoadal;
