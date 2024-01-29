import { Image } from "react-bootstrap";
import banner from "../assets/img/puerto.png";
import { useState } from "react";

const BannerNew = () => {
  return (
    <div className="contenedor-imagen">
      <Image src={banner} fluid alt="React-Bootstrap Image" />
    </div>
  );
};

export default BannerNew;
