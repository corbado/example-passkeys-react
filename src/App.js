import "./App.css"
import { CorbadoProvider } from "@corbado/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"

const CORBADO_PROJECT_ID = process.env.REACT_APP_CORBADO_PROJECT_ID;

const RouteProvider = () => {
    const routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/profile',
            element: <Profile />,
        },
    ];

    return <RouterProvider router={createBrowserRouter(routes)} />;
};

function App() {
    return (
        <div className='App'>
            <CorbadoProvider projectId={CORBADO_PROJECT_ID} darkMode='on'>
                <RouteProvider />
            </CorbadoProvider>
        </div>
    )
}

export default App
