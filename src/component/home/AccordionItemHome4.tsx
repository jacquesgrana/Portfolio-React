import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

//import githubLogo from './../../image/github_logo.png';

function AccordionItemHome4(props: any) {

    const githubLogo =  require("../../image/github_logo.png");
    const linkedInLogo =  require("../../image/linkedin_logo.png");
    const opquastCertificateLogo =  require("../../image/opquast_logo.png");

    return (
        <Accordion.Item eventKey="3" className="mb-3">
            <Accordion.Header>
                <h3 className="title-2 text-blue-5 text-center mt-3">Liens</h3>
            </Accordion.Header>
            <Accordion.Body>
                <div className="body-accordion-container">
                <Link className="" to={props.githubRPersoUrl} title="Lien vers mon Github" target="_blank" rel="noopener noreferrer">
                <span className="logo-container-accordion-home">
                    <img src={githubLogo} alt="logo github" className="logo-accordion-home" />
                    <p className="text-logo-accordion-home">Github</p>
                    </span>
                </Link>
                <Link className="" to={props.linkedinPersoUrl} title="Lien vers mon LinkedIn" target="_blank" rel="noopener noreferrer">
                    <span className="logo-container-accordion-home">
                    <img src={linkedInLogo} alt="logo LinkedIn" className="logo-accordion-linkedin-home" />
                    <p className="text-logo-accordion-home">LinkedIn</p>
                    </span>
                </Link>
                <Link className="" to={props.opquastCertificateUrl} title="Lien vers mon Cetificat Opquast" target="_blank" rel="noopener noreferrer">
                    <span className="logo-container-accordion-home">
                    <img src={opquastCertificateLogo} alt="logo certificat Opquast" className="logo-accordion-linkedin-home" />
                    <p className="text-logo-accordion-home">Opquast</p>
                    </span>
                </Link>
            </div>
            </Accordion.Body>
        </Accordion.Item>
    );

}

export default AccordionItemHome4;