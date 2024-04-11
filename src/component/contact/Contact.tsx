import {  useRef } from "react";
import AccordionContact from "./sub_component/AccordionContact";
import ConfigContact from "../../config/ConfigContact";
import ConfigImage from "../../config/ConfigImage";
import MailService from '../../service/MailService';

const Contact = () => {
    const email = ConfigContact.EMAIL_PERSO;
    const mobile = ConfigContact.MOBILE_PERSO;
    const qrcodeEmail = ConfigImage.QRCODE_EMAIL;
    const qrcodeMobile = ConfigImage.QRCODE_MOBILE;
    const accordionId = useRef<number>(0);
    //const captchasRef = useRef<ICaptcha[]>([]);
    //const jsonService = JsonService.getInstance();
    const mailService = MailService.getInstance();
    //const submitForm = mailService.submitForm; 
   

    // ajouter displayToast
    const submitFormWrapper = (
        event: any, 
        setResult: (result: string) => void,
        displayToast: (
            title: string,
            subtitle: string,
            message: string,
            mode: string
        ) => void

    ) => {
        const fct = async () => {
            await (await mailService).submitForm(event, setResult, displayToast);
        };
        fct();
    }
    //captchasRef.current = jsonServiceRef.current.findAllCaptchas();

    const setAccordionId = (id: number): void => {
        accordionId.current = id;
        const accordions = document.getElementsByClassName("accordion-title");
        Array.from(accordions).forEach((accordion: any) => {
            if (accordion.id === `accordion-title-contact-${id}`) {
                accordion.classList.add("text-orange");
                accordion.classList.remove("text-white");
            } else {
                accordion.classList.add("text-white");
                accordion.classList.remove("text-orange");
            }
        });
        const bullets = document.getElementsByClassName("accordion-bullet");
        Array.from(bullets).forEach((bullet: any) => {
            if (bullet.id === `accordion-bullet-contact-${id}`) {
                bullet.classList.add("text-white");
                bullet.classList.remove("text-orange");
            } else {
                bullet.classList.add("text-orange");
                bullet.classList.remove("text-white");
            }
        });  
}

    return (
        <div id="app-contact">
            <h2 className="title-1-bold text-white text-center text-space-3 mb-5">
                Pour me contacter
            </h2>
            <AccordionContact 
                setAccordionId={setAccordionId} 
                email={email}
                mobile={mobile}
                qrcodeEmail={qrcodeEmail}
                qrcodeMobile={qrcodeMobile}
                submitForm={submitFormWrapper}
            />
        </div>
    );

}
export default Contact;