import React from 'react'
import Button from '../../../component/Button'
import data from '../../../data'

const Tag = () => {

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
                  <li style={{
                      display: "inline",
                      padding: "10px"
                    }} 
                    key={item.header}
                  >
                    <a
                      href={item.href}
                    >{item.header}</a>
                  </li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default Tag