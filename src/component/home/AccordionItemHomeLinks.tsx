import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

interface AccordionItemHomeLinksProps {
    githubPersoUrl: string
    linkedinPersoUrl: string
    opquastCertificateUrl: string
    cvPdf: string
    githubLogo: string
    linkedInLogo: string
    opquastCertificateLogo: string
    cvLogo: string
}

const AccordionItemHomeLinks = (props: AccordionItemHomeLinksProps) => {

    //const cvPdf = require("../../asset/pdf/cv_jacques_granarolo_links_v1.0.pdf");

    return (
        <Accordion.Item eventKey="4" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white text-center mt-2 ms-0">
                    <span id="accordion-bullet-4" className="accordion-bullet text-orange me-1 transition-03s">•</span> <span id="accordion-title-4" className="accordion-title transition-03s text-space-2">Liens & CV</span>
                </h3>
            </Accordion.Header>
            <Accordion.Body >
                <div className="body-accordion-container">
                    <Link className="" to={props.githubPersoUrl} title="Lien vers mon Github." target="_blank" rel="noopener noreferrer">
                        <span className="logo-container-accordion-home">
                            <img src={props.githubLogo} alt="logo github" className="logo-accordion-github-home" />
                            <span className="link-2">GITHUB</span>
                        </span>
                    </Link>
                    <Link className="" to={props.linkedinPersoUrl} title="Lien vers mon LinkedIn." target="_blank" rel="noopener noreferrer">
                        <span className="logo-container-accordion-home">
                            <img src={props.linkedInLogo} alt="logo LinkedIn" className="logo-accordion-linkedin-home" />
                            <span className="link-2">LINKEDIN</span>
                        </span>
                    </Link>
                    <Link className="" to={props.opquastCertificateUrl} title="Lien vers mon Certificat Opquast." target="_blank" rel="noopener noreferrer">
                        <span className="logo-container-accordion-home">
                            <img src={props.opquastCertificateLogo} alt="logo certificat Opquast" className="logo-accordion-cv-home" />
                            <span className="link-2">OPQUAST</span>
                        </span>
                    </Link>
                    <Link className="" to={props.cvPdf} title="Lien vers mon CV." target="_blank" rel="noopener noreferrer">
                        <span className="logo-container-accordion-home">
                            <img src={props.cvLogo} alt="logo CV" className="logo-accordion-cv-home" />
                            <span className="link-2">CV en PDF</span>
                        </span>
                    </Link>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );

}

export default AccordionItemHomeLinks;