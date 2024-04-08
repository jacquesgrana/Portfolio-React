import { useEffect, useState } from "react";
import ICaptcha from "../../../interface/ICaptcha";

interface CustomCaptchaProps {
    captcha: ICaptcha;
    captchaComment: string
    setAnswerFromUser: (answer: number, captchaId: number) => void;
}
const CustomCaptcha = ({captcha, captchaComment, setAnswerFromUser}: CustomCaptchaProps) => {
        
        const [captchaState, setCaptchaState] = useState<ICaptcha>({id: -1, question: "", answer: -1});
        //faire un useEffect a l'init qui met un listener si besoin sur l'input de la réponse

        // fonction de l'evenemnt onchange
            // récupérer la réponse
            // appeler callback setAnswerFromUser(answer)

            /*
    useEffect(() => {
        const inputElt = document.getElementById
        ("custom-captcha-answer-input");
        if (inputElt) {
            inputElt.addEventListener("change", (event: any) => {
                props.setAnswerFromUser(props.captcha.id, Number(event.target.value));
                //console.log("event.target.value", event.target.value);
            });
        }
    }, []);
    */

    useEffect(() => {
        setCaptchaState(() => {
            const inputElt = document.getElementById
            ("custom-captcha-answer-input");
            if (inputElt) {
                inputElt.addEventListener("change", (event: any) => {
                    setAnswerFromUser(captcha.id, Number(event.target.value));
                    //console.log("rops.captcha.id", props.captcha.id);
                });
            }
            return captcha
        });
    } , [captcha, setAnswerFromUser]);

    return(
            <div id="custom-captcha-container" className="d-flex justify-content-start align-items-center flex-column">
                <p 
                className="text-center text-size-1 text-blue-5 mb-1"
                >
                    <strong>Répondre à la question</strong>
                </p>
                <div id="custom-captcha-question-container" className="custom-captcha-container mb-3">
                    <p className="text-center text-blue-5 mb-1">Question</p>
                    <div className="custom-captcha-input mb-0">
                        <p className="text-center text-blue-5"><strong>{captchaState.question}</strong></p>
                    </div>
                </div>
                <div id="custom-captcha-answer-container" className="custom-captcha-container mt-0">
                    <p className="text-center text-blue-5 mb-1">Réponse</p>
                    <input 
                        id = "custom-captcha-answer-input"
                        type="number" 
                        placeholder="-1" 
                        min="-1"
                        max="50"
                        step="1"
                        onKeyDown={(e) => e.preventDefault()}
                        className="custom-captcha-input text-blue-5"
                    />
                        
                </div>
                <p className={`text-center text-blue-5 text-size-0-75  mt-2 ${captchaComment === 'Captcha valide.' ? 'text-success-dark-2' : 'text-danger-dark-1'}`}>
                    <strong>{captchaComment}</strong>
                </p>
            </div>
    );
}

export default CustomCaptcha;