import Classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

function BuildControls(props) {
    return (
        <div className={Classes.BuildControls}>
            <p>Price : <strong>{props.totalPrice.toFixed(2)} USD</strong></p>
            {controls.map(el => (
                <BuildControl 
                    key={el.label} 
                    label={el.label}
                    addIngredientHandler={() => props.addIngredientHandler(el.type)}
                    removeIngredientHandler={() => props.removeIngredientHandler(el.type)}
                    disabledInfo={props.disabledInfo[el.type]} 
                />
            ))}
            <button 
                className={Classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.purchaseHandler}>Order Now</button>
        </div>
    );
}

export default BuildControls;