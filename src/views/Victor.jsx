import BtnRegresar from "../components/BtnRegresar";
import ContenidoVictor from "../components/ContenidoVictor";
import Inmoadal from "../components/Inmoadal";

const Victor = () => {
  return (
    <section>
      <ContenidoVictor />
      <div className="mb-5">
        <BtnRegresar />
      </div>
      <Inmoadal />
    </section>
  );
};

export default Victor;
