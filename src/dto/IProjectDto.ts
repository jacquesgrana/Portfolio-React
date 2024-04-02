export default interface IProjectDto {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    projectUrl: string;
    tagIds: number[];
    date: string;
}