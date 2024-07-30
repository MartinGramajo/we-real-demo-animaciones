import { Button, Image } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import logoCentrado from "../assets/img/logoCentrado.png";
import { Link } from "react-router-dom";

const Situaciones = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100); // Ajusta el tiempo según sea necesario
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/BasesyCondiciones.pdf`; // Reemplaza con el nombre de tu archivo PDF
    link.download = "BasesyCondiciones.pdf"; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-blanco-new-situaciones mb-4 ">
      <div className="container text-white">
        <div>
          <div data-aos="fade-down" data-aos-delay="0" className=" text-center">
            <Image src={logoCentrado} fluid alt="icono okay" />
          </div>
          <div className="row">
            <div data-aos="fade-up" className="text-center pb-5">
              <article className="d-flex">
                <p
                  className="text-black"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  El Grupo Wereal lanza la campaña "VENGA, VENDA y NAVEGUE" para
                  clientes audaces que quieran vender su vivienda con la mejor
                  inmobiliaria de Alicante. Los clientes que participen podrán
                  acceder a un Bono Promo Crucero de hasta 8 días y 7 noches
                  para 2 personas en las navieras MSC o COSTA.
                </p>
              </article>
              <article className=" text-center pt-4">
                <p className="text-black" style={{ fontSize: "18px" }}>
                  <span className="h4" style={{ fontWeight: "bold" }}>
                    Servicios Incluidos:
                  </span>
                  <br />
                  <span className="pt-5" style={{ fontWeight: "bold" }}>
                    • Pensión Completa: Desayuno, almuerzo, merienda, cena y
                    snack de medianoche.
                    <br /> • Alojamiento: Camarote en la categoría elegida con
                    limpieza diaria y descubierta de cama.
                    <br /> • Instalaciones: Acceso ilimitado a gimnasio,
                    piscina, biblioteca, discoteca, teatro, etc.
                    <br /> • Actividades de Animación: Participación en
                    programas y actividades como fiestas, bailes, concursos, y
                    club juvenil.
                  </span>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      <section className=" d-flex  justify-content-center flex-wrap pb-5">
        <div className="text-center  py-2  text-white mx-4">
          <article
            data-aos="fade-down"
            data-aos-delay="0"
            className="texto-intermedacion"
          >
            <Button className="btn-doble" onClick={handleDownload}>
              Descarga Bases y condiciones
            </Button>
          </article>
        </div>
        <div className="text-center py-2 text-white mx-4">
          <Link
            to="/contacto"
            data-aos="fade-down"
            data-aos-delay="0"
            className="texto-intermedacion"
          >
            <Button className="btn-doble">Haz tu consulta</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Situaciones;
