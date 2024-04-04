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

    const handleCloseModalShowProject = () => setShowModalShowProject(false);

    const handleShowModalShowProject = (project: IProject, image: string) => {
        setSelectedProject(project);
        setSelectedImage(image);
        setShowModalShowProject(true);
    };
    
    useEffect(() => {
        const initData = async () => {
            jsonServiceRef.current = await JsonService.getInstance();
            const tagsFromJson = jsonServiceRef.current.findAllTags ();
            const projectsFromJson = jsonServiceRef.current.findAllProjects();
            //setTags(tagsFromJson);
            //setProjectsDto(projectsFromJson);

            setProjects(ProjectLibrary.generateProjectsFromDto(projectsFromJson, tagsFromJson));
            //projects = ProjectLibrary.generateProjectsFromDto(projectsFromJson, tagsFromJson);
            console.log(projects);

        };
        initData();
      }, []);

      /*
      const generateProjectsFromDto = (projectsDto: IProjectDto[], tags: ITag[]): IProject[] => {
        let projects: IProject[] = [];
        projectsDto.forEach((projectDto: IProjectDto) => {
            const project: IProject = ProjectLibrary.getProjectFromDto(projectDto, tags);
            projects.push(project);
        });
        return projects;
      }
      */
    
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

/*
<span className="text-dark-orange-2">
                        <strong>
                        {format(props.project.date, 'MMMM yyyy', { locale: fr })}
                        </strong>  
                    </span>
                    <span className="text-blue-5 text-size-0-75">
                    Difficulté :&nbsp;
                    <strong className="text-dark-orange-2">{`${props.project.difficulty}/10`}
                    </strong>  
                    </span>
*/

/*

                <Stack className="d-flex flex-wrap" direction="horizontal" gap={2}>
                    {tags.map((tag: ITag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </Stack>

*/

/*
<Modal id="modal-view-project" className="" show={showModalShowProject} onHide={handleCloseModalShowProject}>
        <Modal.Header>
          <Modal.Title className="text-orange">{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <img className="mb-3 image-1" src={selectedImage} alt={selectedProject?.title} title={`image de ${selectedProject?.title}`}/>
                <p className="text-orange mb-1"><strong>{selectedProject?.subTitle}</strong></p>
                <p className="">{selectedProject?.description}</p>
                <div className="w-100 d-flex justify-content-between align-items-end">
                    <span className="text-orange">
                        <strong>
                          {selectedProject !== undefined && format(selectedProject.date, 'MMMM yyyy', { locale: fr })}
                        </strong>  
                    </span>
                    <span className="text-size-0-75">
                      Difficulté :&nbsp;
                      <strong className="text-orange">
                        {`${selectedProject?.difficulty}/10`}
                      </strong>  
                    </span>
                </div>
                <Stack className="mt-2 d-flex flex-wrap flex-start" direction="horizontal" gap={2}>
                    {selectedProject?.tags.map((tag: ITag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </Stack>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
          className="btn-2 bg-dark-orange me-1" 
          onClick={handleCloseModalShowProject}
          href={selectedProject?.githubUrl} 
          target="_blank" 
          title="Lien vers le repository Github du projet."
          >
            Github
          </Button>
          <Button 
          className="btn-2 me-1 bg-blue-3" 
          onClick={handleCloseModalShowProject}
          href={selectedProject?.projectUrl} 
          target="_blank" 
          title="Lien vers le site du projet."
          >
            Projet
          </Button>
          <Button 
          className="btn-2 bg-orange text-blue-5" 
          onClick={handleCloseModalShowProject}
          title="Fermer la fenêtre."
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
*/