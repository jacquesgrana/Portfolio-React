
import ConfigContact from '../config/ConfigContact';
import ConfigW3Form from '../config/ConfigW3Form';
import IToast from '../interface/IToast';
import JsonService from './JsonService';

export default class MailService {

    private static _instance: MailService | null = null;

    private _w3FormUrl = "";
    private _w3FormAccesKey = "";

    private _jsonService: JsonService | null = null;
    private _toasts: IToast[] = [];

    /*
    private _toasts: IToast[] = [
        {
            title: "Formulaire en cours d'envoi.",
            subtitle: "En cours.",
            message: "Le formulaire est en cours d'envoi.",
            mode: "info"
        },
        {
            title: "Formulaire envoyé.",
            subtitle: "Succès.",
            message: "Le formulaire a été envoyé.",
            mode: "success"
        },
        {
            title: "Formulaire non envoyé.",
            subtitle: "Erreur.",
            message: "Le formulaire n'a pas été envoyé.",
            mode: "danger"
        }
    ];
    */
  
    private constructor() {}
  
    public static async getInstance(): Promise<MailService> {
      if (this._instance === null) {
        this._instance = new MailService();
        await this._instance.init();
      }
      return this._instance;
    }

    private async init(): Promise<void> {
        this._w3FormUrl = ConfigW3Form.W3FORMS_SUBMIT_FORM_URL;
        this._w3FormAccesKey = ConfigW3Form.W3FORMS_ACCES_KEY;
        this._jsonService = await JsonService.getInstance();
        this._toasts = await this._jsonService.findAllToasts();
        //console.log("toasts", this._toasts);
    }

    // ajouter displayToast
    public async submitForm(
        event: any, 
        setResult: (any),
        displayToast: (
            toast: IToast
        ) => void
    ): Promise<void> {
        setResult(ConfigContact.RESULT_FORM_WAITING);
        displayToast(this._toasts[0]);
        const formData = new FormData(event.target);
        const email = formData.get("email")?.toString() ?? "";
        formData.append("access_key", this._w3FormAccesKey);
        formData.append("replyto", email);
        const response = await fetch(this._w3FormUrl, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult(ConfigContact.RESULT_FORM_DONE);
            displayToast(this._toasts[1]);
            event.target.reset();
        } 
        else {
            console.log("Erreur", data);
            setResult(ConfigContact.RESULT_FORM_ERROR + data.message);
            const toastToDisplay: IToast = this._toasts[2];
            toastToDisplay.message = toastToDisplay.message + data.message;
            displayToast(toastToDisplay);
        }
    }
}
