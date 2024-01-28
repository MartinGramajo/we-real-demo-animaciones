import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const CanalYoutube = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);

  return (
    <section>
      <div className="text-center py-5 my-5 bg-azul-situaciones text-white">
        <h1 data-aos="fade-down" className="texto-intermedacion">
          TAMBIÉN PODES CONOCERNOS A TRAVES DE NUESTRO CANAL DE YOUTUBE
        </h1>
      </div>
      <article className="container">
        <div className="text-center video-container my-4">
          <iframe
            src="https://www.youtube.com/embed/eKOTuG3UHU8?si=FBVf4e5vuOG__rLp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default CanalYoutube;
