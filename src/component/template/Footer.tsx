import { Link } from "react-router-dom";
import Config from "../../config/config";

function Footer() {

    const githubUrl = Config.GITHUB_REPO_URL;
    
    return (
        <footer id="app-footer">
            <p className="footer-text text-center">Footer</p>
            <p className="footer-link text-center">
            <Link className="link-1" to={githubUrl} title="Lien vers Github">Lien vers Github</Link>
            </p>
        </footer>
    );

}
export default Footer;