import React from "react"
import ReactDOM from "react-dom/client"
import { Tweet } from "./components/Tweet"

import "./components/global.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Tweet user="Alois" likes={10}>
        Meu primeiro tweet
      </Tweet>
      <Tweet user="Gerhard">Testaaaando</Tweet>
      <Tweet user="Stephan" likes={2}>
        Hello!
      </Tweet>
    </div>
  </React.StrictMode>
)
