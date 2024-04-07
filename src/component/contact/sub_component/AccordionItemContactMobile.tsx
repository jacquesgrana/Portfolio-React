import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

interface AccordionItemContactMobileProps {
    mobile: string,
    qrcodeMobile: string
}
const AccordionItemContactMobile = (props: AccordionItemContactMobileProps) => {
    return(
        <Accordion.Item eventKey="2" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white text-center mt-2 ms-0"><span id="accordion-bullet-contact-2" className="accordion-bullet text-orange me-1 transition-03s">•</span>&nbsp;<span id="accordion-title-contact-2" className="accordion-title transition-03s text-space-2">Mobile</span></h3>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-column justify-content-start align-items-center">
                <img className="mt-4 mb-3 image-qr-code-1" src={props.qrcodeMobile} alt="qr-code de mon numéro de mobile." title={`qr-code de mon numéro de mobile.`}/>
                <h4 className="text-blue-5">
                    <Link className="link-2" to={`tel:${props.mobile}`} title="Lien pour me téléphoner." target="_blank" rel="noopener noreferrer">
                        {props.mobile}
                    </Link>
                </h4>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default AccordionItemContactMobile;