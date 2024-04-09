import { useEffect, useRef, useState } from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';
import CustomCaptcha from './CustomCaptcha';
import ICaptcha from '../../../interface/ICaptcha';
//import ReCAPTCHA from "react-google-recaptcha";
import CaptchaService from '../../../service/CaptchaService';
import ConfigContact from '../../../config/ConfigContact';
import ConfigCaptcha from '../../../config/ConfigCaptcha';

interface AccordionItemContactMobileProps {
    submitForm: (event: any, setResult: (result: string) => void) => void;
}
const AccordionItemContactForm = (props: AccordionItemContactMobileProps) => {

    const [result, setResult] = useState(ConfigContact.RESULT_FORM_INIT);
    //const [isCaptchaVerified, isCaptchaVerifiedVerified] = useState(false);
    //const captchaRef = useRef<ICaptcha>({ id: -1, question: "", answer: -1 });
    const [captcha, setCaptcha] = useState<ICaptcha>({ id: -1, question: "", answer: -1 });
    const [captchaComment, setCaptchaComment] = useState<string>(ConfigCaptcha.RESULT_CAPTCHA_INIT);
    const isCaptchaValidRef = useRef<boolean>(false);
    //const captchaCommentRef = useRef<string>("Répondre au captcha.");
    //const MAX_TEXT_LENGTH = 30;
    const MAX_TEXT_ADDRESS_LENGTH = 400;
    const captchaServiceRef: any = useRef(null);

    useEffect(() => {
        const fct = async () => {
            captchaServiceRef.current = await CaptchaService.getInstance();
            //captchaRef.current = captchaServiceRef.current.getRandomCaptcha();
            setCaptcha(captchaServiceRef.current.getRandomCaptcha());

            //console.log("captchaRef.current", captcha);
        };
        fct();
    }, []); 

    const submitForm = (event: any, setResult: (result: string) => void) => {
        event.preventDefault();
        if (validateForm()) {
            props.submitForm(event, setResult);
            setCaptcha(captchaServiceRef.current.getRandomCaptcha());
            const inputElt = document.getElementById
            ("custom-captcha-answer-input") as HTMLInputElement;
            const zero: number = -1;
            inputElt.value = zero.toString();
        }
        else {
            setResult(ConfigContact.RESULT_FORM_NOT_VALID);
        }
    };

    const validateForm = () => {
        let toReturn: boolean = true;
        // TODO a finir -> mettre des listeners sur les inputs pour appeler cette méthode
        // TODO a finir -> mettre des validations sur les inputs
        /*
        const companyNameElt = document.getElementById("company_name") as HTMLInputElement;
        let toReturn: boolean = true;
        console.log("companyNameElt.value", companyNameElt.value);
        if (companyNameElt.value.length === 0 || companyNameElt.value.length > MAX_TEXT_LENGTH) {
            companyNameElt.classList.add("contact-form-error");
            toReturn &&= false;
        }
        */

        // TODO vérifier le captcha
        toReturn &&= isCaptchaValidRef.current;
        //console.log('toReturn', toReturn);
        return toReturn;
    };

      const setAnswerFromUser = (captchaId: number, answer: number) => {
        //console.log("answer", answer);
        const isCaptchaValid = captchaServiceRef.current.validateAnswer(captchaId, answer);
        isCaptchaValidRef.current = isCaptchaValid;
        if(isCaptchaValid) {
            //setResult("Captcha valide.");
            //captchaCommentRef.current = "Captcha valide.";
            setCaptchaComment(ConfigCaptcha.RESULT_CAPTCHA_VALID);
        }
        else {
            //setResult("Captcha invalide.");
            //captchaCommentRef.current = "Captcha invalide.";
            setCaptchaComment(ConfigCaptcha.RESULT_CAPTCHA_NOT_VALID);
        }
      }

    return(
        <Accordion.Item 
        eventKey="3" 
        className=""
        >
            <Accordion.Header>
                <h3 className="title-2-bold text-white text-center mt-2 ms-0">
                    <span id="accordion-bullet-contact-3" className="accordion-bullet text-orange me-1 transition-03s">•</span>&nbsp;<span id="accordion-title-contact-3" className="accordion-title transition-03s text-space-2">Formulaire</span>
                </h3>
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-column justify-content-start align-items-center">
                <h4 className="mt-3 mb-4 text-blue-5">
                    Formulaire de contact
                </h4>

                <Form 
                className="mb-0" 
                id="contact-form" 
                onSubmit={(e) => {
                    submitForm(e, setResult);
                }}
                >
                    <Form.Group 
                    className="mb-3" 
                    >
                        <Form.Label
                        className="contact-form-label mb-1"
                        >
                            Nom de votre entreprise
                        </Form.Label>
                        <Form.Control 
                        id="company_name"
                        className="contact-form-control"
                        name="company_name" 
                        type="text" 
                        placeholder="Saisir le nom de votre entreprise (facultatif)"
                        />
                    </Form.Group>
                    <Form.Group 
                    className="mb-3" 
                    >
                        <Form.Label
                        className="contact-form-label mb-1"
                        >
                            Prénom
                        </Form.Label>
                        <Form.Control 
                        id="first_name"
                        className="contact-form-control"
                        name="first_name" 
                        type="text" 
                        placeholder="Saisir votre prénom (obligatoire)" 
                        required
                        />
                    </Form.Group>
                    <Form.Group 
                    className="mb-3"
                    >
                        <Form.Label
                        className="contact-form-label mb-1"
                        >
                            Nom
                        </Form.Label>
                        <Form.Control 
                        id="last_name"
                        className="contact-form-control"
                        name="last_name" 
                        type="text" 
                        placeholder="Saisir votre nom (obligatoire)" 
                        required
                        />
                    </Form.Group>
                    <Form.Group 
                    className="mb-3" 
                    >
                        <Form.Label
                        className="contact-form-label mb-1"
                        >
                            Adresse e-mail
                        </Form.Label>
                        <Form.Control 
                        id="email"
                        className="contact-form-control"
                        name="email" 
                        type="email" 
                        placeholder="Saisir votre email (obligatoire)" 
                        required 
                        />
                        <Form.Text 
                        className="text-muted contact-form-text"
                        >
                            Votre adresse e-mail ne sera pas diffusée.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group 
                    className="mb-3" 
                    >
                        <Form.Label
                        className="contact-form-label mb-1"
                        >
                            Téléphone
                        </Form.Label>
                        <Form.Control 
                        id="phone_number"
                        className="contact-form-control"
                        name="phone_number" 
                        type="tel" 
                        placeholder="Saisir votre numéro de téléphone (facultatif)" 
                        />
                        <Form.Text 
                        className="text-muted contact-form-text"
                        >
                            Votre numéro de téléphone ne sera pas diffusé.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group 
                    className="mb-3" 
                    >
                        <Form.Label
                        className="contact-form-label mb-1"
                        >
                            Message
                        </Form.Label>
                        <Form.Control 
                        id="message"
                        as="textarea"
                        rows={3}
                        maxLength={MAX_TEXT_ADDRESS_LENGTH}
                        className="contact-form-control"
                        name="message" 
                        type="textarea" 
                        placeholder={`Saisir un message (obligatoire - max. ${MAX_TEXT_ADDRESS_LENGTH} caractères)`}
                        required
                        />
                    </Form.Group>
                    <CustomCaptcha
                        captcha={captcha}
                        captchaComment={captchaComment}
                        setAnswerFromUser={setAnswerFromUser}
                    />
                    <div 
                    className="d-flex justify-content-center mt-4"
                    >
                        <Button 
                        type="submit"
                        className="btn-1 btn-sm bg-blue-4 text-white">Envoyer</Button>
                    </div>

                </Form>

                <div 
                className="d-flex justify-content-center mt-2 mb-1"
                >
                        <p className={`text-center text-size-0-75 text-blue-5 mt-0 ${result === ConfigContact.RESULT_FORM_DONE ? 'text-success-dark-2 transition-03s' : 'text-blue-5 transition-03s'}`}>
                            <strong>{result}</strong>
                        </p>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default AccordionItemContactForm;

/*

                    <div
                    className="d-flex justify-content-center mt-5"
                    >
                        <ReCAPTCHA
                        data-theme="dark"
                        sitekey="6LfIaLMpAAAAAJ6oRc1QIL4fRwGqeHlF27mOlYHU"
                        onChange={handleReCAPTCHAChange}
                        />
                    </div>

                    */