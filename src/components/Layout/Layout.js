import Auxiliary from '../../hoc/Auxiliary';
import Classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

export default function Layout(props) {
    return (
        <Auxiliary>
            <Toolbar />
            <main className={Classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}