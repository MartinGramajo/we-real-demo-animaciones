import { Image } from "react-bootstrap";
import caja from "../assets/img/caja.png";

const CajaProceso = () => {
  return (
    <div className="text-white">
      <div className="">
        <div className="text-center py-5 my-5 bg-azul-situaciones text-white">
          <h1 className="texto-intermedacion"> INTERMEDIACIÓN FINANCIERA</h1>
        </div>
        <article className="container">
          <div className="row ">
            <div className="col-lg-6 col-sm-12 pt-lg-5 pt-0 px-5 pb-5  d-flex flex-column justify-content-center ">
              <h3 className=" pt-4" style={{ zIndex: 2 }} id="intermediacion">
                ¿CÓMO ES EL PROCESO?
              </h3>
              <h5 className=" py-2 ">
                1- <b>TOMA DE CONTACTO</b>: Recopilamos toda la información
                financiera y analizamos minuciosamente el caso. Lo que buscamos,
                es estudiar la viabilidad del proyecto, de esta forma podremos
                brindarte el mejor asesoramiento posible, ya que al tener todas
                las conclusiones te podremos comunicar las opciones.
              </h5>
              <h5 className=" py-2 ">
                2-<b>INICIO DEL PROCESO</b>: Consultamos las diferentes
                entidades bancarias para buscar el mejor producto dentro del
                mercado y en condiciones optimas. Con nuestro sistema, siempre
                tendrás un profesional enteramente dedicado a ti que se ocupara
                de todos los tramites por vos.
              </h5>
              <h5 className=" py-2 ">
                3-<b>TASACIÓN</b>: Trabajamos desde hace mas de 10 años con
                diferentes empresas y entidades tasadoras. Nuestro objetivo es
                que todas las tasaciones siempre salgan con un valor favorable,
                de esta forma conseguir que se autorice el préstamo con el
                importe solicitado.
              </h5>
              <h5 className=" py-2 ">
                4-<b>OBJETIVO CUMPLIDO</b>: El ultimo escalón en nuestro proceso
                es la firma de condiciones, primero con la entidad bancaria y
                luego con el notario.
              </h5>
              <div className="text-center">
                <h4>LLEGO EL MOMENTO DE FESTEJAR!!! </h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 text-center d-flex align-items-center justify-content-center">
              <Image className="" src={caja} alt="caja" fluid />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CajaProceso;
