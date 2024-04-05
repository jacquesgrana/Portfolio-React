
import IProject from "../../../interface/IProject";
import ProjectCard from "./ProjectCard";

interface ProjectCardsProps {
    projects: IProject[],
    projectsImage: any[],
    handleShowModalShowProject: any
}
const ProjectCards = (props: ProjectCardsProps) => {

    return (
        <div id="project-cards-container">
            {props.projects && props.projects.map((project: IProject) => 
                (<ProjectCard 
                handleShowModalShowProject={props.handleShowModalShowProject} 
                key={project.id} project={project} 
                image={props.projectsImage[project.id].url} 
                />)
            )}
        </div>
    );
}

export default ProjectCards;