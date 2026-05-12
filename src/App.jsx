import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';

function App() {
    const routes = useRoutes([
        { path: '/', element: <ShowCreators /> },
        { path: '/creator/:id', element: <ViewCreator /> },
        { path: '/add', element: <AddCreator /> },
        { path: '/edit/:id', element: <EditCreator /> },
    ]);

    return (
        <div className="app">
            <nav className="nav">
                <Link to="/" className="logo">
                    Creatorverse
                </Link>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/add" className="nav-button">
                        Add Creator
                    </Link>
                </div>
            </nav>

            <main className="container page-content">
                {routes}
            </main>
        </div>
    );
}

export default App;