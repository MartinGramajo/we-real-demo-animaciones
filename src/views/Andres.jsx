import BtnRegresar from "../components/BtnRegresar";
import ContenidoAndres from "../components/ContenidoAndres";
import Inmoadal from "../components/Inmoadal";

const Andres = () => {
  return (
    <section>
      <ContenidoAndres />
      <div className="mb-5">
        <BtnRegresar />
      </div>
      <Inmoadal />
    </section>
  );
};

export default Andres;
