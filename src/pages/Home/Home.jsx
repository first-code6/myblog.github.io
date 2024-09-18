import React from 'react'

import Tag from './component/Tag'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "rgba(20, 20, 20)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Tag />
      
      <Outlet />
    </div>
  )
}

export default Home