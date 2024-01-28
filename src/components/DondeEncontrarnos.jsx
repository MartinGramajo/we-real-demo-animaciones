import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const DondeEncontrarnos = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);
  return (
    <div>
      <div className="text-center text-white">
        <div className="text-center py-5  bg-azul-situaciones text-white">
          <h1 data-aos="fade-down" className="texto-intermedacion">
            ¿DÓNDE ENCONTRARNOS?
          </h1>
        </div>
      </div>
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3129.3157079148796!2d-0.4959143!3d38.3416743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6237e52d1b22ef%3A0x2891174fc0f679e2!2sWeReal%20Grupo%20Inmobiliario!5e0!3m2!1ses-419!2sar!4v1701535119859!5m2!1ses-419!2sar"
          width="100%"
          height="650"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default DondeEncontrarnos;
