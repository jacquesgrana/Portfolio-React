import Accordion from 'react-bootstrap/Accordion';
import AccordionItemContactEmail from './AccordionItemContactEmail';
import AccordionItemContactMobile from './AccordionItemContactMobile';

interface AccordionContactProps {
    setAccordionId: any,
    email: string,
    mobile: string,
    qrcodeEmail: string,
    qrcodeMobile: string
}
const AccordionContact = (props: AccordionContactProps) => {
    
    return (
        <Accordion onSelect={(eventKey) => props.setAccordionId(Number(eventKey))} flush>
            <AccordionItemContactEmail 
            email={props.email}
            qrcodeEmail={props.qrcodeEmail}
            />
            <AccordionItemContactMobile 
            mobile={props.mobile}
            qrcodeMobile={props.qrcodeMobile}
            />
        </Accordion>
    );
}

export default AccordionContact;