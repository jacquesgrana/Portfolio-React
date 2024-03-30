import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            //console.log('scrolled');
            setIsScrolled(true);
          } else {
            //console.log('no scrolled');
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      //console.log(isScrolled ? "border-bottom-header-1" : "");
    return (
        <header id="app-header" className={isScrolled ? "border-bottom-header-1" : "transition-03s"}>
            <h1 className="text-center title-1-bold mt-4 text-white text-space-3">PortFolio <span className="text-orange">Jacques Granarolo</span></h1>
            <nav>
                <ul className="link-header header-nav text-center">
                    <li className="list-nav"><Link to="/home"  className="link-1 text-space-3">Accueil</Link></li>
                    <span className="text-orange"> • </span>
                    <li className="list-nav"><Link to="/gallery" className="link-1 text-space-3">Galerie</Link></li>
                    <span className="text-orange"> • </span>
                    <li className="list-nav"><Link to="/contact" className="link-1 text-space-3">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );

}
export default Header;