import ITag from "./ITag";

export default interface IProject {
    id: number;
    title: string;
    subTitle: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    projectUrl: string;
    tags: ITag[];
    date: Date;
    difficulty: number;
}