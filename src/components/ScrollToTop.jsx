import { useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainElement = document.getElementById("main-content"); // Reemplaza "main-content" con el ID de tu elemento principal
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }

    // Reinicializa AOS después de hacer scroll al top
    setTimeout(() => {
      AOS.refresh();
    }, 500); // Puedes ajustar el tiempo según sea necesario
  }, [pathname]);

  return null;
}
