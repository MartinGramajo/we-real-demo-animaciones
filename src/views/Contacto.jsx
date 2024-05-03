import FormContacto from "../components/FormContacto";
import Inmoadal from "../components/Inmoadal";
import QuieroVender from "../components/QuieroVender";

const Contacto = () => {
  return (
    <div>
      <div className="text-center py-5  bg-azul-situaciones text-white">
        <h1 className="texto-intermedacion">CONTACTANOS</h1>
      </div>
      <QuieroVender />
      <FormContacto />
      <Inmoadal />
    </div>
  );
};

export default Contacto;
