import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Home from "./Components/Home";
import Donation from "./Components/Donation";
import Statistics from "./Components/Statistics";
import "../src/Main.css";
import Decription from "./Components/Decription";




const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
               loader : ()=> fetch('../public/Data.json')
            },
            {
                path : "/Card/:id",
                element : <Decription/>,
                loader : ()=> fetch('../public/Data.json')

            },
            {
                path: '/Donation',
                element: <Donation />
            },
            {
                path: '/Statistics',
                element: <Statistics />
            }
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)