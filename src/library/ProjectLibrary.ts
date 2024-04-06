import IProject from "../interface/IProject";
import IProjectDto from "../dto/IProjectDto";
import ITag from "../interface/ITag";
export default class ProjectLibrary {

    public static getProjectFromDto(projectDto: IProjectDto, tags: ITag[]): IProject {
        const project: IProject = {
            id: projectDto.id,
            title: projectDto.title,
            subTitle: projectDto.subTitle,
            description: projectDto.description,
            imageUrl: projectDto.imageUrl,
            githubUrl: projectDto.githubUrl,
            projectUrl: projectDto.projectUrl,
            tags: tags.filter((tag: ITag) => projectDto.tagIds.includes(tag.id)),
            date: new Date(projectDto.date),
            difficulty: projectDto.difficulty
        }
        return project;
    }

    public static generateProjectsFromDto(projectsDto: IProjectDto[], tags: ITag[]): IProject[] {
        let projects: IProject[] = [];
        projectsDto.forEach((projectDto: IProjectDto) => {
            const project: IProject = this.getProjectFromDto(projectDto, tags);
            projects.push(project);
        });
        return projects;
    }

    public static sortByType(type: string, projectsToSort: IProject[]): IProject[] {
        const projects = [...projectsToSort];
        let projectToReturn: IProject[] = [];
        switch (type) {
          case "difficulty_desc":
            projectToReturn = projects.sort((a: IProject, b: IProject) => b.difficulty - a.difficulty);
            break;
          case "difficulty_asc":
            projectToReturn = projects.sort((a: IProject, b: IProject) => a.difficulty - b.difficulty);
            break;
          case "date_desc":
            projectToReturn = projects.sort((a: IProject, b: IProject) => b.date.getTime() - a.date.getTime());
            break;
          case "date_asc":
            projectToReturn = projects.sort((a: IProject, b: IProject) => a.date.getTime() - b.date.getTime());
            break;
          case "title_desc":
            projectToReturn = projects.sort((a: IProject, b: IProject) => b.title.localeCompare(a.title));
            break;
          case "title_asc":
            projectToReturn = projects.sort((a: IProject, b: IProject) => a.title.localeCompare(b.title));
            break;
          default:
            projectToReturn = projects;
            break;
        }
        return projectToReturn;
    }

    public static getFrenchSortType(type: string): string {
        switch (type) {
            case "difficulty_desc":
                return "par difficulté (décroissant)";
            case "difficulty_asc":
                return "par difficulté (croissant)";
            case "date_desc":
                return "par date (décroissant)";
            case "date_asc":
                return "par date (croissant)";
            case "title_desc":
                return "par nom (décroissant)";
            case "title_asc":
                return "par nom (croissant)";
            default:
                return type;
        }
    }
}