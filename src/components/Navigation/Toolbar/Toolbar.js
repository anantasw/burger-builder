import Classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

export default function Toolbar(props) {
    return (
        <header className={Classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}