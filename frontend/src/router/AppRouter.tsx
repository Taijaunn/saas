import React from "react";
import {ROUTE} from "../utils/constants";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "../ui/HomePage";

const router = createBrowserRouter([
    {
        path: ROUTE.HOME,
        element: <HomePage/>,
    },
]);


export const AppRouter = () => {
    return <RouterProvider router={router}/>
}
