
import ConfigCaptcha from '../config/ConfigCaptcha';
import ICaptcha from '../interface/ICaptcha';
import JsonService from './JsonService';

export default class CaptchaService {
  
    private static _instance: CaptchaService | null = null;
    private _jsonService: JsonService | null = null;
    private _captchas: ICaptcha[] = [];

    private constructor() {}
  
    public static async getInstance(): Promise<CaptchaService> {
      if (this._instance === null) {
        this._instance = new CaptchaService();
        await this._instance.init();
      }
      return this._instance;
    }


    private async init(): Promise<void> {
        this._jsonService = await (await JsonService).getInstance();
        this._captchas = await this._jsonService.findAllCaptchas();
        //console.log('init : this._captchas :', this._captchas);
    }

    public validateAnswer(captchaId: number, answer: number): boolean {
        let toReturn: boolean = false;
        const captcha = this._captchas.find(c => c.id === captchaId);
        if(captcha) {
            toReturn = captcha.answer === answer;
        }
        return toReturn;
    }

    public  getRandomCaptcha(): ICaptcha {
        const max = ConfigCaptcha.CAPTCHA_MAX_NUMBER - 1;
        const randomNumber = Math.floor(Math.random() * (max + 1));
        const randomCaptcha = this._captchas[randomNumber]; 
        //console.log("randomCaptcha :", randomCaptcha);
        return randomCaptcha;        
    }

}