import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

interface AccordionItemHomeExperiencesProps {
    avosclicsUrl: string;
    twosagencyUrl: string;
}

const AccordionItemHomeExperiences = (props: AccordionItemHomeExperiencesProps) => {

    return (
        <Accordion.Item eventKey="3" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white mt-2 ms-0"><span id="accordion-bullet-3" className="accordion-bullet text-orange me-1 transition-03s">•</span> <span id="accordion-title-3" className="accordion-title transition-03s text-space-2">Expériences</span></h3>
            </Accordion.Header>
            <Accordion.Body >
            <ul className="ul-list-1 mt-2">
                <li className="text-1-home text-blue-5 text-justify">
                <strong><span className="text-dark-orange">Décembre 2023 &rarr; Mars 2024 :</span> Stage en entreprise,</strong> 
                <br />Sté <strong><Link className="link-2" to={props.twosagencyUrl} title="Lien vers le site de 2S Agency." target="_blank" rel="noopener noreferrer">2S Agency</Link></strong> - Castelnau.
                <br />
                <em>
                Maintenance/Evolution d’un back-end Symfony avec son interface d’administration en Twig + React et qui communique en json avec des applications Android/IOs.
                </em>
                </li>
                <li className="text-1-home text-blue-5 text-justify">
                <strong><span className="text-dark-orange">Octobre 2022 :</span> Stage en entreprise,</strong>
                <br />
                Sté <strong><Link className="link-2" to={props.avosclicsUrl} title="Lien vers la page linkedin de Avosclics." target="_blank" rel="noopener noreferrer">A vos Clics</Link></strong> - durée d'un mois - Distanciel.
                <br />
                <em>
                Réalisation d'une boutique Web en Angular avec Material et Bootstrap.
                </em>
                </li>
            </ul>
            </Accordion.Body>
        </Accordion.Item>
    );

}

export default AccordionItemHomeExperiences;