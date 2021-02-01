import Auxiliary from '../../hoc/Auxiliary';
import Classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

export default function Layout(props) {
    return (
        <Auxiliary>
            <Toolbar />
            <SideDrawer />
            <main className={Classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}