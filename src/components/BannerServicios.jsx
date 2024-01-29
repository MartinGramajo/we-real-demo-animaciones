import { Image } from "react-bootstrap";
import banner from "../assets/img/bannerServicios.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const BannerServicios = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);

  return (
    <article
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="d-flex justify-content-center"
    >
      <Image className="" src={banner} alt="banner servicios" fluid />
    </article>
  );
};

export default BannerServicios;
