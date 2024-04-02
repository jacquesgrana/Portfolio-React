export default interface IProjectDto {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    url: string;
    tagIds: number[];
    date: Date;
}