import tagsData from "../asset/json/tags.json";
import projectsData from "../asset/json/projects.json";
import ITag from "../interface/ITag";
import IProjectDto from "../dto/IProjectDto";

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
        // classer les projets par difficulty
        this._projects = this._projects.sort((p1, p2) => p2.difficulty - p1.difficulty);
    }

    private async getTags(): Promise<ITag[]> {
        return await tagsData.tags;
    }

    private async getProjects(): Promise<IProjectDto[]> {
        return await projectsData.projects;
    }

    public async findAllTags(): Promise<ITag[]> {
        return this._tags;
    }

    public async findAllProjects(): Promise<IProjectDto[]> {
        return await this._projects;
    }
}