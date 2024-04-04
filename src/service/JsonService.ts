//import tagsData from "../asset/json/tags.json";
//import projectsData from "../asset/json/projects.json";
import ITag from "../interface/ITag";
import IProjectDto from "../dto/IProjectDto";
import ConfigJson from '../config/ConfigJson';

export default class JsonService {
  
    private static _instance: JsonService | null = null;
  
    private _tags: ITag[] = [];
    private _projects: IProjectDto[] = [];

    private constructor() {}
  
    public static async getInstance(): Promise<JsonService> {
      if (this._instance === null) {
        this._instance = new JsonService();
        await this._instance.init();
      }
      return this._instance;
    }

    private async init(): Promise<void> {
        this._tags = await this.getTags();
        this._projects = await this.getProjects();
        this._projects = this._projects.sort((p1, p2) => p2.difficulty - p1.difficulty);
    }

    private async getTags(): Promise<ITag[]> {
        return await ConfigJson.TAGS_DATA.tags;
    }

    private async getProjects(): Promise<IProjectDto[]> {
        return await ConfigJson.PROJECTS_DATA.projects;
    }

    public findAllTags(): ITag[] {
        return this._tags;
    }

    public findAllProjects(): IProjectDto[] {
        return this._projects;
    }
}