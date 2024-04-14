import AccordionHome from "./sub_component/AccordionHome";
import ConfigUrl from "../../config/ConfigUrl";
import ConfigImage from "../../config/ConfigImage";
import ConfigPdf from "../../config/ConfigPdf";
import { useEffect, useRef } from "react";
//import { useOutletContext } from "react-router-dom";

const Home = () => {
    const accordionId = useRef(3);

    const githubPersoUrl = ConfigUrl.GITHUB_PERSO_URL;
    const linkedinPersoUrl = ConfigUrl.LINKEDIN_PERSO_URL;
    const opquastCertificateUrl = ConfigUrl.OPQUAST_CERTIFICATE_URL;
    const opquastCertificationUrl = ConfigUrl.OPQUAST_CERTIFICATION_URL;
    const diginamicUrl = ConfigUrl.DIGINAMIC_URL;
    const cnamUrl = ConfigUrl.CNAM_URL;
    const avosclicsUrl = ConfigUrl.AVOSCLICS_URL;
    const twosagencyUrl = ConfigUrl.TWOSAGENCY_URL;

    const githubLogo =  ConfigImage.LOGO_GITHUB;
    const linkedInLogo =  ConfigImage.LOGO_LINKEDIN;
    const opquastCertificateLogo =  ConfigImage.LOGO_OPQUAST_CERTIFICATE;
    const cvLogo =  ConfigImage.LOGO_CV;
    const diginamicLogo =  ConfigImage.LOGO_DIGINAMIC;
    const cnamLogo =  ConfigImage.LOGO_CNAM;
    const opquastLogo =  ConfigImage.LOGO_OPQUAST;

    const cvPdf = ConfigPdf.CV_PDF;
/*
    const { message }: { message: string } = useOutletContext();
    //console.log("props", props);
    console.log('message :', message);
*/
    const setAccordionId = (id: number): void => {
            accordionId.current = id;
            const accordions = document.getElementsByClassName("accordion-title");
            Array.from(accordions).forEach((accordion: any) => {
                if (accordion.id === `accordion-title-${id}`) {
                    accordion.classList.add("text-orange");
                    accordion.classList.remove("text-white");
                } else {
                    accordion.classList.add("text-white");
                    accordion.classList.remove("text-orange");
                }
            });
            const bullets = document.getElementsByClassName("accordion-bullet");
            Array.from(bullets).forEach((bullet: any) => {
                if (bullet.id === `accordion-bullet-${id}`) {
                    bullet.classList.add("text-white");
                    bullet.classList.remove("text-orange");
                } else {
                    bullet.classList.add("text-orange");
                    bullet.classList.remove("text-white");
                }
            });  
    }

    useEffect(() => {
        setAccordionId(4);
    }, [])

    return (
        <div id="app-home">
            <h2 className="title-1-bold text-white text-center text-space-3">Accueil</h2>
            <h2 className="title-1-bold text-blue-5 text-center mt-3 text-space-3">Concepteur - Développeur Fullstack</h2>
            <h3 className="title-2-normal text-blue-5 text-center mb-5 text-space-2">Symfony <span className="text-blue-4">•</span> Spring <span className="text-blue-4">•</span> React <span className="text-blue-4">•</span> Angular</h3>
            <AccordionHome 
            opquastCertificateUrl={opquastCertificateUrl} 
            opquastCertificationUrl={opquastCertificationUrl}
            githubPersoUrl={githubPersoUrl}
            linkedinPersoUrl={linkedinPersoUrl}
            diginamicUrl={diginamicUrl}
            cnamUrl={cnamUrl}
            avosclicsUrl={avosclicsUrl}
            twosagencyUrl={twosagencyUrl}
            cvPdf={cvPdf}
            githubLogo={githubLogo}
            linkedInLogo={linkedInLogo}
            opquastCertificateLogo={opquastCertificateLogo}
            cvLogo={cvLogo}
            diginamicLogo={diginamicLogo}
            cnamLogo={cnamLogo}
            opquastLogo={opquastLogo}
            setAccordionId={setAccordionId}
            />
        </div>
    );

}
export default Home;