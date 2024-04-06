import { format } from "date-fns";
import { Button, Modal, Stack } from "react-bootstrap";
import Tag from "../../common/Tag";
import ITag from "../../../interface/ITag";
import { fr } from "date-fns/locale";
import IProject from "../../../interface/IProject";

interface ModalShowProjectProps {
    selectedProject: IProject | undefined
    selectedImage: string
    showModalShowProject: boolean
    handleCloseModalShowProject: () => void
}

const ModalShowProject = (props: ModalShowProjectProps) => {
    
    return (
        <Modal id="modal-view-project" className="" show={props.showModalShowProject} onHide={props.handleCloseModalShowProject}>
            <Modal.Header className="d-flex justify-content-center">
                <Modal.Title className="text-orange">
                    {props.selectedProject?.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="d-flex justify-content-center">
                        <img className="mb-3 image-1" src={props.selectedImage} alt={props.selectedProject?.title} title={`image de ${props.selectedProject?.title}`}/>
                    </div>
                    <p className="text-orange mb-1"><strong>{props.selectedProject?.subTitle}</strong></p>
                    <p className="">{props.selectedProject?.description}</p>
                    <div className="w-100 d-flex justify-content-between align-items-end">
                        <span className="text-orange">
                            <strong>
                            {props.selectedProject !== undefined && format(props.selectedProject.date, 'MMMM yyyy', { locale: fr })}
                            </strong>  
                        </span>
                        <span className="text-size-0-75">
                        Difficulté :&nbsp;
                        <strong className="text-orange">
                            {`${props.selectedProject?.difficulty}/10`}
                        </strong>  
                        </span>
                    </div>
                    <Stack className="mt-2 d-flex flex-wrap flex-start" direction="horizontal" gap={2}>
                        {props.selectedProject?.tags.map((tag: ITag) => (
                            <Tag key={tag.id} tag={tag} />
                        ))}
                    </Stack>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button 
                className="btn-2 bg-dark-orange me-1" 
                onClick={props.handleCloseModalShowProject}
                href={props.selectedProject?.githubUrl} 
                target="_blank" 
                title="Lien vers le repository Github du projet."
                >
                    Github
                </Button>
                <Button 
                className="btn-2 me-1 bg-blue-3" 
                onClick={props.handleCloseModalShowProject}
                href={props.selectedProject?.projectUrl} 
                target="_blank" 
                title="Lien vers le site du projet."
                >
                    Projet
                </Button>
                <Button 
                className="btn-2 bg-orange text-blue-5" 
                onClick={props.handleCloseModalShowProject}
                title="Fermer la fenêtre."
                >
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalShowProject;