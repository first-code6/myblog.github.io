import React from 'react'

import data from '../../../data'

const DataList = () => {
  return (
    <div
      style={{ 
        marginTop: "20px",
        width: "40%",
        minWidth: "280px",
        height: "100%",
       }}
    >
      {
        data.gameData.listData.map(item => {
          return(
            <div
              style={{
                width: "100%",
                height: "10%",
                boxSizing: "border-box",
                padding: "10px",
                userSelect: "none",
                position: "relative",
                border: "1px solid rgb(100, 100, 100)"
              }}
            >

              <a
                href=""
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }} 
              />

              <p
                style={{
                  fontSize: "1.2em"
                }}
              >
                {item.header}
              </p>

              <p style={{
                marginTop: "10px",
                fontSize: "0.8em"
              }}>
                {item.info}
              </p>

              <p style={{
                marginTop: "10px",
                fontSize: "0.8em",
                float: "right",
                color: "rgb(180, 180, 180)",
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