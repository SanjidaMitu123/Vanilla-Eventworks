import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/MainPage/Home";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Services from "../serviecs/Services";
import BestWorks from "../best work/BestWorks";
import Review from "../reviews/Review";
import ServicesDtails from "../serviecs/ServicesDtails";
import Login from "../login/Login";
import Register from "../login/Register";
import ContractUs from "../pages/contactpage/ContractUs";



const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element: <Home></Home>,
                loader : ()=> fetch('/public/data.json')
            },
            {
                path : "/services",
                element : <Services ></Services>,
                loader : ()=> fetch('/public/data.json')
            }
            ,
            {
                path : "/works",
                element : <BestWorks></BestWorks>
               
            }  ,
            {
                path : "/reviews",
                element : <Review></Review>
               
            },
            {
                path : "/contacts",
                element :<ContractUs></ContractUs>
               
            },
            {
                path : "/services/:id",
                element : <ServicesDtails></ServicesDtails>,
                loader : ()=> fetch('/public/data.json')
                
            },
            {
                path : "/login",
                element : <Login></Login>,
               
            } ,
            {
                path : "/register",
                element : <Register></Register>,
               
            } 
        ]
    }
]);

export default router;