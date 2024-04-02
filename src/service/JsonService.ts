import data from "../asset/json/tags.json";
import ITag from "../interface/ITag";

export default class JsonService {
  
    private static _instance: JsonService | null = null;
  
    private constructor() {}
  
    public static getInstance(): JsonService {
      if (this._instance === null) {
        this._instance = new JsonService();
      }
      return this._instance;
    }

    public async getTags(): Promise<ITag[]> {
        return await data.tags;
    }

}