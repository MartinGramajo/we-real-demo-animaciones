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
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import CookieModal from "../components/CookieModal";
import CookieConfigModal from "../components/CookieConfigModal";
import TablaProteccionDatos from "../components/TablaProteccionDatos";
import { Button } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);

  const [showConfig, setShowConfig] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/BasesyCondiciones.pdf`; // Reemplaza con el nombre de tu archivo PDF
    link.download = "BasesyCondiciones.pdf"; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div>
        <CookieModal onConfigure={() => setShowConfig(!showConfig)} />
        {showConfig && (
          <CookieConfigModal onClose={() => setShowConfig(false)} />
        )}
      </div>
      <BannerNew />
      <QuieroVender />
      <div className="text-center py-5 my-5 bg-azul-situaciones text-white">
        <article
          data-aos="fade-down"
          data-aos-delay="0"
          className="texto-intermedacion"
        >
          <Button className="btn-descargar" onClick={handleDownload}>
            Descarga aquí las bases y condiciones
          </Button>
        </article>
      </div>
      <Cartas />
      <Situaciones />
      {/* <Caja /> */}
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
      {/* <section className="container">
        <article className="row">
          <div className="col-lg-6 col-12">
            <TablaProteccionDatos />
          </div>
          <div className="col-lg-6 col-12">
            <FormContacto />
          </div>
        </article>
      </section> */}
      <section className="container">
        <article className="d-flex justify-content-center">
          <div className="">
            <FormContacto />
          </div>
        </article>
      </section>
      <Wsp />
      <Inmoadal />
    </div>
  );
};

export default Home;
