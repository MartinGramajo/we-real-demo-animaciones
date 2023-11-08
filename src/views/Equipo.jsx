import BtnRegresar from "../components/BtnRegresar";
import ContenidoEquipo from "../components/ContenidoEquipo";
import ImageCarousel from "../components/ImagenCarousel";
import QuieroVender from "../components/QuieroVender";

const Equipo = () => {
  return (
    <div>
      <QuieroVender />
      <ContenidoEquipo />
      <ImageCarousel />
      <div className="my-5 ">
        <BtnRegresar />
      </div>
    </div>
  );
};

export default Equipo;
