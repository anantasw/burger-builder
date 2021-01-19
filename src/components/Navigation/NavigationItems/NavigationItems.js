import Classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (    
        <ul className={Classes.NavigationItems}>
            <NavigationItem
                link="/"
                active
            >Burger Builder</NavigationItem>
            <NavigationItem>Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems;
