import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

interface AccordionItemHomeDiplomasProps {
    opquastCertificationUrl: string;
    opquastCertificateUrl: string;
    diginamicUrl: string;
    cnamUrl: string;
    opquastLogo: string;
    cnamLogo: string;
    diginamicLogo: string;
}

const AccordionItemHomeDiplomas = (props: AccordionItemHomeDiplomasProps) => {
    return (
        <Accordion.Item eventKey="1" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white text-center mt-2 ms-0"><span id="accordion-bullet-1" className="accordion-bullet text-orange me-1 transition-03s">•</span>  <span id="accordion-title-1" className="accordion-title transition-03s text-space-2">Formation & diplômes</span></h3>
            </Accordion.Header>
            <Accordion.Body >
                <ul className ="ul-list-1 mt-2">
                    <li className="text-1-home text-blue-5">
                        <div><strong><span className="text-dark-orange">Juin 2023 &rarr; Mars 2024 :</span> Formation Concepteur - Développeur d'Applications PHP -</strong> RNCP 6 - <Link className="link-2" to={props.diginamicUrl} title="Lien vers le site de Diginamic." target="_blank" rel="noopener noreferrer">DIGINAMIC</Link> <strong>
                            <br /><span className="text-dark-orange">Titre Obtenu</span></strong>
                        <ul className ="ul-list-2">
                            <li className="text-1-home text-blue-5"><strong>Conception :</strong> Méthode Merise - UML - Design patterns.</li>
                            <li className="text-1-home text-blue-5"><strong>Back-End :</strong> Symfony avec Doctrine, NodeJs, Drupal 10.</li>
                            <li className="text-1-home text-blue-5"><strong>Front-End :</strong> React avec Bootstrap, Sass.</li>
                        </ul>
                        </div>
                    </li>
                    <li className="text-1-home text-blue-5">
                        <p>
                            <strong><span className="text-dark-orange">Octobre 2022 :</span> <Link className="link-2" to={props.opquastCertificationUrl} title="Lien vers la Certification Opquast." target="_blank" rel="noopener noreferrer">Certification Opquast</Link></strong> (bonnes pratiques du web), <strong>note :</strong> 910/1000 - <strong>grade Expert.</strong>
                            <br />
                            <strong>Réf. certificat :</strong> MQW-V4-2020 - <strong>Lien :</strong> <Link className="link-2" to={props.opquastCertificateUrl} title="Lien vers mon Certificat Opquast." target="_blank" rel="noopener noreferrer">https://oqs.li/T5D2LW</Link>

                        </p>
                    </li>
                    <li className="text-1-home text-blue-5">
                        <div>
                            <strong><span className="text-dark-orange">Mai &rarr; Octobre 2022 : </span>
                            Formation Développeur Java FullStack -</strong> <Link className="link-2" to={props.diginamicUrl} title="Lien vers le site de Diginamic." target="_blank" rel="noopener noreferrer">DIGINAMIC</Link>
                            <ul className ="ul-list-2">
                                <li className="text-1-home text-blue-5"><strong>Back-End :</strong> Spring-boot Java avec Maven, JPA/Hibernate, Lombok, etc.</li>
                                <li className="text-1-home text-blue-5"><strong>Front-End :</strong> Angular avec utilisation de Bootstrap, Compodoc, Jasmine, Karma, etc.</li>
                            </ul>
                        </div>
                    </li>
                    <li className="text-1-home text-blue-5">
                        <div>
                            <strong><span className="text-dark-orange">2019 &rarr; 2021 :</span></strong> Obtention des Unités d'Enseignements du <Link className="link-2" to={props.cnamUrl} title="Lien vers le site du CNAM." target="_blank" rel="noopener noreferrer">CNAM</Link> suivantes :
                            <ul className ="ul-list-2">
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA003 :</strong> Principes et fonctionnement des systèmes d'exploitation,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA008 :</strong> Bases de données,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA011 :</strong> Développement d'applications avec les bases de données,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA031 :</strong> Programmation Java : notions de base,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA032 :</strong> Programmation Java : programmation objet,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA035 :</strong> Programmation Java : bibliothèques et patterns,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA016 :</strong> Architecture du web et développement client,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA017 :</strong> Développement web : sites dynamiques et développement serveur,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA022 :</strong> Principes et programmation système et réseau pour smart-phones et tablettes tactiles,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA025 :</strong> Mise en oeuvre de la programmation de smart-phones et tablettes tactiles,
                                </li>
                                <li className="text-1-home text-blue-5">
                                    <strong>NFA024 :</strong> Projet application mobile : mise en pratique.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div id="div-logo-diplomas" className="mt-2">

                    <Link className="" to={props.diginamicUrl} title="Lien vers le site de Diginamic." target="_blank" rel="noopener noreferrer">
                        <span className="logo-container-accordion-home">
                            <img src={props.diginamicLogo} alt="logo de Diginamic" className="logo-accordion-diginamic-home" />
                            <span className="link-2">DIGINAMIC</span>
                        </span>
                    </Link>
                    <Link className="" to={props.cnamUrl} title="Lien vers le site du CNAM." target="_blank" rel="noopener noreferrer">
                        <span className="logo-container-accordion-home">
                            <img src={props.cnamLogo} alt="logo du CNAM" className="logo-accordion-cnam-home" />
                            <span className="link-2">CNAM</span>
                        </span>
                    </Link>
                    <Link className="" to={props.opquastCertificationUrl} title="Lien vers le site d'OPQUAST." target="_blank" rel="noopener noreferrer">
                        <span className="logo-container-accordion-home">
                            <img src={props.opquastLogo} alt="logo d'OPQUAST'" className="logo-accordion-opquast-home" />
                            <span className="link-2">OPQUAST</span>
                        </span>
                    </Link>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );

}

export default AccordionItemHomeDiplomas;