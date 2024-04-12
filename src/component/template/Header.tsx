import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import CustomOffcanvasHeader from "./sub_component/CustomOffcanvasHeader";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  //const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {

    //setHeaderHeight(getHeaderHeight());
    setPaddingTop(getHeaderHeight());
    setActiveLink(getActiveLink());
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);


    const handleResize = () => {
      setPaddingTop(getHeaderHeight());
    };
    window.addEventListener("resize", handleResize);
    /* 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };*/
    
  }, []);

  // détecte le changement de hauteur du Header
  useEffect(() => {
  }, []);
  const handleLinkClick = (index: number) => {
    setActiveLink(index);
    setShowOffcanvas(false);
  };

  // méthode qui change le paddind-top de l'element d'id main en fonction de height
  const setPaddingTop = (height: number) => {
    const gap = 50;
    const main = document.getElementById("main");
    if (main) {
      main.style.transition = `0.3s`;
      main.style.paddingTop = `${height + gap}px`;
    }
  }

  // méthode qui renvoie la hauteur en pixel du composant Header.
  const getHeaderHeight = () => {
    const header = document.getElementById("app-header");
    if (header) {
      //console.log('header.offsetHeight', header.offsetHeight);
      return header.offsetHeight;
    }
    return 0;
  }

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const getActiveLink = () => {
    if (window.location.pathname === "/home") {
      return 0;
    }
    if (window.location.pathname === "/gallery") {
      return 1;
    }
    if (window.location.pathname === "/contact") {
      return 2;
    }
    return 0;
  }
  // &#160; espace blanc insécable
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
        <h1 className="text-center title-1-bold mt-4 text-white text-space-3 header-title">
          PortFolio <span className="text-orange">Jacques Granarolo</span>
        </h1>
        <Nav className="link-header header-nav">
          <Nav.Item onClick={toggleOffcanvas}>
            <span className="text-orange hamburger-button">☰</span> 
          </Nav.Item>
          <Nav.Item className="mt-1" onClick={() => handleLinkClick(0)}>
            <Link
              id="link-home"
              to="/home"
              className={`link-1 text-white text-space-3 ${
                activeLink === 0 ? "active" : ""
              }`}
            >
              Accueil
            </Link>
          </Nav.Item>
          <span className="text-orange mt-1"> • </span>
          <Nav.Item className="mt-1" onClick={() => handleLinkClick(1)}>
            <Link
              id="link-gallery"
              to="/gallery"
              className={`link-1 text-white text-space-3 ${
                activeLink === 1 ? "active" : ""
              }`}
            >
              Galerie
            </Link>
          </Nav.Item>
          <span className="text-orange mt-1"> • </span>
          <Nav.Item className="mt-1" onClick={() => handleLinkClick(2)}>
            <Link
              id="link-contact"
              to="/contact"
              className={`link-1 text-white text-space-3 ${
                activeLink === 2 ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </header>

      {/* Offcanvas */}
      <CustomOffcanvasHeader
        showOffcanvas={showOffcanvas}
        toggleOffcanvas={toggleOffcanvas}
        handleLinkClick={handleLinkClick}
        activeLink={activeLink}
      />
      
    </>
  );
};

export default Header;

/*
      <Offcanvas
        show={showOffcanvas}
        onHide={toggleOffcanvas}
        placement="start"
        className="offcanvas-container-1"
      >
        <Offcanvas.Header className="offcanvas-header-1 mb-4" closeButton>
          <Offcanvas.Title className="offcanvas-title-1 text-space-3 text-orange">Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-4">
            <Nav.Item className="offcanvas-item-1" onClick={() => handleLinkClick(0)}>
              <Link
                id="link-home"
                to="/home"
                className={`offcanvas-link-1 text-white link-1 text-space-3 ${
                  activeLink === 0 ? "offcanvas-active" : ""
                }`}
              >
                Accueil
              </Link>
            </Nav.Item>
            <Nav.Item className="offcanvas-item-1" onClick={() => handleLinkClick(1)}>
              <Link
                id="link-gallery"
                to="/gallery"
                className={`offcanvas-link-1 text-white link-1 text-space-3 ${
                  activeLink === 1 ? "offcanvas-active" : ""
                }`}
              >
                Galerie
              </Link>
            </Nav.Item>
            <Nav.Item className="offcanvas-item-1" onClick={() => handleLinkClick(2)}>
              <Link
                id="link-contact"
                to="/contact"
                className={`offcanvas-link-1 text-white link-1 text-space-3 ${
                  activeLink === 2 ? "offcanvas-active" : ""
                }`}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
*/