import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";


const AccordionItemHomeDiplomas = (props: any) => {
    return (
        <Accordion.Item eventKey="1" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white text-center mt-2 ms-0"><span id="accordion-bullet-1" className="accordion-bullet text-orange me-1 transition-03s">•</span>  <span id="accordion-title-1" className="accordion-title transition-03s text-space-2">Formation & diplômes</span></h3>
            </Accordion.Header>
            <Accordion.Body >
                <ul className ="mt-2">
                    <li className="text-1-home text-blue-5">
                        <p><strong>Juin 2023 / Mars 2024 : Formation Concepteur - Développeur d'Applications PHP -</strong> RNCP 6 - DIGINAMIC <strong>
                            <br />Titre Obtenu</strong>
                        <ul>
                            <li><strong>Conception :</strong> Méthode Merise - UML - Design patterns.</li>
                            <li><strong>Back-End :</strong> Symfony avec Doctrine, NodeJs, Drupal 10.</li>
                            <li><strong>Front-End :</strong> React avec Bootstrap, Sass.</li>
                        </ul>
                        </p>
                    </li>
                    <li className="text-1-home text-blue-5">
                        <p>
                            <strong>Octobre 2022 : Certification Opquast</strong> (bonnes pratiques du web), <strong>note : 910/1000 - grade Expert.</strong>
                            <br />
                            <strong>Réf. certificat :</strong> MQW-V4-2020 - Lien : <Link className="link-1" to={props.opquastCertificateUrl} title="Lien vers mon Certificat Opquast" target="_blank" rel="noopener noreferrer">https://oqs.li/T5D2LW</Link>

                        </p>
                    </li>
                    <li className="text-1-home text-blue-5">
                        <p>
                            <strong>Mai / Octobre 2022
                            Formation Développeur Java FullStack -</strong> DIGINAMIC
                            <ul>
                                <li><strong>Back-End :</strong> Spring-boot Java avec Maven, JPA/Hibernate, Lombok, etc.</li>
                                <li><strong>Front-End :</strong> Angular avec utilisation de Bootstrap, Compodoc, Jasmine, Karma, etc.</li>
                            </ul>
                        </p>
                    </li>
                    <li className="text-1-home text-blue-5">
                        <p>
                            <strong>2019 / 2021 :</strong> Obtention des Unités d'Enseignements du CNAM suivantes :
                            <ul>
                                <li>
                                    <strong>NFA003 :</strong> Principes et fonctionnement des systèmes d'exploitation
                                </li>
                                <li>
                                    <strong>NFA008 :</strong> Bases de données
                                </li>
                                <li>
                                    <strong>NFA011 :</strong> Développement d'applications avec les bases de données
                                </li>

                                <li>
                                    <strong>NFA031 :</strong> Programmation Java : notions de base
                                </li>
                                <li>
                                    <strong>NFA032 :</strong> Programmation Java : programmation objet
                                </li>
                                <li>
                                    <strong>NFA035 :</strong> Programmation Java : bibliothèques et patterns
                                </li>

                                <li>
                                    <strong>NFA016 :</strong> Architecture du web et développement client
                                </li>
                                <li>
                                    <strong>NFA017 :</strong> Développement web : sites dynamiques et développement serveur
                                </li>
                                <li>
                                    <strong>NFA022 :</strong> Principes et programmation système et réseau pour smart-phones
                                </li>
                                <li>
                                    <strong>NFA025 :</strong> Mise en oeuvre de la programmation de smart-phones et tablettes tactiles
                                </li>
                                <li>
                                    <strong>NFA024 :</strong> Projet application mobile : mise en pratique
                                </li>
                            </ul>
                        </p>
                    </li>
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    );

}

export default AccordionItemHomeDiplomas;