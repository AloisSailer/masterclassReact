import React from "react"
import ReactDOM from "react-dom/client"
import "./components/global.css"

import { RouterProvider } from "react-router-dom"
import { router } from "./components/routes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
