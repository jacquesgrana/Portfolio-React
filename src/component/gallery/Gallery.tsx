import { useState, useEffect, useRef } from "react";
import JsonService from '../../service/JsonService';
import IProject from "../../interface/IProject";
import ProjectCards from "./sub_component/ProjectCards";
import ConfigImage from "../../config/ConfigImage";
import ProjectLibrary from "../../library/ProjectLibrary";
import ModalShowProject from "./sub_component/ModalShowProject";
import ITag from "../../interface/ITag";
import AccordionGallery from "./sub_component/AccordionGallery";

const Gallery = () => {

    const [projects, setProjects] = useState<IProject[]>([]);
    const [showModalShowProject, setShowModalShowProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProject>();
    const [selectedImage, setSelectedImage] = useState<string>("");
    const [sortType, setSortType] = useState<string>("difficulty_desc");

    const jsonServiceRef = useRef<any>(null);
    const allTagsRef = useRef<ITag[]>([]);
    const collectedTagsRef = useRef<ITag[]>([]);
    const isAccordionOpen = useRef<boolean>(false);

    const handleToggleAccordion = () => {
        isAccordionOpen.current = !isAccordionOpen.current;
        const title = document.getElementById("accordion-title-gallery");
        const bullet = document.getElementById("accordion-bullet-gallery");
        title?.classList.toggle("text-white");
        title?.classList.toggle("text-orange");
        bullet?.classList.toggle("text-white");
        bullet?.classList.toggle("text-orange");
    }

    const projectsImage: {}[] = ConfigImage.PROJECTS_IMAGE;

    const handleCloseModalShowProject = () => setShowModalShowProject(false);

    const handleShowModalShowProject = (project: IProject, image: string) => {
        setSelectedProject(project);
        setSelectedImage(image);
        setShowModalShowProject(true);
    };

    const updateSortType = (type: string): void => {
        setSortType(type);
    }

    useEffect(() => {
      setProjects((prevProjects) => ProjectLibrary.sortByType(sortType, prevProjects));
  }, [sortType]);
    
    useEffect(() => {
        const initData = async () => {
          jsonServiceRef.current = await JsonService.getInstance();
          const tagsFromJson = await jsonServiceRef.current.findAllTags();
          const projectsFromJson = await jsonServiceRef.current.findAllProjects();
          const generatedProjects = ProjectLibrary.generateProjectsFromDto(projectsFromJson, tagsFromJson);
          allTagsRef.current = tagsFromJson;
          
          collectedTagsRef.current = jsonServiceRef.current.findTagsByProjects(tagsFromJson);
          setProjects(ProjectLibrary.sortByType("difficulty_desc", generatedProjects));
        };

        initData();
      }, []);

      const setTagsForFiltering = (tags: ITag[]): void => {
        setProjects(ProjectLibrary.sortByType(sortType, ProjectLibrary.generateProjectsFromDto(jsonServiceRef.current.findProjectsByTags(tags), allTagsRef.current)));
      }
    
    return (
        <>
        <div id="app-gallery">
            <h2 className="title-1-bold text-white text-center text-space-3">Galerie</h2>
            <h3 className="title-2-normal text-blue-5 text-center mt-2 mb-4 text-space-2">Quelques projets</h3>
            <AccordionGallery 
              sortTypeComment={ProjectLibrary.getFrenchSortType(sortType)}
              handleToggleAccordion={handleToggleAccordion}
              allTags={collectedTagsRef.current} 
              setTagsForFiltering={setTagsForFiltering}
              updateSortType={updateSortType}
            />
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