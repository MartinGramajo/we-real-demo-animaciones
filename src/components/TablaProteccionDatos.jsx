import React from "react";

function TablaProteccionDatos() {
  const data = {
    responsable: "ALINEA AGB DESARROLLOS y PROYECTOS, S.L.U.",
    direccion: "C/ Arquitecto Morell Nº 27 - Bajo, 03007, Alicante",
    finalidad:
      "Sus datos serán usados para poder atender sus solicitudes y prestarle nuestros servicios.",
    publicidad:
      "Solo le enviaremos publicidad con su autorización previa, que podrá facilitarnos mediante la casilla correspondiente establecida al efecto.",
    legitimacion:
      "Únicamente trataremos sus datos con su consentimiento previo, que podrá facilitarnos mediante la casilla correspondiente establecida al efecto.",
    destinatarios:
      "Con carácter general, sólo el personal de nuestra entidad que esté debidamente autorizado podrá tener conocimiento de la información que le pedimos.",
    derechos:
      "Tiene derecho a saber qué información tenemos sobre usted, corregirla y eliminarla, tal y como se explica en la información adicional disponible en nuestra página web.",
    infoAdicional:
      "Más información en el apartado “POLÍTICA DE PRIVACIDAD” de nuestra página web.",
  };

  return (
    <table className="table">
      <tbody>
        <tr>
          <td colSpan="2">
            <strong>INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS</strong>
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "14px" }}>
            <strong>Responsable del tratamiento</strong>
          </td>
          <td style={{ fontSize: "14px" }}>{data.responsable}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "14px" }}>
            <strong>Dirección del responsable</strong>
          </td>
          <td style={{ fontSize: "14px" }}>{data.direccion}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "14px" }}>
            <strong>Finalidad</strong>
          </td>
          <td style={{ fontSize: "14px" }}>{data.finalidad}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "14px" }}>
            <strong>Publicidad</strong>
          </td>
          <td style={{ fontSize: "14px" }}>{data.publicidad}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "14px" }}>
            <strong>Legitimación</strong>
          </td>
          <td style={{ fontSize: "14px" }}>{data.legitimacion}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "14px" }}>
            <strong>Destinatarios</strong>
          </td>
          <td style={{ fontSize: "14px" }}>{data.destinatarios}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "14px" }}>
            <strong>Derechos</strong>
          </td>
          <td style={{ fontSize: "14px" }}>{data.derechos}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "14px" }}>
            <strong>Información adicional</strong>
          </td>
          <td style={{ fontSize: "14px" }}>{data.infoAdicional}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TablaProteccionDatos;
