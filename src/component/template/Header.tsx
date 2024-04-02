import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {

    setHeaderHeight(getHeaderHeight());
    setPaddingTop(getHeaderHeight());
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // détecte le changement de hauteur du Header
  useEffect(() => {
    const handleResize = () => {
      setHeaderHeight(getHeaderHeight());
      setPaddingTop(getHeaderHeight());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    setShowOffcanvas(false);
  };

  // méthode qui change le paddind-top de l'element d'id main en fonction de height
  const setPaddingTop = (height: number) => {
    const gap = 35;
    const main = document.getElementById("main");
    if (main) {
      main.style.paddingTop = `${height + gap}px`;
    }
  }

  // méthode qui renvoie la hauteur en pixel du composant Header.
  const getHeaderHeight = () => {
    const header = document.getElementById("app-header");
    if (header) {
      return header.offsetHeight;
    }
    return 0;
  }

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      <header
        id="app-header"
        className={
          isScrolled
            ? "border-bottom-header-1 pb-2"
            : "transition-03s pb-2"
        }
      >
        <h1 className="text-center title-1-bold mt-4 text-white text-space-3">
          PortFolio <span className="text-orange">Jacques Granarolo</span>
        </h1>
        <Nav className="link-header header-nav">
          <Nav.Item onClick={toggleOffcanvas}>
            <span className="text-orange hamburger-button">☰</span> 
            
          </Nav.Item>
          <Nav.Item onClick={() => handleLinkClick(0)}>
            <Link
              id="link-home"
              to="/home"
              className={`link-1 text-space-3 ${
                activeLink === 0 ? "active" : ""
              }`}
            >
              Accueil
            </Link>
          </Nav.Item>
          <span className="text-orange"> • </span>
          <Nav.Item onClick={() => handleLinkClick(1)}>
            <Link
              id="link-gallery"
              to="/gallery"
              className={`link-1 text-space-3 ${
                activeLink === 1 ? "active" : ""
              }`}
            >
              Galerie
            </Link>
          </Nav.Item>
          <span className="text-orange"> • </span>
          <Nav.Item onClick={() => handleLinkClick(2)}>
            <Link
              id="link-contact"
              to="/contact"
              className={`link-1 text-space-3 ${
                activeLink === 2 ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </header>

      <Offcanvas
        show={showOffcanvas}
        onHide={toggleOffcanvas}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Item onClick={() => handleLinkClick(0)}>
              <Link
                id="link-home"
                to="/home"
                className={`link-1 text-space-3 ${
                  activeLink === 0 ? "active" : ""
                }`}
              >
                Accueil
              </Link>
            </Nav.Item>
            <Nav.Item onClick={() => handleLinkClick(1)}>
              <Link
                id="link-gallery"
                to="/gallery"
                className={`link-1 text-space-3 ${
                  activeLink === 1 ? "active" : ""
                }`}
              >
                Galerie
              </Link>
            </Nav.Item>
            <Nav.Item onClick={() => handleLinkClick(2)}>
              <Link
                id="link-contact"
                to="/contact"
                className={`link-1 text-space-3 ${
                  activeLink === 2 ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
