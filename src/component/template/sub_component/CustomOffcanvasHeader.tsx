import { Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CustomOffcanvasHeaderProps {
    showOffcanvas: boolean;
    toggleOffcanvas: () => void;
    handleLinkClick: (link: number) => void;
    activeLink: number;
}
const CustomOffcanvasHeader = (props: CustomOffcanvasHeaderProps) => {
    
    return (
        <Offcanvas
        show={props.showOffcanvas}
        onHide={props.toggleOffcanvas}
        placement="start"
        className="offcanvas-container-1"
      >
        <Offcanvas.Header className="offcanvas-header-1 mb-4" closeButton>
          <Offcanvas.Title className="offcanvas-title-1 text-space-3 text-orange">Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-4">
            <Nav.Item className="offcanvas-item-1" onClick={() => props.handleLinkClick(0)}>
              <Link
                id="link-home"
                to="/home"
                className={`offcanvas-link-1 text-white link-1 text-space-3 ${
                    props.activeLink === 0 ? "offcanvas-active" : ""
                }`}
              >
                Accueil
              </Link>
            </Nav.Item>
            <Nav.Item className="offcanvas-item-1" onClick={() => props.handleLinkClick(1)}>
              <Link
                id="link-gallery"
                to="/gallery"
                className={`offcanvas-link-1 text-white link-1 text-space-3 ${
                    props.activeLink === 1 ? "offcanvas-active" : ""
                }`}
              >
                Galerie
              </Link>
            </Nav.Item>
            <Nav.Item className="offcanvas-item-1" onClick={() => props.handleLinkClick(2)}>
              <Link
                id="link-contact"
                to="/contact"
                className={`offcanvas-link-1 text-white link-1 text-space-3 ${
                    props.activeLink === 2 ? "offcanvas-active" : ""
                }`}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    );
}

export default CustomOffcanvasHeader;