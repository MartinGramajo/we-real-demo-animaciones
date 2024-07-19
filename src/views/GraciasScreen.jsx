import React, { useEffect } from "react";
import BtnRegresar from "../components/BtnRegresar";

const GraciasScreen = () => {
  useEffect(() => {
    // Meta Ads Conversion Code
    const fbqScript = document.createElement("script");
    fbqScript.innerHTML = "fbq('track', 'Contact');";
    document.head.appendChild(fbqScript);

    // Google Ads Conversion Code
    const gtagScript = document.createElement("script");
    gtagScript.innerHTML =
      "gtag('event', 'conversion', {'send_to': 'AW-614909651/L-83CKHujcMZENONm6UC'});";
    document.head.appendChild(gtagScript);

    // Clean up the script tags when component unmounts
    return () => {
      document.head.removeChild(fbqScript);
      document.head.removeChild(gtagScript);
    };
  }, []);

  return (
    <div>
      <div className="bg-azul-situaciones text-center text-white py-5">
        <h1>¡Mensaje enviado exitosamente!</h1>
      </div>
      <div className="container mt-5">
        <h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          ¡Gracias por utilizar nuestro formulario de contacto!
        </h3>
        <h5>
          Nos complace informarte que pronto un profesional de nuestro equipo se
          comunicará contigo para brindarte el mejor asesoramiento
          personalizado. Estamos aquí para resolver todas tus dudas y ayudarte
          en cada situación. Además, si estás interesado en comprar una vivienda
          con nosotros, te ofrecemos una amplia variedad de opciones.
        </h5>
      </div>
      <div className="d-flex justify-content-center">
        <BtnRegresar />
      </div>
    </div>
  );
};

export default GraciasScreen;
