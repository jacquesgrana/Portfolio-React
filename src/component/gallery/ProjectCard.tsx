import { Button, Card, Stack } from "react-bootstrap";
import IProject from "../../interface/IProject";
import ITag from "../../interface/ITag";
import Tag from "../common/Tag";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

//
interface ProjectCardProps {
    project: IProject,
    image: string
}

const ProjectCard = (props: ProjectCardProps) => {
    //const image = require(`../../asset/image/gestion_projets.png`);
    return (
        <Card className="project-card">
            <Card.Img variant="top" src={props.image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="">
                    <strong>{props.project.title}</strong>
                </Card.Title>
                <Card.Text className="mb-1">
                    <p className="mt-0 mb-1">{props.project.description}</p>
                    <p className="mt-0 mb-1 text-dark-orange-2">
                        <strong>
                        {format(props.project.date, 'MMMM yyyy', { locale: fr })}
                        </strong>
                        </p>
                </Card.Text>
                <Stack className="mt-0 d-flex flex-wrap" direction="horizontal" gap={2}>
                    {props.project.tags.map((tag: ITag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </Stack>
                <div className="flex-grow-1"></div>
                <div className="mt-2 d-flex justify-content-center gap-2 flex-wrap">
                    <Button className="btn-1 bg-dark-orange" href={props.project.githubUrl} target="_blank" title="Lien vers le repository Github du projet.">Github</Button>
                    <Button className="btn-1 bg-blue-4" href={props.project.projectUrl} target="_blank" title="Lien vers le site du projet.">Projet</Button>
                </div>
             </Card.Body>
        </Card>
    );
}

export default ProjectCard;