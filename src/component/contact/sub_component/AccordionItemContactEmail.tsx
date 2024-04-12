import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

interface AccordionItemContactEmailProps {
    email: string,
    qrcodeEmail: string
}
const AccordionItemContactEmail = (props: AccordionItemContactEmailProps) => {
    return(
        <Accordion.Item eventKey="1" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white mt-2 ms-0">
                    <span id="accordion-bullet-contact-1" className="accordion-bullet text-orange me-1 transition-03s">•</span> <span id="accordion-title-contact-1" className="accordion-title transition-03s text-space-2">E-mail</span>
                </h3>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-column justify-content-start align-items-center">
                <img className="mt-4 mb-3 image-qr-code-1" src={props.qrcodeEmail} alt="qr-code de mon e-mail." title={`qr-code de mon e-mail.`}/>
                <h4 className="text-blue-5">
                    <Link className="link-2" to={`mailto:${props.email}`} title="Lien pour m'écrire un e-mail." target="_blank" rel="noopener noreferrer">
                        {props.email}
                    </Link>
                </h4>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default AccordionItemContactEmail;