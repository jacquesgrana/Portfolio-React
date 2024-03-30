import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import AccordionHome from "./AccordionHome";
function Home() {
    
    return (
        <div id="app-home">
            <h2 className="title-1 text-blue-5 text-center mt-5 mb-5">Accueil</h2>
            <AccordionHome />
        </div>
    );

}
export default Home;