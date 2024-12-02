import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import ExplorePage from "../pages/ExplorePage"
import DetailsePage from "../pages/DetailsePage"
import SearchPage from "../pages/SearchPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: ":explore",
        element: <ExplorePage/>,
      },
      {
        path: ":explore/:id",
        element: <DetailsePage/>,
      },
      {
        path: "search",
        element: <SearchPage/>,
      }, 
    ],
  },
])
export default router