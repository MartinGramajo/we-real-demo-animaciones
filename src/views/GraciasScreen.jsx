import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BtnRegresar from "../components/BtnRegresar";

const GraciasScreen = () => {
  // const [counter, setCounter] = useState(5);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   const timeout = setTimeout(() => {
  //     navigate("/");
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //     clearTimeout(timeout);
  //   };
  // }, [navigate]);

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
        {/* <h5 className="text-center mt-5 pt-5">
          Serás redirigido al inicio en <b>{counter}</b> segundos...
        </h5> */}
      </div>
      <div className="d-flex justify-content-center">
        <BtnRegresar />
      </div>
    </div>
  );
};

export default GraciasScreen;
