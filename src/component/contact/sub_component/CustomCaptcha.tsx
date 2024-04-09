import { useEffect, useState } from "react";
import ICaptcha from "../../../interface/ICaptcha";
import ConfigCaptcha from "../../../config/ConfigCaptcha";

interface CustomCaptchaProps {
    captcha: ICaptcha;
    captchaComment: string
    setAnswerFromUser: (answer: number, captchaId: number) => void;
}
const CustomCaptcha = ({captcha, captchaComment, setAnswerFromUser}: CustomCaptchaProps) => {
        
    const INPUT_DEFAULT_VALUE : number = 0;
    const INPUT_MIN_VALUE : number = 0;
    const INPUT_MAX_VALUE : number = 16;
    const INPUT_STEP_VALUE : number = 1;

    //const [answer, setAnswer] = useState<number>(INPUT_DEFAULT_VALUE);

    const [captchaState, setCaptchaState] = useState<ICaptcha>({id: -1, question: "", answer: -1});

    /*
    useEffect(() => {
        setCaptchaState(() => {
            const inputElt = document.getElementById
            ("custom-captcha-answer-input");
            if (inputElt) {
                inputElt.addEventListener("change", (event: any) => {
                    setAnswerFromUser(captcha.id, Number(event.target.value));
                });
            }
            return captcha
        });
    } , [captcha, setAnswerFromUser]);
    */

    useEffect(() => {
        setCaptchaState(captcha);
    }, [captcha])

    const handleClickPlus = (e: any) => {
        e.preventDefault();
        const inputElt = document.getElementById
            ("custom-captcha-answer-input") as HTMLInputElement;
            if(Number(inputElt.value) < INPUT_MAX_VALUE) {
                const value = Number(inputElt.value) + 1;
                inputElt.value = value.toString();
                setAnswerFromUser(captcha.id, Number(inputElt.value));
            }
    }

    const handleClickMinus = (e: any) => {
        e.preventDefault();
        const inputElt = document.getElementById
            ("custom-captcha-answer-input") as HTMLInputElement;
        if(Number(inputElt.value) > INPUT_MIN_VALUE) {
            const value = Number(inputElt.value) - 1;
            inputElt.value = value.toString();
            setAnswerFromUser(captcha.id, Number(inputElt.value));
        }
    }

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
                    <div 
                    className="custom-captcha-input-container mb-0"
                    >   
                        <div 
                        className="text-blue-5 btn-3"
                        onClick={handleClickMinus}
                        >
                            -
                        </div>
                        <input 
                            id = "custom-captcha-answer-input"
                            type="number" 
                            defaultValue={INPUT_DEFAULT_VALUE.toString()} 
                            min={INPUT_MIN_VALUE}
                            max={INPUT_MAX_VALUE}
                            step={INPUT_STEP_VALUE}
                            onKeyDown={(e) => e.preventDefault()}
                            className="custom-captcha-input text-blue-5"   
                        />
                                                <div 
                        className="text-blue-5 btn-3"
                        onClick={handleClickPlus}
                        >
                            +
                        </div>
                    </div>

                        
                </div>
                <p className={`text-center text-blue-5 text-size-0-75  mt-2 ${captchaComment === ConfigCaptcha.RESULT_CAPTCHA_VALID ? 'text-success-dark-2 transition-03s' : 'text-danger-dark-1 transition-03s'}`}>
                    <strong>{captchaComment}</strong>
                </p>
            </div>
    );
}

export default CustomCaptcha;