import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./routers"
import axios from "axios"


// axios setup
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <RouterProvider router={router} />
  </>
)
