import React from 'react'

import Tag from './component/Tag'
import DataList from './component/DataList'

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, rgba(26,26,37,1) 0%, rgba(12,1,36,1) 50%, rgba(33,32,43,1) 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Tag />
      <DataList />
    </div>
  )
}

export default Home