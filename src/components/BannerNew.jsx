import { Image } from "react-bootstrap";
import banner from "../assets/img/puerto.png";
import { useState } from "react";

const BannerNew = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="contenedor-imagen">
      {/* {loading && (
        <div
          className="d-flex justify-content-center align-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <Spinner animation="border" role="status"></Spinner>
        </div>
      )} */}
      <Image
        src={banner}
        fluid
        alt="React-Bootstrap Image"
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
};

export default BannerNew;
