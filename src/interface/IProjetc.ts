import ITag from "./ITag";

export default interface IProject {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    url: string;
    tags: ITag[];
    date: Date;
}