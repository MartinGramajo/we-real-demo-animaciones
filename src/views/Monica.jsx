import BtnRegresar from "../components/BtnRegresar";
import ContenidoMonica from "../components/ContenidoMonica";
import Inmoadal from "../components/Inmoadal";

const Monica = () => {
  return (
    <div>
      <ContenidoMonica />
      <div className="mb-5">
        <BtnRegresar />
      </div>
      <Inmoadal />
    </div>
  );
};

export default Monica;
