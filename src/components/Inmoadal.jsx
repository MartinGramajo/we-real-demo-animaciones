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
          <Link to="/aviso-legal" className="text-white">
            {" "}
            AVISO LEGAL
          </Link>
        </div>
        <div>
          <Link to="/politicas-de-privacidad">POLÍTICA DE PRIVACIDAD</Link>
        </div>
        <div>
          <Link to="/compromiso-de-proteccion">
            {" "}
            COMPROMISO DE PROTECCIÓN DE DATOS{" "}
          </Link>
        </div>
        <div>
          <Link to="/politicas-de-cookies"> POLÍTICA DE COOKIES</Link>
        </div>
        <div>
          <a
            href="https://wereal.canales-eticos.com/#/"
            target="_blank"
            rel="noreferrer"
          >
            CANAL ÉTICO
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
