import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/MainPage/Home";



const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element: <Home></Home>,
                loader : ()=> fetch('/public/data.json')
            }
        ]
    }
]);

export default router;