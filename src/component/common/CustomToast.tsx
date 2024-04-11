import { Toast } from "react-bootstrap"

interface CustomToastProps {
    show: boolean,
    title: string,
    subtitle: string,
    message: string,
    mode: string,
    toggleShow: () => void
}
const CustomToast = (props: CustomToastProps) => {

    const TOAST_DELAY = 3000;
    return(
        <Toast 
        show={props.show} 
        onClose={props.toggleShow}
        className={`custom-toast-${props.mode} custom-toast`}
        id="custom-toast"
        delay={TOAST_DELAY} 
        autohide
        >
            <Toast.Header>
                <strong 
                className={`custom-toast-${props.mode} me-auto`}
                >
                    {props.title}
                </strong>
                <small 
                className={`custom-toast-${props.mode}`}
                >
                    {props.subtitle}
                </small>
            </Toast.Header>
            <Toast.Body
            className={`text-white`}
            >
                {props.message}
            </Toast.Body>
        </Toast>
    );
}

export default CustomToast;