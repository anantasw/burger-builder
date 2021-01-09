import Classes from './BuildControl.module.css';

export default function BuildControl(props) {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button 
                className={Classes.Less}
                onClick={props.removeIngredientHandler}
                disabled={props.disabledInfo}>Less</button>
            <button 
                className={Classes.More} 
                onClick={props.addIngredientHandler}>More</button>
        </div>
    );
}