import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <footer id="app-header">
            <h1 className="text-center title-1-bold mt-4 text-white text-space-2">PortFolio <span className="text-orange">Jacques Granarolo</span></h1>
            <nav>
                <ul className="link-header header-nav text-center">
                    <li className="list-nav"><Link to="/home"  className="link-1 text-space-3">Accueil</Link></li>
                    <span className="text-orange"> • </span>
                    <li className="list-nav"><Link to="/gallery" className="link-1 text-space-3">Galerie</Link></li>
                    <span className="text-orange"> • </span>
                    <li className="list-nav"><Link to="/contact" className="link-1 text-space-3">Contact</Link></li>
                </ul>
            </nav>
        </footer>
    );

}
export default Header;