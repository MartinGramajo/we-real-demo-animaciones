import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { Image } from "react-bootstrap";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";
import banner4 from "../assets/img/banner4.png";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-content">
            <p className="fs-55">
              INTERMEDIACIÓN <br /> FINANCIERA
            </p>
            <Image className="w-100" src={banner1} alt="banner 1 " fluid />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <p className="fs-55 ">
              ¿ESTÁS CANSADO DE NO <br /> PODER AHORRAR PARA <br /> TENER LA
              VIVIENDA QUE DESEAS?
            </p>
            <Image className="w-100" src={banner2} alt="banner 2 " fluid />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <p className="fs-55">
              SABES QUE <br /> TE MERECES ALGO MÁS...{" "}
            </p>
            <Image className="w-100" src={banner3} alt="banner 3 " fluid />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <p className="fs-55">
              ¿TE GUSTARIA CONOCER MAS <br /> ACERCA DEL PLAN CREAR?{" "}
            </p>
            <Image className="w-100" src={banner4} alt="banner 4 " fluid />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
