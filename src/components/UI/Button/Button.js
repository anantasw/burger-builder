import Classes from './Button.module.css';

export default function Button(props) {
    return (
        <button className={[Classes.Button, Classes[props.btnType]].join(' ')}
                onClick={props.btnFunc}>
            {props.children}
        </button>
    );
}