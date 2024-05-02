import React, { useState, useEffect } from "react";

function CookieModal({ onConfigure }) {
  // Inicializa isVisible basado en si las preferencias de cookies están ya guardadas
  const [isVisible, setIsVisible] = useState(
    !localStorage.getItem("cookieSettings")
  );

  const handleAccept = () => {
    console.log("Cookies aceptadas.");
    localStorage.setItem("cookieSettings", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    console.log("Cookies rechazadas.");
    localStorage.setItem("cookieSettings", "rejected");
    setIsVisible(false);
  };

  // Si isVisible es falso, no renderizar nada
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span
          className="close"
          style={{ fontSize: "18px" }}
          onClick={() => setIsVisible(false)}
        >
          &times;
        </span>
        <section className="bg-secondary">
          <h6
            className="text-center mt-1 text-white"
            style={{ fontSize: "18px" }}
          >
            INFORMACIÓN BÁSICA sobre COOKIES
          </h6>
        </section>
        <div className="container my-2">
          <h6 style={{ fontSize: "14px" }}>
            Bienvenida/o a la información básica sobre las cookies de la página
            web responsabilidad de la entidad:{" "}
            <b> ALINEA AGB DESARROLLOS y PROYECTOS, S.L.U.</b>
          </h6>
          <h6 style={{ fontSize: "14px" }}>
            Una cookie o galleta informática es un pequeño archivo de
            información que se guarda en tu ordenador, “smartphone” o tableta
            cada vez que visitas nuestra página web. Algunas cookies son
            nuestras y otras pertenecen a empresas externas que prestan
            servicios para nuestra página web.
          </h6>
          <h6 style={{ fontSize: "14px" }}>
            Las cookies técnicas son necesarias para que nuestra página web
            pueda funcionar, no necesitan de tu autorización y son las únicas
            que tenemos activadas por defecto.
          </h6>
          <h6 style={{ fontSize: "14px" }}>
            El resto de cookies sirven para mejorar nuestra página, para
            personalizarla en base a tus preferencias, o para poder mostrarte
            publicidad ajustada a tus búsquedas, gustos e intereses
            personales.Puedes aceptar todas estas cookies pulsando el botón
            <b>ACEPTAR</b> , rechazarlas pulsando el botón <b>RECHAZAR</b> o
            configurarlas haciendo clic en el apartado{" "}
            <b>CONFIGURACIÓN de COOKIES</b>.
          </h6>
          <h6 style={{ fontSize: "14px" }}>
            Si quieres más información, consulta la <b>POLÍTICA de COOKIES</b>{" "}
            de nuestra página web.
          </h6>
        </div>
        <div className="d-flex justify-content-center">
          <button className="boton-modal-cookies " onClick={handleAccept}>
            ACEPTAR
          </button>
          <button className="boton-modal-cookies " onClick={handleReject}>
            RECHAZAR
          </button>
          <button className="boton-modal-cookies " onClick={onConfigure}>
            CONFIGURACIÓN de COOKIES
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieModal;
