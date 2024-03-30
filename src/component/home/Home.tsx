import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import AccordionHome from "./AccordionHome";
import ConfigUrl from "../../config/configUrl";
import ConfigImage from "../../config/configImage";
import { useEffect, useRef, useState } from "react";

const Home = () => {
    const accordionId = useRef(3);

    const githubRPersoUrl = ConfigUrl.GITHUB_PERSO_URL;
    const linkedinPersoUrl = ConfigUrl.LINKEDIN_PERSO_URL;
    const opquastCertificateUrl = ConfigUrl.OPQUAST_CERTIFICATE_URL;

    const githubLogo =  ConfigImage.LOGO_GITHUB;
    const linkedInLogo =  ConfigImage.LOGO_LINKEDIN;
    const opquastCertificateLogo =  ConfigImage.LOGO_OPQUAST_CERTIFICATE;
    const cvLogo =  ConfigImage.LOGO_CV;

    const setAccordionId = (id: number) => {
        accordionId.current = id;
        const accordions = document.getElementsByClassName("accordion-title");
        Array.from(accordions).forEach((accordion: any) => {
            if (accordion.id === `accordion-title-${id}`) {
                accordion.classList.add("text-orange");
            } else {
                accordion.classList.remove("text-orange");
            }
        });
        const bullets = document.getElementsByClassName("accordion-bullet");
        Array.from(bullets).forEach((bullet: any) => {
            if (bullet.id === `accordion-bullet-${id}`) {
                bullet.classList.add("text-white");
            } else {
                bullet.classList.remove("text-white");
            }
        });
    }

    useEffect(() => {
        setAccordionId(3);
    }, [])

    return (
        <div id="app-home">
            <h2 className="title-1-bold text-white text-center mt-5 text-space-3">Accueil</h2>
            <h2 className="title-1-bold text-blue-5 text-center mt-3 text-space-3">Concepteur - Développeur Fullstack</h2>
            <h3 className="title-2-normal text-blue-5 text-center mb-5 text-space-2">Symfony <span className="text-blue-4">•</span> Spring <span className="text-blue-4">•</span> React <span className="text-blue-4">•</span> Angular</h3>
            <AccordionHome 
            opquastCertificateUrl={opquastCertificateUrl} 
            githubRPersoUrl={githubRPersoUrl}
            linkedinPersoUrl={linkedinPersoUrl}
            githubLogo={githubLogo}
            linkedInLogo={linkedInLogo}
            opquastCertificateLogo={opquastCertificateLogo}
            cvLogo={cvLogo}
            accordionId={accordionId}
            setAccordionId={setAccordionId}
            />
        </div>
    );

}
export default Home;