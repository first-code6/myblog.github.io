import React, {useState} from 'react'

import data from '../../../data'
import '../style/DataList.css'

const DataList = ({
  dataType="nullData"
}) => {

  const [pageStyle, setPageStyle] = useState({
    marginTop: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "10px",
    userSelect: "none",
    position: "relative",
    border: "1px solid rgb(100, 100, 100)",
    cursor: "pointer",
    transition: "margin-top 0.3s ease-in-out",                
  })

  return (
    <div
      style={{ 
        width: "40%",
        minWidth: "280px",
        height: "100%",
       }}
    >
      {
        data.listData[dataType].map(item => {
          return(
            <div
              className="page"
              onMouseEnter={(e) => {
                console.log(e)
              }}
              key={item.header}
            >

              <p
                style={{
                  fontSize: "1.2em"
                }}
              >
                {item.header}
              </p>

              <p style={{
                marginTop: "10px",
                fontSize: "0.8em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                {item.info}
              </p>

              <p style={{
                marginTop: "10px",
                fontSize: "0.8em",
                color: "rgb(180, 180, 180)",
                alignSelf: "flex-end"
              }}>
                {item.date}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default DataList