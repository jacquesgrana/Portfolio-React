import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      setActivePage(0);
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


      const setActivePage = (index: number) => {
        console.log(index);
        const linkHome = document.getElementById("link-home");
        const linkGallery = document.getElementById("link-gallery");
        const linkContact = document.getElementById("link-contact");

        switch (index) {
          case 0:
            linkHome?.classList.add("active");
            linkGallery?.classList.remove("active");
            linkContact?.classList.remove("active");
            break;
          case 1:
            linkHome?.classList.remove("active");
            linkGallery?.classList.add("active");
            linkContact?.classList.remove("active");
            break;
          case 2:
            linkHome?.classList.remove("active");
            linkGallery?.classList.remove("active");
            linkContact?.classList.add("active");
            break;
        }

      }
      //console.log(isScrolled ? "border-bottom-header-1" : "");
    return (
        <header id="app-header" className={isScrolled ? "border-bottom-header-1 pb-2" : "transition-03s pb-2"}>
            <h1 className="text-center title-1-bold mt-4 text-white text-space-3">PortFolio <span className="text-orange">Jacques Granarolo</span>
            </h1>
            <Nav className="justify-content-center link-header header-nav" variant="underline" defaultActiveKey="0" >
            <Nav.Item onClick={(e) => setActivePage(0)}>
              <Link id="link-home" to="/home" className={`link-1 text-space-3`}>
                Accueil
              </Link>
            </Nav.Item>
            <span className="text-orange"> • </span>
            <Nav.Item onClick={(e) => setActivePage(1)}>
              <Link id="link-gallery" to="/gallery" className={`link-1 text-space-3`}>
                Galerie
              </Link>
            </Nav.Item>
            <span className="text-orange"> • </span>
            <Nav.Item onClick={(e) => setActivePage(2)}>
              <Link id="link-contact" to="/contact" className={`link-1 text-space-3`}>
                Contact
              </Link>
            </Nav.Item>
            </Nav>

        </header>
    );

}
export default Header;

/*

            <nav>
                <ul className="link-header header-nav text-center">
                    <li className="list-nav"><Link to="/home"  className="link-1 text-space-3">Accueil</Link></li>
                    <span className="text-orange"> • </span>
                    <li className="list-nav"><Link to="/gallery" className="link-1 text-space-3">Galerie</Link></li>
                    <span className="text-orange"> • </span>
                    <li className="list-nav"><Link to="/contact" className="link-1 text-space-3">Contact</Link></li>
                </ul>
            </nav>

*/