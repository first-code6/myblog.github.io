import React from 'react'
import Button from '../../../component/Button'

const Tag = () => {

  const listData = [
    {
      header: "首页"
    },
    {
      header: "应用"
    },
    {
      header: "游戏"
    },
    {
      header: "关于我"
    },
  ]

  return (
    <div>
        <ul 
          style={{
              listStyleType: "none",
              padding: "0",
          }}
          className="TagList"
        >
            {
              listData.map(item => {
                return(
                  <li style={{ padding: "10px", display: "inline"}} key={item.header}>
                    <Button text={item.header} onClick={() => {alert(item.header)}}/>
                  </li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default Tag