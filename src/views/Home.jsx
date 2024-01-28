import BannerNew from "../components/BannerNew";
import Caja from "../components/Caja";
import CanalYoutube from "../components/CanalYoutube";
import Cartas from "../components/Cartas";
import DondeEncontrarnos from "../components/DondeEncontrarnos";
import FormContacto from "../components/FormContacto";
import Inmoadal from "../components/Inmoadal";
import QuieroVender from "../components/QuieroVender";
import Situaciones from "../components/Situaciones";
import SliderEquipo from "../components/SliderEquipo";
import Wsp from "../components/Wsp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);
  return (
    <div>
      <BannerNew />
      <QuieroVender />
      <div className="text-center py-5 my-5 bg-azul-situaciones text-white">
        <h1
          data-aos="fade-down"
          data-aos-delay="0"
          className="texto-intermedacion"
        >
          INTERMEDIACIÓN FINANCIERA - HIPOTECAS
        </h1>
      </div>
      <Cartas />
      <Situaciones />
      <Caja />
      <SliderEquipo />
      <DondeEncontrarnos />

      <CanalYoutube />
      <div className="text-center py-5 my-5 bg-azul-situaciones text-white">
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          className="texto-intermedacion"
        >
          CONTACTANOS
        </h1>
      </div>
      <FormContacto />
      <Wsp />
      <Inmoadal />
    </div>
  );
};

export default Home;
