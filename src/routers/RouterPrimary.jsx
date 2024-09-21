import React from 'react'
import { 
    useRoutes,
 } from 'react-router-dom'

import Home from '../pages/Home/Home'
import DataList from '../pages/Home/component/DataList'
import TicTacToe from '../pages/Ganmes/Tic-Tac-Toe/TicTacToe'

const RouterPrimary = () => {

    return(useRoutes([
        {
            path: "*",
            element: <Home />
        },
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/games",
                    element: <DataList dataType="gameData" />,
                },
                {
                    path: "/app",
                    element: <DataList dataType="nullData" />
                },
                {
                    path: "/about",
                    element: <DataList dataType="nullData" />
                },
            ]
        },
        {
            path: "/tictactoe",
            element: <TicTacToe />
        }
    ]))
}

export default RouterPrimary