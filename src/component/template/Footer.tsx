import { Link } from "react-router-dom";
import ConfigUrl from "../../config/configUrl";

function Footer() {

    const githubRepoUrl = ConfigUrl.GITHUB_REPO_URL;
    
    return (
        <footer id="app-footer">
            <p className="footer-text text-center mt-3 mb-0">PortFolio <span className="text-orange">Jacques Granarolo</span></p>
            <p className="footer-link text-center mt-0">
            <Link className="link-1" to={githubRepoUrl} title="Lien vers Github" target="_blank" rel="noopener noreferrer">Lien vers le Repository Github</Link>
            </p>
        </footer>
    );

}
export default Footer;