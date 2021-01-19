import BurgerLogo from '../../assets/images/burger-logo.png';
import Classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={Classes.Logo}>
            <img src={BurgerLogo} alt="BurgerBuilder" />
        </div>
    )
}

export default Logo;