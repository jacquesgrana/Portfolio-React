
import ConfigContact from '../config/ConfigContact';
import ConfigW3Form from '../config/ConfigW3Form';
import IToast from '../interface/IToast';
import JsonService from './JsonService';

export default class FormService {

    private static _instance: FormService | null = null;

    private _w3FormUrl = "";
    private _w3FormAccesKey = "";

    private _jsonService: JsonService | null = null;
    private _toasts: IToast[] = [];
  
    private constructor() {}
  
    public static async getInstance(): Promise<FormService> {
      if (this._instance === null) {
        this._instance = new FormService();
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

    public async displayToastCaptachaNotValid(
        displayToast: (toast: IToast) => void
    )
    {
        const toastToDisplay: IToast = this._toasts[3];
        displayToast(toastToDisplay);
    }
}
