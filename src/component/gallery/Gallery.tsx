import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import data from "../../asset/json/tags.json";
import ITag from "../../interface/ITag";

import Stack from 'react-bootstrap/Stack';
import Tag from "../common/Tag";
import JsonService from '../../service/JsonService';
import IProjectDto from "../../dto/IProjectDto";
import IProject from "../../interface/IProject";
import ProjectCards from "./ProjectCards";
import ConfigImage from "../../config/configImage";
const Gallery = () => {

    const [tags, setTags] = useState<ITag[]>([]);
    const [projectsDto, setProjectsDto] = useState<IProjectDto[]>([]);
    const [projects, setProjects] = useState<IProject[]>([]);

    const projectsImage = ConfigImage.PROJECTS_IMAGE;

    let jsonService: any = null;
    
    useEffect(() => {
        //jsonService.init();
        const fct = async () => {
            jsonService = await JsonService.getInstance();
            const tagsFromJson = await jsonService.findAllTags ();
            const projectsFromJson = await jsonService.findAllProjects();
            setTags(tagsFromJson);
            setProjectsDto(projectsFromJson);
            setProjects(generateProjectsFromDto(projectsFromJson, tagsFromJson));
            //console.log('data :', tagsFromJson);
            //console.log('tags[0] :', tagsFromJson[0]);
            //console.log('projects dto from json :', projectsFromJson);
        }
        fct();
      }, []);

      const generateProjectsFromDto = (projectsDto: IProjectDto[], tags: ITag[]): IProject[] => {
        let projects: IProject[] = [];
        //console.log("tags : ", tags);
        projectsDto.forEach((projectDto: IProjectDto) => {
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
            projects.push(project);
        });
        //console.log('projects :', projects);
        return projects;
      }
    
    return (
        <div id="app-gallery">
            <h2 className="title-1-bold text-white text-center text-space-3">Galerie</h2>
            <h3 className="title-2-normal text-blue-5 text-center mb-3 text-space-2">Quelques projets</h3>
            <ProjectCards projects={projects} projectsImage={projectsImage}/>
        </div>
    );

}
export default Gallery;

/*

                <Stack className="d-flex flex-wrap" direction="horizontal" gap={2}>
                    {tags.map((tag: ITag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </Stack>

*/