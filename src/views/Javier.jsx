import BtnRegresar from "../components/BtnRegresar";
import ContenidoJavier from "../components/ContenidoJavier";
import Inmoadal from "../components/Inmoadal";

const Javier = () => {
  return (
    <section>
      <ContenidoJavier />
      <div className="mb-5">
        <BtnRegresar />
      </div>
      <Inmoadal />
    </section>
  );
};

export default Javier;
