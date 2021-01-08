import Auxiliary from '../../hoc/Auxiliary';
import Classes from './Layout.module.css';

export default function Layout(props) {
    return (
        <Auxiliary>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={Classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}