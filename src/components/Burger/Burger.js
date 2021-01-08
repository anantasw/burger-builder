import Classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

function Burger(props) {
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;