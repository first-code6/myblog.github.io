import React from 'react'

const Button = ({sx={}, text="", type="main", onClick, ...rest}) => {

  return (
    <button style={{
      ...sx,
      padding: "5px",
      backgroundColor: "rgba(0,0,0,0)",
      border: "0",
      color: "white"
    }}
    onClick={onClick}
    {...rest}
    >
      {text}
    </button>
  )
}

export default Button