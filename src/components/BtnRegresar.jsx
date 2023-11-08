import { Link } from "react-router-dom";

const BtnRegresar = () => {
  return (
    <div className="text-center mt-5 ">
      <Link className="text-white text-decoration-none" to="/">
        <h4 className="my-2 ">{"<< Regresar al Home"}</h4>
      </Link>
    </div>
  );
};

export default BtnRegresar;
