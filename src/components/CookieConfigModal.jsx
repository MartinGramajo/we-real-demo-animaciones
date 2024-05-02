import React from "react";

function CookieConfigModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <section className="bg-secondary">
          <h6
            className="text-center mt-1 text-white"
            style={{ fontSize: "18px" }}
          >
            CONFIGURACIÓN de COOKIES
          </h6>
        </section>

        <h6 className="py-4" style={{ fontSize: "16px" }}>
          Aquí puedes ajustar tus preferencias de cookies.
        </h6>
        <div className="d-flex justify-content-center">
          <button className="boton-modal-cookies " onClick={onClose}>
            Aceptar Cookies Analíticas
          </button>
          <button className="boton-modal-cookies " onClick={onClose}>
            Aceptar Cookies de Publicidad
          </button>
          <button className="boton-modal-cookies " onClick={onClose}>
            Aceptar solo Cookies Necesarias
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConfigModal;
