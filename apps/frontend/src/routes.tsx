import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Welcome />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
