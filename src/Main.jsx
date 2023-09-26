import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./Components/Home";
import Donation from "./Components/Donation";
import Statistics from "./Components/Statistics";
import Decription from "./Components/Decription";
import "../src/Main.css";




const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/Data.json')
            },
            {
                path: "/Card/:id",
                element: <Decription />,
                loader: () => fetch('/Data.json')

            },
            {
                path: '/Donation',
                element: <Donation />,
                loader: () => fetch('/Data.json')
            },
            {
                path : '/Donation/:id',
                element : <Decription/>,
                loader: () => fetch('/Data.json')
            },
            {
                path: '/Statistics',
                element: <Statistics />,
                loader: () => fetch('/Data.json')
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)