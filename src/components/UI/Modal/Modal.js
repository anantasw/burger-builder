import Classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

export default function Modal(props) {
    return (
        <Auxiliary>
            <Backdrop showModal={props.showModal} modalClosed={props.modalClosed} />
             <div className={Classes.Modal}
                    style={{
                        transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.showModal ? '1' : '0'
                    }}>
                    {props.children}
                </div>
        </Auxiliary>
    );
}