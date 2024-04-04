import { useState, useEffect, useRef } from "react";
import JsonService from '../../service/JsonService';
import IProject from "../../interface/IProject";
import ProjectCards from "./sub_component/ProjectCards";
import ConfigImage from "../../config/ConfigImage";
import ProjectLibrary from "../../library/ProjectLibrary";
import ModalShowProject from "./sub_component/ModalShowProject";

const Gallery = () => {

    //const [tags, setTags] = useState<ITag[]>([]);
    //const [projectsDto, setProjectsDto] = useState<IProjectDto[]>([]);

    const [projects, setProjects] = useState<IProject[]>([]);
    //let projects: IProject[] =[];

    const [showModalShowProject, setShowModalShowProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProject>();
    const [selectedImage, setSelectedImage] = useState<string>("");
    const projectsImage: {}[] = ConfigImage.PROJECTS_IMAGE;

    const jsonServiceRef = useRef<any>(null);
    const projectsRef = useRef<IProject[]>([]);

    const handleCloseModalShowProject = () => setShowModalShowProject(false);

    const handleShowModalShowProject = (project: IProject, image: string) => {
        setSelectedProject(project);
        setSelectedImage(image);
        setShowModalShowProject(true);
    };
    
    useEffect(() => {
        const initData = async () => {
          /*
            jsonServiceRef.current = await JsonService.getInstance();
            const tagsFromJson = jsonServiceRef.current.findAllTags ();
            const projectsFromJson = jsonServiceRef.current.findAllProjects();
            //setTags(tagsFromJson);
            //setProjectsDto(projectsFromJson);

            setProjects(ProjectLibrary.generateProjectsFromDto(projectsFromJson, tagsFromJson));
            //projects = ProjectLibrary.generateProjectsFromDto(projectsFromJson, tagsFromJson);
            console.log(projects);
          */
            jsonServiceRef.current = await JsonService.getInstance();
            const tagsFromJson = jsonServiceRef.current.findAllTags();
            const projectsFromJson = jsonServiceRef.current.findAllProjects();
            const generatedProjects = ProjectLibrary.generateProjectsFromDto(projectsFromJson, tagsFromJson);
            setProjects(generatedProjects);
            projectsRef.current = generatedProjects;
        };
        initData();
      }, []);
    
    return (
        <>
        <div id="app-gallery">
            <h2 className="title-1-bold text-white text-center text-space-3">Galerie</h2>
            <h3 className="title-2-normal text-blue-5 text-center mb-3 text-space-2">Quelques projets</h3>
            <ProjectCards 
            projects={projects} 
            projectsImage={projectsImage}
            handleShowModalShowProject={handleShowModalShowProject}
            />
        </div>

        {/* Modale */}
        <ModalShowProject
        showModalShowProject={showModalShowProject}
        handleCloseModalShowProject={handleCloseModalShowProject}
        selectedProject={selectedProject}
        selectedImage={selectedImage}
        />
        </>
    );
}
export default Gallery;