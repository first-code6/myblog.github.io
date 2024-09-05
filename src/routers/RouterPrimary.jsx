import React from 'react'
import { 
    createBrowserRouter,
    RouterProvider,
 } from 'react-router-dom'

import Home from '../pages/Home/Home'

const RouterPrimary = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default RouterPrimary