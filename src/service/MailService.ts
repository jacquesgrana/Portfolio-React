
import ConfigW3Form from '../config/ConfigW3Form';

export default class MailService {

    private static _instance: MailService | null = null;

    private static _w3FormUrl = "";
    private static _w3FormAccesKey = "";
  
    private constructor() {}
  
    public static async getInstance(): Promise<MailService> {
      if (this._instance === null) {
        this._instance = new MailService();
        this._w3FormUrl = ConfigW3Form.W3FORMS_SUBMIT_FORM_URL;
        this._w3FormAccesKey = ConfigW3Form.W3FORMS_ACCES_KEY;
      }
      return this._instance;
    }

    public async submitForm(event: any, setResult: (any)): Promise<void> {
        //event.preventDefault();
        //console.log('_w3FormUrl', MailService._w3FormUrl);
        //console.log('_w3FormAccesKey', MailService._w3FormAccesKey);
        setResult("Envoi du formulaire...");
        const formData = new FormData(event.target);
        const email = formData.get("email")?.toString() ?? "";
        formData.append("access_key", MailService._w3FormAccesKey);
        formData.append("replyto", email);
        // TODO ajouter api key google captcha
        //console.log('form data', formData);
        const response = await fetch(MailService._w3FormUrl, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Formulaire envoyé.");
            event.target.reset();
        } 
        else {
            console.log("Erreur", data);
            setResult("Erreur : " + data.message);
        }
    }
}