import React from 'react'
import { useNavigate } from 'react-router-dom'

import data from '../../../data'

const Tag = () => {

  const navigate = useNavigate()

  return (
    <div>
        <ul 
          style={{
              listStyleType: "none",
              padding: "0",
          }}
        >
            {
              data.tagData.tagListData.map(item => {
                return(
                  <li 
                    style={{
                      display: "inline",
                      padding: "10px"
                    }} 
                    key={item.header}
                  >
                    {/* <a
                      href={item.href}
                    >{item.header}</a> */}
                    <div
                      style={{
                        float: "left",
                        margin: "15px",
                      }}
                      onClick={() => {
                        navigate(item.href)
                      }}
                    >
                      {item.header}
                    </div>
                  </li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default Tag