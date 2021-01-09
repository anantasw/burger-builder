import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

export default function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
                                .map(elKey => {
                                    return (
                                        <li key={elKey}>
                                            {elKey} : {props.ingredients[elKey]}
                                        </li>
                                    );
                                });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout ?</p>
            <Button btnType="Danger" btnFunc={props.purchaseCancelHandler}>Cancel</Button>
            <Button btnType="Success" btnFunc={props.purchaseContinueHandler}>Continue</Button>
        </Auxiliary>
    );
}