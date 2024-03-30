import Accordion from 'react-bootstrap/Accordion';
import AccordionItemHome1 from "./AccordionItemHome1";
import AccordionItemHome2 from "./AccordionItemHome2";
import AccordionItemHome3 from "./AccordionItemHome3";
import AccordionItemHome4 from "./AccordionItemHome4";


function AccordionHome(props: any) {
    return (
        <Accordion flush>
            <AccordionItemHome1 />
            <AccordionItemHome2 />
            <AccordionItemHome3 />
            <AccordionItemHome4 
            githubRPersoUrl={props.githubRPersoUrl} 
            linkedinPersoUrl={props.linkedinPersoUrl}
            opquastCertificateUrl={props.opquastCertificateUrl}
            />
        </Accordion>
    );
}

export default AccordionHome;