import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import face from "../../assets/img/face.png";
import insta from "../../assets/img/insta.png";
import youtube from "../../assets/img/youtube.png";
import linken from "../../assets/img/linken.png";
import logoNav from "../../assets/img/logoNav.png";
import { useState } from "react";

const NavReact = () => {
  function cerrar() {
    let navbar = document.querySelector(".navbar-toggler");
    navbar.click();
  }
  return (
    <div className="my-5">
      <Navbar expand="lg" variant="light" sticky="top" className="bg-light">
        <Container>
          <Navbar.Brand href="/">
            <div>
              <Image className="logo-nav" src={logoNav} alt="logo" fluid />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto mt-2 mt-sm-0">
              <Nav.Link
                to="/"
                as={NavLink}
                onClick={cerrar}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links "
              >
                INICIO
              </Nav.Link>

              <Nav.Link
                to="/servicios"
                as={NavLink}
                onClick={cerrar}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                to="/equipo"
                as={NavLink}
                onClick={cerrar}
                className="tamaño-medium ms-auto color-blanco mx-xl-2 my-auto nav-links"
              >
                EQUIPO
              </Nav.Link>
              <a
                href="https://www.grupowereal.com/"
                className="text-decoration-none text-dark ms-auto color-blanco mx-xl-2 my-auto nav-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                COMPRAR/ALQUILAR
              </a>
              <section className="ms-auto d-flex">
                <div className="mx-2">
                  <a
                    href="https://www.facebook.com/grupowereal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Image
                      className="iconos-nav"
                      src={face}
                      alt="facebook"
                      fluid
                    />
                  </a>
                </div>

                <div className="mx-2">
                  <a
                    href="https://www.instagram.com/grupowereal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Image
                      className="iconos-nav"
                      src={insta}
                      alt="instagram"
                      fluid
                    />
                  </a>
                </div>
                <div className="mx-2">
                  <a
                    href="https://www.youtube.com/@werealgrupoinmobiliario2357"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="iconos-nav"
                      src={youtube}
                      alt="youtube"
                      fluid
                    />
                  </a>
                </div>

                <div className="mx-2">
                  <a
                    href="https://www.linkedin.com/company/wereal-grupo-inmobiliario/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Image
                      className="iconos-nav"
                      src={linken}
                      alt="linken"
                      fluid
                    />
                  </a>
                </div>
              </section>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavReact;
