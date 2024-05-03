import BtnRegresar from "../components/BtnRegresar";
import CajaServicios from "../components/CajaServicios";
import ContenidoServicios from "../components/ContenidoServicios";
import Inmoadal from "../components/Inmoadal";
import QuieroVender from "../components/QuieroVender";
import Wsp from "../components/Wsp";

const Servicios = () => {
  return (
    <div>
      <QuieroVender />
      <ContenidoServicios />
      <CajaServicios />
      <BtnRegresar />
      <Wsp />
      <Inmoadal />
    </div>
  );
};

export default Servicios;
