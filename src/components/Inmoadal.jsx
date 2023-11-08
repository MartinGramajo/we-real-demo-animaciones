import { Image } from "react-bootstrap";
import inmoadal from "../assets/img/inmoadal-trans.png";

const Inmoadal = () => {
  return (
    <div className="d-flex justify-content-center text-white bg-white">
      <Image
        style={{ width: "200px" }}
        className="py-4"
        src={inmoadal}
        alt="wsp"
        fluid
      />
    </div>
  );
};

export default Inmoadal;
