import Accordion from 'react-bootstrap/Accordion';
import AccordionItemHome_1 from "./AccordionItemHome_1";
import AccordionItemHome_2 from "./AccordionItemHome_2";
import AccordionItemHome_3 from "./AccordionItemHome_3";

function AccordionHome() {
    return (
        <Accordion flush>
            <AccordionItemHome_1 />
            <AccordionItemHome_2 />
            <AccordionItemHome_3 />
        </Accordion>
    );
}

export default AccordionHome;