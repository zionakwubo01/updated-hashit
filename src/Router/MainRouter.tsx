import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homescreen from "../pages/Homescreen";

const MainRouter = createBrowserRouter([
{
    path: "/",
    element: <Layout/>,
    children:[
        {
            index: true,
            element: <Homescreen/>
        }
    ]
}

])
export default MainRouter;