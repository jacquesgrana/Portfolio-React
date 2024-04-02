import { Button, Card, Stack } from "react-bootstrap";
import IProject from "../../interface/IProject";
import ITag from "../../interface/ITag";
import Tag from "../common/Tag";

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
                <Card.Title>{props.project.title}</Card.Title>
                <Card.Text>{props.project.description}</Card.Text>
                <Stack className="d-flex flex-wrap" direction="horizontal" gap={2}>
                    {props.project.tags.map((tag: ITag) => (
                        <Tag key={tag.id} tag={tag} />
                    ))}
                </Stack>
                <div className="flex-grow-1"></div>
                <div className="mt-2 d-flex justify-content-center gap-2 flex-wrap">
                    <Button variant="success" href={props.project.githubUrl} target="_blank">Github</Button>
                    <Button variant="primary" href={props.project.projectUrl} target="_blank">Projet</Button>
                </div>
             </Card.Body>
        </Card>
    );
}

export default ProjectCard;