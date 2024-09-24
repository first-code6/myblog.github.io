import { useRef } from "react"

const usedebounce = (fun, delate) => {
  const timer = useRef()
  return () => {
    timer ? clearTimeout(timer.current) : ""
    setTimeout(() => {
      fun
    }, delate)
  }  
}

export {
  usedebounce
}