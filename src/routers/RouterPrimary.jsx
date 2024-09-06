import React from 'react'
import { 
    useRoutes,
 } from 'react-router-dom'

import Home from '../pages/Home/Home'

const RouterPrimary = () => {

    return(useRoutes([
        {
            path: "/",
            element: <Home />
        }
    ]))
}

export default RouterPrimary