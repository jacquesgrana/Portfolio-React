import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import AccordionHome from "./AccordionHome";
import Config from "../../config/config";

function Home() {
    const githubRPersoUrl = Config.GITHUB_PERSO_URL;
    const linkedinPersoUrl = Config.LINKEDIN_PERSO_URL;
    const opquastCertificateUrl = Config.OPQUAST_CERTIFICATE_URL;
    return (
        <div id="app-home">
            <h2 className="title-1 text-blue-5 text-center mt-5 mb-5">Accueil</h2>
            <AccordionHome 
            opquastCertificateUrl={opquastCertificateUrl} githubRPersoUrl={githubRPersoUrl}
            linkedinPersoUrl={linkedinPersoUrl}
            />
        </div>
    );

}
export default Home;