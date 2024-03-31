import Accordion from 'react-bootstrap/Accordion';
import AccordionItemHomeAboutMe from "./AccordionItemHomeAboutMe";
import AccordionItemHomeDiplomas from "./AccordionItemHomeDiplomas";
import AccordionItemHomeExperiences from "./AccordionItemHomeExperiences";
import AccordionItemHomeLinks from "./AccordionItemHomeLinks";


const AccordionHome = (props: any) => {
    return (
        <Accordion defaultActiveKey="3" onSelect={(eventKey) => props.setAccordionId(eventKey)} flush>
            <AccordionItemHomeAboutMe 
            />
            <AccordionItemHomeDiplomas 
            opquastCertificateUrl={props.opquastCertificateUrl}
            opquastCertificationUrl={props.opquastCertificationUrl}
            diginamicUrl={props.diginamicUrl}
            cnamUrl={props.cnamUrl}
            opquastLogo={props.opquastLogo}
            cnamLogo={props.cnamLogo}
            diginamicLogo={props.diginamicLogo}
            />
            <AccordionItemHomeExperiences 
            />
            <AccordionItemHomeLinks 
            githubRPersoUrl={props.githubRPersoUrl} 
            linkedinPersoUrl={props.linkedinPersoUrl}
            opquastCertificateUrl={props.opquastCertificateUrl}
            githubLogo={props.githubLogo}
            linkedInLogo={props.linkedInLogo}
            opquastCertificateLogo={props.opquastCertificateLogo}
            cvLogo={props.cvLogo}
            />
        </Accordion>
    );
}

export default AccordionHome;