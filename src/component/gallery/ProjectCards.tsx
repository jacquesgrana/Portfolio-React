
import IProject from "../../interface/IProject";
import ProjectCard from "./ProjectCard";

interface ProjectCardsProps {
    projects: IProject[],
    projectsImage: any[]
}
const ProjectCards = (props: ProjectCardsProps) => {

    return (
        <div id="project-cards-container">
            {props.projects.map((project: IProject) => 
                (<ProjectCard key={project.id} project={project} image={props.projectsImage[project.id].url} />)
            )}
        </div>
    );
}

export default ProjectCards;