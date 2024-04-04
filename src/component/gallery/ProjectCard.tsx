import { Button, Card, Stack } from "react-bootstrap";
import IProject from "../../interface/IProject";
import ITag from "../../interface/ITag";
import Tag from "../common/Tag";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface ProjectCardProps {
    project: IProject,
    image: string,
    handleShowModalShowProject: any
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card className="project-card" onClick={() => props.handleShowModalShowProject(props.project, props.image)}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-dark-orange-2">
                    <strong>{props.project.title}</strong>
                </Card.Title>
                <Card.Text className="mb-2 project-card-text-container">
                    <span className="">
                        {props.project.subTitle}
                    </span>
                </Card.Text>
                <Card.Text className="mb-2 d-flex justify-content-between align-items-end">
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
                </Card.Text>
                <Stack className="mt-0 d-flex flex-wrap flex-start" direction="horizontal" gap={2}>
                    {props.project.tags.map((tag: ITag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </Stack>
                <div className="flex-grow-1"></div>

             </Card.Body>
        </Card>
    );
}

export default ProjectCard;

/*
                <div className="mt-2 d-flex justify-content-center gap-2 flex-wrap">
                    <Button className="btn-1 bg-dark-orange" href={props.project.githubUrl} target="_blank" title="Lien vers le repository Github du projet.">Github</Button>
                    <Button className="btn-1 bg-blue-4" href={props.project.projectUrl} target="_blank" title="Lien vers le site du projet.">Projet</Button>
                </div>
*/