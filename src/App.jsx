import styles from './styles/App.module.css';
import { Navbar } from './components/Navbar.jsx';

function App() {
    return <div className={styles.App}>
        <Navbar />
    </div>;
}

export default App;