import { Image } from "react-bootstrap";
import wsp from "../assets/svg/wasa.svg";

const Wsp = () => {
  return (
    <div className="d-flex justify-content-center text-white py-5">
      <a
        className="text-decoration-none"
        href="https://wa.link/v22wuj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="" src={wsp} alt="wsp" fluid />
      </a>
    </div>
  );
};

export default Wsp;
