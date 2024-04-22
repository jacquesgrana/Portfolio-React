import { useEffect, useRef, useState } from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';
import CustomCaptcha from './CustomCaptcha';
import ICaptcha from '../../../interface/ICaptcha';
//import ReCAPTCHA from "react-google-recaptcha";
import CaptchaService from '../../../service/CaptchaService';
import ConfigContact from '../../../config/ConfigContact';
import ConfigCaptcha from '../../../config/ConfigCaptcha';
//import { Toast } from 'react-bootstrap';
import FormService from '../../../service/FormService';
import IToast from '../../../interface/IToast';

// ajouter displayToast
interface AccordionItemContactMobileProps {
    submitForm: (event: any,
         setResult: (result: string) => void
    ) => void;
    displayToast: (toast: IToast) => void
}
const AccordionItemContactForm = (props: AccordionItemContactMobileProps) => {
    const MAX_TEXT_ADDRESS_LENGTH = 400;
    const MAX_TEXT_LENGTH = 40;

    const [result, setResult] = useState(ConfigContact.RESULT_FORM_INIT);
    const [captcha, setCaptcha] = useState<ICaptcha>({ id: -1, question: "", answer: -1 });
    const [captchaComment, setCaptchaComment] = useState<string>(ConfigCaptcha.RESULT_CAPTCHA_INIT);
    //const [showToast, setShowToast] = useState(false);
/*
    const titleToastRef = useRef<string>("Formulaire envoyé.");
    const subtitleToastRef = useRef<string>("Succès.");
    const messageToastRef = useRef<string>("Votre formulaire a été envoyé avec succès.");
    const modeToastRef = useRef<string>("success");
*/

    const isCaptchaValidRef = useRef<boolean>(false);
    const captchaServiceRef: any = useRef(null);
    const formServiceRef: any = useRef(null);

    useEffect(() => {
        const fct = async () => {
            captchaServiceRef.current = await CaptchaService.getInstance();
            formServiceRef.current = await FormService.getInstance();
            reset();
        };
        fct();
    }, []); 

    const reset = () => {
        let randomCaptcha: ICaptcha = { id: -1, question: "", answer: -1 };
        randomCaptcha = captchaServiceRef.current.getRandomCaptcha();
        //console.log("captchaServiceRef.current ", captchaServiceRef.current);
        //console.log("randomCaptcha ", randomCaptcha);
       
        setCaptcha(randomCaptcha);
        const inputElt = document.getElementById
        ("custom-captcha-answer-input") as HTMLInputElement;
        const zero: number = 0;
        inputElt.value = zero.toString();
        setCaptchaComment(ConfigCaptcha.RESULT_CAPTCHA_INIT);
        setResult(ConfigContact.RESULT_FORM_INIT);
    }

    const submitForm = (event: any, setResult: (result: string) => void) => {
        event.preventDefault();
        if (validateForm()) {
            props.submitForm(event, setResult);
            reset();
        }
        else {
            // ajouter displayToast
            if(!isCaptchaValidRef.current) formServiceRef.current.displayToastCaptachaNotValid(props.displayToast);
            setResult(ConfigContact.RESULT_FORM_NOT_VALID);
            reset();
        }
    };

    const validateForm = () => {
        let toReturn: boolean = true;
        toReturn &&= isCaptchaValidRef.current;
        return toReturn;
    };

      const setAnswerFromUser = (captchaId: number, answer: number) => {
        const isCaptchaValid = captchaServiceRef.current.validateAnswer(captchaId, answer);
        isCaptchaValidRef.current = isCaptchaValid;
        if(isCaptchaValid) {
            setCaptchaComment(ConfigCaptcha.RESULT_CAPTCHA_VALID);
        }
        else {
            setCaptchaComment(ConfigCaptcha.RESULT_CAPTCHA_NOT_VALID);
        }
      }

    return(
        <>
            <Accordion.Item 
            eventKey="3" 
            className=""
            >
                <Accordion.Header>
                    <h3 className="title-2-bold text-white mt-2 ms-0">
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
                            maxLength={MAX_TEXT_LENGTH}
                            placeholder="Saisir le nom de votre entreprise (facultatif)"
                            title="Saisir le nom de votre entreprise (facultatif)"
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
                            maxLength={MAX_TEXT_LENGTH}
                            placeholder="Saisir votre prénom (obligatoire)" 
                            title="Saisir votre prénom (obligatoire)" 
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
                            maxLength={MAX_TEXT_LENGTH}
                            placeholder="Saisir votre nom (obligatoire)" 
                            title="Saisir votre nom (obligatoire)"
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
                            maxLength={MAX_TEXT_LENGTH}
                            placeholder="Saisir votre email (obligatoire)"
                            title="Saisir votre email (obligatoire)" 
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
                            maxLength={MAX_TEXT_LENGTH}
                            placeholder="Saisir votre numéro de téléphone (facultatif)"
                            title="Saisir votre numéro de numéro (facultatif)" 
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
                            title={`Saisir un message (obligatoire - max. ${MAX_TEXT_ADDRESS_LENGTH} caractères)`}
                            required
                            />
                        </Form.Group>
                        <CustomCaptcha
                            captcha={captcha !== undefined ? captcha : {id: 0, question: "Combien font 6 fois 2 ?", answer: 12}}
                            captchaComment={captchaComment}
                            setAnswerFromUser={setAnswerFromUser}
                        />
                        <div 
                        className="d-flex justify-content-center mt-4"
                        >
                            <Button 
                            title="Envoyer le formulaire."
                            type="submit"
                            className="btn-1 btn-sm bg-blue-4 text-white"
                            >
                                Envoyer
                            </Button>
                        </div>

                    </Form>

                    <div 
                    className="d-flex justify-content-center mt-2 mb-1"
                    >
                            <p className={`text-center text-size-0-75 mt-0 transition-03s ${result === ConfigContact.RESULT_FORM_DONE ? 'text-success-dark-2 transition-03s' : 'text-blue-5'}`}>
                                <strong>{result}</strong>
                            </p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>

        </>
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

                    <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleShowToast();
                    }}
                    >Show toast</button>


                <CustomToast
                show={showToast}
                toast={toastRef.current}
                toggleShow={toggleShowToast}
            />
                    */