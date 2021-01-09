import Classes from './Backdrop.module.css';

export default function Backdrop(props) {
    return (
        props.showModal ? <div className={Classes.Backdrop} onClick={props.modalClosed}></div> : null
    );
}