import React, {useEffect, useState} from 'react'

const TicTacToe = () => {
  
  const [minSize, setMinSize] = useState(0)
  const [box, setBox] = useState([
    [1,2,3],
    [6,5,4],
    [7,8,9]
  ])

  const getSize = () => {
    if(window.innerHeight < window.innerWidth){
      setMinSize(window.innerHeight * 0.8)
    } else {
      setMinSize(window.innerWidth  * 0.8)
    }
  }

  useEffect(() => {

    getSize()

    window.addEventListener("resize", getSize)

    return(() => {
      window.removeEventListener("resize", getSize)
    })
  },[])


  return (
    <div
      style={{
        width: minSize+"px",
        height: minSize+"px",
        backgroundColor: "grey",
        position: "relative",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
        display: "grid",
        gridTemplateColumns: "repeat(3,33.33%)",
        gridTemplateRows: "repeat(3,33.33%)",
      }}
    >

      {
        box.map((item, index) => {
          let showList = []
          item.map((item1, index1) => {
            showList.push(
              <div
                key={item+""+item1}
                style={{
                  backgroundColor: "green",
                  borderTop: index === 0 ? "none" : "1px solid white",
                  borderBottom: index === 2 ? "none" : "1px solid white",
                  borderLeft: index1 === 0 ? "none" : "1px solid white",
                  borderRight: index1 === 2 ? "none" : "1px solid white",
                }}
              >
              </div>
            )
          })
          return showList
        })
      }

    </div>
  )
}

export default TicTacToe