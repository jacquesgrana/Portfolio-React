import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

//import githubLogo from './../../image/github_logo.png';

const AccordionItemHome3 = (props: any) => {

    return (
        <Accordion.Item eventKey="2" className="mb-2">
            <Accordion.Header>
                <h3 className="title-2-bold text-white text-center mt-3 ms-0"><span id="accordion-bullet-2" className="accordion-bullet text-orange me-1 transition-03s">•</span> <span id="accordion-title-2" className="accordion-title transition-03s text-space-2">Expériences</span></h3>
            </Accordion.Header>
            <Accordion.Body >
                <p className="text-1-home text-blue-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.<br />
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

export default AccordionItemHome3;