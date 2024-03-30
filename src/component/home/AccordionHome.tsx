import Accordion from 'react-bootstrap/Accordion';
import AccordionItemHome1 from "./AccordionItemHome1";
import AccordionItemHome2 from "./AccordionItemHome2";
import AccordionItemHome3 from "./AccordionItemHome3";
import AccordionItemHome4 from "./AccordionItemHome4";


const AccordionHome = (props: any) => {
    return (
        <Accordion defaultActiveKey="3" onSelect={(eventKey) => props.setAccordionId(eventKey)} flush>
            <AccordionItemHome1 
                accordionId={props.accordionId}
                setAccordionId={props.setAccordionId}
            />
            <AccordionItemHome2 
                accordionId={props.accordionId}
                setAccordionId={props.setAccordionId}
            />
            <AccordionItemHome3 
                accordionId={props.accordionId}
                setAccordionId={props.setAccordionId}
            />
            <AccordionItemHome4 
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