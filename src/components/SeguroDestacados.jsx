import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

const SegurosDestacados = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);

  return (
    <div className="bg-azul-situaciones mb-4">
      <div className="container text-white">
        <div>
          <div data-aos="fade-up" className="py-5 text-center">
            <h2>Entre nuestros seguros destacados:</h2>
          </div>
          <div className="row">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="col-12 col-lg-4 pb-5"
            >
              <article className="d-flex text-center">
                <div>
                  <h5>
                    <b>Seguro de impago de alquiler:</b> <br /> Te ayudamos a
                    elegir a tu inquilino y te pagamos el alquiler en caso de
                    impago de renta. Y además, te indemnizamos frente a posibles
                    destrozos en tu vivienda.
                  </h5>
                </div>
              </article>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="col-12 col-lg-4 pb-5"
            >
              <article className="d-flex text-center">
                <div>
                  <h5>
                    <b>Planes de Pensiones:</b> <br /> Aseguro tu futuro.
                    Disfruta de tu jubilación. Elige tu plan de pensiones por
                    edad, categoría de inversión o autor. Y ahora, si traes tu
                    plan a Caser te llevas un 3% del importe.
                  </h5>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4 pb-5">
              <article
                data-aos="zoom-in"
                data-aos-delay="0"
                className="d-flex text-center"
              >
                <div>
                  <h5>
                    <b>Seguros para móviles:</b> <br /> Para todas las marcas y
                    sin importar la antigüedad de tu smartphone. Reparamos tu
                    móvil frente a los daños más habituales y te lo reponemos
                    cuando no sea posible o te lo roben.
                  </h5>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegurosDestacados;
