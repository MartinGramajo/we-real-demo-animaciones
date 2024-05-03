import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NavReact from "./components/common/NavReact";
import Footer from "./components/common/Footer";
import Servicios from "./views/Servicios";
import Andres from "./views/Andres";
import Equipo from "./views/Equipo";
import Victor from "./views/Victor";
import Monica from "./views/Monica";
import Javier from "./views/Javier";
import Josy from "./views/Josy";
import Contacto from "./views/Contacto";
import ScrollToTop from "./components/ScrollToTop";
import AvisoLegal from "./views/AvisoLegal";
import CompromisoProteccion from "./views/CompromisoProteccion";
import PoliticasPrivacidad from "./views/PoliticasPrivacidad";
import PoliticaDeCookies from "./views/PoliticaDeCookies";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-app">
      <HashRouter>
        <NavReact />
        <ScrollToTop />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/servicios" element={<Servicios />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/equipo" element={<Equipo />} />
          <Route exact path="/Andres-Broullon" element={<Andres />} />
          <Route exact path="/Victor-Dabat-Aracil" element={<Victor />} />
          <Route
            exact
            path="/Monica-Porchetto-Velazquez"
            element={<Monica />}
          />
          <Route exact path="/Josy-Ribeiro-Da-Silva" element={<Josy />} />
          <Route exact path="/Javier-Pastor-Cobos" element={<Javier />} />
          <Route exact path="/aviso-legal" element={<AvisoLegal />} />
          <Route exact path="/politicas-de-privacidad" element={<PoliticasPrivacidad />} />
          <Route exact path="/compromiso-de-proteccion" element={<CompromisoProteccion />} />
          <Route exact path="/politicas-de-cookies" element={<PoliticaDeCookies />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
