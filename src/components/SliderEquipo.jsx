// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import { Image } from "react-bootstrap";
import andres from "../assets/img/andres.png";
import victor from "../assets/img/victor.png";
import monica from "../assets/img/monica.png";
import josy from "../assets/img/jasy.png";
import javier from "../assets/img/ja.png";
import { Link } from "react-router-dom";
import equipo from "../assets/img/equipo.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

export default function SliderEquipo() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);
  return (
    <>
      <div className="text-center text-white mt-5">
        <div className="text-center py-5 my-5 bg-azul-situaciones text-white">
          <h1 data-aos="fade-down" className="texto-intermedacion">
            CONOCE A NUESTRO EQUIPO
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div data-aos="zoom-in" className="slider-content mb-5">
            <Image src={equipo} alt="planificacion" fluid />
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3.4}
        spaceBetween={20}
        className="mySwiper mb-4"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Link to="/Andres-Broullon">
            <Image
              className="py-5 foto-equipo"
              src={andres}
              alt="Andrés Broullón"
              fluid
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Victor-Dabat-Aracil">
            <Image
              className="py-5 foto-equipo"
              src={victor}
              alt="Victor Dabat Aracil"
              fluid
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Monica-Porchetto-Velazquez">
            <Image
              className="py-5 foto-equipo"
              src={monica}
              alt="Mónica Porchetto Velázquez"
              fluid
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Josy-Ribeiro-Da-Silva">
            <Image
              className="py-5 foto-equipo"
              src={josy}
              alt="Josy Ribeiro Da Silva"
              fluid
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Javier-Pastor-Cobos">
            <Image
              className="py-5 foto-equipo"
              src={javier}
              alt="Javier Pastor Cobos"
              fluid
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
