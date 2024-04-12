import Accordion from 'react-bootstrap/Accordion';

const AccordionItemHomeAboutMe = (props: any) => {

    return (
        <Accordion.Item eventKey="1" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white mt-2 ms-0"><span id="accordion-bullet-1" className="accordion-bullet text-orange me-1 transition-03s">•</span> <span id="accordion-title-1" className="accordion-title transition-03s text-space-2">A propos de&nbsp;moi</span></h3>
            </Accordion.Header>
            <Accordion.Body >
                <ul className="ul-list-1 mt-2">
                    <li className="text-1-home text-blue-5 text-justify"><strong>Infographiste / Technicien PAO</strong> pendant plus de 20 ans, j'ai bifurqué en 2008 vers la <strong>maintenance informatique</strong>, pour finir par me reconvertir, à partir de 2019, vers le <strong>développement logiciel.</strong>
                    </li>
                    <li className="text-1-home text-blue-5 text-justify">
                    <strong>Passionné d'informatique,</strong> j'ai acquis, au fil des ans, des connaissances dans divers domaines. Par exemple, j'ai fait l'apprentissage, en autodidacte, des principaux logiciels de <strong>PAO</strong> (Photoshop, Illustrator, InDesign), mais aussi de l'installation et la configuration des postes sous <strong>Linux</strong> (Ubuntu/Debian - depuis 2011).
                    </li>
                    <li className="text-1-home text-blue-5 text-justify">
                    <strong>Depuis 2019,</strong> j'ai entamé une reconversion vers le Développement Logiciel, que j'ai validé en obtenant le titre de <strong>Concepteur - Développeur d'Applications PHP</strong> (RNCP 6 - DIGINAMIC - mars 2024).
                    </li>
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default AccordionItemHomeAboutMe;