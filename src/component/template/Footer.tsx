import { Link } from "react-router-dom";
import ConfigUrl from "../../config/ConfigUrl";

const Footer = () => {

    const githubRepoUrl = ConfigUrl.GITHUB_REPO_URL;
    
    return (
        <footer id="app-footer">
            <p className="footer-text text-center mt-3 mb-1  text-space-2">PortFolio <span className="text-orange">Jacques Granarolo</span></p>
            <p className="footer-link text-center mt-0 mb-1">
                <Link className="link-1" to={githubRepoUrl} title="Lien vers le repository Github de ce site." target="_blank" rel="noopener noreferrer">
                    Repository Github de ce site.
                </Link>
            </p>
            <p className="text-center text-space-2 text-blue-5 text-size-0-75 mt-0">
                © Avril 2024, Tous droits réservés.
            </p>
        </footer>
    );

}
export default Footer;