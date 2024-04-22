//import tagsData from "../asset/json/tags.json";
//import projectsData from "../asset/json/projects.json";
import ITag from "../interface/ITag";
import IProjectDto from "../dto/IProjectDto";
import ConfigJson from '../config/ConfigJson';
import ICaptcha from '../interface/ICaptcha';
import IToast from "../interface/IToast";

export default class JsonService {
  
    private static _instance: JsonService | null = null;
  
    private _tags: ITag[] = [];
    private _projects: IProjectDto[] = [];
    private _captchas: ICaptcha[] = [];
    private _toasts: IToast[] = [];

    private constructor() {}
  
    public static async getInstance(): Promise<JsonService> {
      if (this._instance === null) {
        this._instance = new JsonService();
        await this._instance.init();
      }
      return await this._instance;
    }

    
    private async init(): Promise<void> {
        if (this._tags.length === 0) this._tags = await this.getTags();
        if (this._projects.length === 0) this._projects = await this.getProjects();
        this._projects = this._projects.sort((p1, p2) => p2.difficulty - p1.difficulty);
        if (this._captchas.length === 0) this._captchas = await this.getCaptchas();
        if (this._toasts.length === 0) this._toasts = await this.getToasts();
    }
    

    private async getTags(): Promise<ITag[]> {
        return await ConfigJson.TAGS_DATA.tags;
    }

    private async getProjects(): Promise<IProjectDto[]> {
        return await ConfigJson.PROJECTS_DATA.projects;
    }

    private async getCaptchas(): Promise<ICaptcha[]> {
        return ConfigJson.CAPTCHAS_DATA.captchas;
    }

    private async getToasts(): Promise<IToast[]> {
        return await ConfigJson.TOATS_DATA.toasts;
    }

    public async findAllTags(): Promise<ITag[]> {
        if (this._tags.length === 0) {
            this._tags = await this.getTags();
        }
        return this._tags;
    }

    public async findAllProjects(): Promise<IProjectDto[]> {
        if (this._projects.length === 0) {
            this._projects = await this.getProjects();
        }
        return this._projects;
    }

    public async findAllCaptchas(): Promise<ICaptcha[]> {
        if (this._captchas.length === 0) {
            this._captchas = await this.getCaptchas();
        }
        return this._captchas;
    }

    public async findAllToasts(): Promise<IToast[]> {
        if (this._toasts.length === 0) {
            this._toasts = await this.getToasts();
        }
        return this._toasts;
    }

    // méthode qui renvoie la liste des projets qui contiennent au moins un des tags passés en paramètre
    public findProjectsByTags(tags: ITag[]): IProjectDto[] {
        const projectsToReturn : IProjectDto[] = [];
        this._projects.forEach((project: IProjectDto) => {
            // ajouter le projet si au moins un des tags est dans les tags du projet
            if (project.tagIds.some((tagId: number) => tags.some((tag: ITag) => tagId === tag.id))) {
                projectsToReturn.push(project);
            }
        });
        return projectsToReturn;
    }

    // méthode qui renvoie la liste des tags qui sont dans les tous les projets, et qui ne sont pas déjà dans la liste des tags passés en paramètre, la liste de tous les tags est passée en paramètre pour pouvoir créer des objets ITag à partir de leur id. 
    public findTagsByProjects(allTags: ITag[]): ITag[] {
        const tagsToReturn: ITag[] = [];
        this._projects.forEach((project: IProjectDto) => {
            project.tagIds.forEach((tagId: number) => {
                if(!tagsToReturn.some((tag: ITag) => tagId === tag.id)) {
                    tagsToReturn.push(allTags.find((tag: ITag) => tagId === tag.id) as ITag);
                }
            });
        });
        return tagsToReturn;
    }
}