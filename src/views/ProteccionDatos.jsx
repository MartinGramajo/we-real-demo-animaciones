import React from "react";
import Inmoadal from "../components/Inmoadal";

const ProteccionDatos = () => {
  return (
    <>
      <div className="container py-5">
        <table className="table table-bordered ">
          <thead>
            <tr style={{ fontSize: "16px" }}>
              <th colSpan="2">INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontSize: "16px" }}>
                <strong>Responsable del tratamiento</strong>
              </td>
              <td>ALINEA AGB DESARROLLOS y PROYECTOS, S.L.U.</td>
            </tr>
            <tr>
              <td style={{ fontSize: "16px" }}>
                <strong>Dirección del responsable</strong>
              </td>
              <td>C/ Arquitecto Morell Nº 27 - Bajo, 03007, Alicante</td>
            </tr>
            <tr>
              <td style={{ fontSize: "16px" }}>
                <strong>Finalidad</strong>
              </td>
              <td>
                Sus datos serán usados para poder atender sus solicitudes y
                prestarle nuestros servicios.
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "16px" }}>
                <strong>Publicidad</strong>
              </td>
              <td>
                Solo le enviaremos publicidad con su autorización previa, que
                podrá facilitarnos mediante la casilla correspondiente
                establecida al efecto.
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "16px" }}>
                <strong>Legitimación</strong>
              </td>
              <td>
                Únicamente trataremos sus datos con su consentimiento previo,
                que podrá facilitarnos mediante la casilla correspondiente
                establecida al efecto.
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "16px" }}>
                <strong>Destinatarios</strong>
              </td>
              <td>
                Con carácter general, sólo el personal de nuestra entidad que
                esté debidamente autorizado podrá tener conocimiento de la
                información que le pedimos.
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "16px" }}>
                <strong>Derechos</strong>
              </td>
              <td>
                Tiene derecho a saber qué información tenemos sobre usted,
                corregirla y eliminarla, tal y como se explica en la información
                adicional disponible en nuestra página web.
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "16px" }}>
                <strong>Información adicional</strong>
              </td>
              <td>
                Más información en el apartado “POLÍTICA DE PRIVACIDAD” de
                nuestra página web.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Inmoadal />
    </>
  );
};

export default ProteccionDatos;
