import Accordion from 'react-bootstrap/Accordion';
import AccordionItemContactEmail from './AccordionItemContactEmail';
import AccordionItemContactMobile from './AccordionItemContactMobile';
import AccordionItemContactForm from './AccordionItemContactForm';
import IToast from '../../../interface/IToast';

// ajouter displayToast
interface AccordionContactProps {
    setAccordionId: any;
    email: string;
    mobile: string;
    qrcodeEmail: string;
    qrcodeMobile: string;
    submitForm: (
        event: any, 
        setResult: (result: string) => void
    ) => void;
    displayToast: (toast: IToast) => void;
}
const AccordionContact = (props: AccordionContactProps) => {
    
    return (
        <Accordion 
        onSelect={(eventKey) => props.setAccordionId(Number(eventKey))} 
        flush
        className="accordion-container"
        >
            <AccordionItemContactEmail 
                email={props.email}
                qrcodeEmail={props.qrcodeEmail}
            />
            <AccordionItemContactMobile 
                mobile={props.mobile}
                qrcodeMobile={props.qrcodeMobile}
            />
            <AccordionItemContactForm
               submitForm={props.submitForm} 
               displayToast={props.displayToast}
            />
        </Accordion>
    );
}

export default AccordionContact;