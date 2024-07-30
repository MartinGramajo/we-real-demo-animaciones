import { Image } from "react-bootstrap";
import banner from "../assets/img/puerto.jpg";
import bannerCuadrado from "../assets/img/puertoCelular.png";

const BannerNew = () => {
  return (
    <section>
      <div className="contenedor-imagen d-none d-md-block">
        <Image src={banner} fluid alt="React-Bootstrap Image" />
      </div>
      <div className="contenedor-imagen d-md-none d-block">
        <Image src={bannerCuadrado} fluid alt="React-Bootstrap Image" />
      </div>
    </section>
  );
};

export default BannerNew;
