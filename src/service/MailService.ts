
import ConfigContact from '../config/ConfigContact';
import ConfigW3Form from '../config/ConfigW3Form';

export default class MailService {

    private static _instance: MailService | null = null;

    private _w3FormUrl = "";
    private _w3FormAccesKey = "";
  
    private constructor() {}
  
    public static async getInstance(): Promise<MailService> {
      if (this._instance === null) {
        this._instance = new MailService();
        this._instance.init();
      }
      return this._instance;
    }

    private init(): void {
        this._w3FormUrl = ConfigW3Form.W3FORMS_SUBMIT_FORM_URL;
        this._w3FormAccesKey = ConfigW3Form.W3FORMS_ACCES_KEY;
    }

    // ajouter displayToast
    public async submitForm(
        event: any, 
        setResult: (any),
        displayToast: (
            title: string,
            subtitle: string,
            message: string,
            mode: string
        ) => void
    ): Promise<void> {
        setResult(ConfigContact.RESULT_FORM_WAITING);
        // TODO afficher toast ?
        displayToast(
            "Formulaire en cours d'envoi",
            "En cours",
            "Le formulaire est en cours d'envoi",
            "info"
        )
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
            // TODO afficher toast
            displayToast(
                "Formulaire envoyé.", 
                "Succès.", 
                "Le formulaire a bien été envoyé.", 
                "success");
            event.target.reset();
        } 
        else {
            console.log("Erreur", data);
            setResult(ConfigContact.RESULT_FORM_ERROR + data.message);
            // TODO afficher toast
            displayToast(
                "Formulaire non envoyé.",
                "Erreur.",
                `Une erreur s'est produite : ${data.message}.`,
                "danger"
            )
        }
    }
}
