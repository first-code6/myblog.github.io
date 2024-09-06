import { BrowserRouter } from "react-router-dom"
import RouterPrimary from "./routers/RouterPrimary"

const  App = () => {

  return (
    <BrowserRouter>
      <RouterPrimary />
    </BrowserRouter>
  )
}

export default App
