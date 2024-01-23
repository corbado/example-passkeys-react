import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
import { useCorbado } from "@corbado/react-sdk"
import { useEffect } from "react"

export default function RouteProvider() {
    const { globalError } = useCorbado()

    useEffect(() => {
        if (globalError) {
            console.log(globalError)
        }
    }, [globalError])

    const routes = [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
    ]
    return <RouterProvider router={createBrowserRouter(routes)} />
}
