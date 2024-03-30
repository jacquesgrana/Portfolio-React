import Accordion from 'react-bootstrap/Accordion';


const AccordionItemHome1 = (props: any) => {

    return (
        <Accordion.Item eventKey="0" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white text-center mt-3 ms-0"><span id="accordion-bullet-0" className="accordion-bullet text-orange me-1 transition-03s">•</span> <span id="accordion-title-0" className="accordion-title transition-03s text-space-2">A propos de moi</span></h3>
            </Accordion.Header>
            <Accordion.Body >
                <p className="text-1-home text-blue-5 text-justify">
                <strong>Infographiste</strong> pendant plus de 20 ans, j'ai bifurqué en 2008 vers la <strong>maintenance informatique</strong>, pour finir par me reconvertir, à partir de 2019, vers le <strong>développement logiciel.</strong>
                </p>
            </Accordion.Body>
        </Accordion.Item>
    );

}

export default AccordionItemHome1;