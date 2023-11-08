import { Image } from "react-bootstrap";
import banner from "../assets/img/bannerServicios.jpg";

const BannerServicios = () => {
  return (
    <article className="d-flex justify-content-center">
      <Image className="" src={banner} alt="banner servicios" fluid />
    </article>
  );
};

export default BannerServicios;
