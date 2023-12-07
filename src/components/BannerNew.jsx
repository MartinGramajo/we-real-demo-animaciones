import { Image } from "react-bootstrap";
import banner from "../assets/img/puerto.png";

const BannerNew = () => {
  return (
    <div className="contenedor-imagen">
      <Image src={banner} fluid alt="React-Bootstrap Image" />
      {/* <div className="overlay">
        <div className="text">
          <h6 className="texto-banner">
            Make It <br /> Happen{" "}
          </h6>
          <p className="sub-texto-banner">Encuentra Tu Hogar</p>
        </div>
      </div> */}
    </div>
  );
};

export default BannerNew;
