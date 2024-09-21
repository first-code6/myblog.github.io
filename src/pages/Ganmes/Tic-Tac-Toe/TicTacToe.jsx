import React, {useEffect, useState} from 'react'

const TicTacToe = () => {
  
  const [minSize, setMinSize] = useState(0)

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
        translate: "-50% -50%"
      }}
    >

    </div>
  )
}

export default TicTacToe