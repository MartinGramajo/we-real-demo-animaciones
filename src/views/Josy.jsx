import BtnRegresar from "../components/BtnRegresar";
import ContenidoJosy from "../components/ContenidoJosy";
import Inmoadal from "../components/Inmoadal";

const Josy = () => {
  return (
    <section>
      <ContenidoJosy />
      <div className="mb-5">
        <BtnRegresar />
      </div>
      <Inmoadal />
    </section>
  );
};

export default Josy;
