import React from "react";

function CookieConfigModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>CONFIGURACIÓN de COOKIES</h2>
        <p>Aquí puedes ajustar tus preferencias de cookies.</p>
        <div className="buttons">
          <button
            onClick={() => {
              console.log("Cookies Analíticas ajustadas");
              onClose();
            }}
          >
            Configurar Analíticas
          </button>
          <button
            onClick={() => {
              console.log("Cookies de Publicidad ajustadas");
              onClose();
            }}
          >
            Configurar Publicidad
          </button>
          <button
            onClick={() => {
              console.log("Cookies Necesarias confirmadas");
              onClose();
            }}
          >
            Confirmar Necesarias
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConfigModal;
