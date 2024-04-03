import Accordion from 'react-bootstrap/Accordion';
import AccordionItemHomeAboutMe from "./AccordionItemHomeAboutMe";
import AccordionItemHomeDiplomas from "./AccordionItemHomeDiplomas";
import AccordionItemHomeExperiences from "./AccordionItemHomeExperiences";
import AccordionItemHomeLinks from "./AccordionItemHomeLinks";


interface AccordionHomeProps {
    opquastCertificationUrl: string;
    opquastCertificateUrl: string;
    githubPersoUrl: string;
    linkedinPersoUrl: string;
    diginamicUrl: string;
    cnamUrl: string;
    avosclicsUrl: string;
    twosagencyUrl: string;
    cvPdf: string;
    githubLogo: string;
    linkedInLogo: string;
    opquastCertificateLogo: string;
    cvLogo: string;
    diginamicLogo: string;
    cnamLogo: string;
    opquastLogo: string;
    setAccordionId: (id: number) => void;
}

const AccordionHome = (props: AccordionHomeProps) => {
    return (
        <Accordion 
        defaultActiveKey="4" 
        onSelect={(eventKey) => props.setAccordionId(Number(eventKey))} 
        flush
        >
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
            avosclicsUrl={props.avosclicsUrl}
            twosagencyUrl={props.twosagencyUrl}
            />
            <AccordionItemHomeLinks 
            githubPersoUrl={props.githubPersoUrl} 
            linkedinPersoUrl={props.linkedinPersoUrl}
            opquastCertificateUrl={props.opquastCertificateUrl}
            cvPdf={props.cvPdf}
            githubLogo={props.githubLogo}
            linkedInLogo={props.linkedInLogo}
            opquastCertificateLogo={props.opquastCertificateLogo}
            cvLogo={props.cvLogo}
            />
        </Accordion>
    );
}

export default AccordionHome;