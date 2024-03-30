import Accordion from 'react-bootstrap/Accordion';


function AccordionItemHome_1() {

    return (
        <Accordion.Item eventKey="0" className="mb-3">
            <Accordion.Header>
                <h3 className="title-2 text-blue-5 text-center mt-3">A propos de moi</h3>
            </Accordion.Header>
            <Accordion.Body>
                <p className="text-1-home text-blue-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </Accordion.Body>
        </Accordion.Item>
    );

}

export default AccordionItemHome_1;