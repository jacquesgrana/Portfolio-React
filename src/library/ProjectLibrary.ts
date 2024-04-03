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
}