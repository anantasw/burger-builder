import Classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients)
                                    .map(elKey => {
                                        return [...Array(props.ingredients[elKey])].map((_, idx) => {
                                            return <BurgerIngredient key={elKey + idx} type={elKey} />
                                        });
                                    })
                                    .reduce((arr, el) => {
                                        return arr.concat(el);
                                    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients!</p>
    }

    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;