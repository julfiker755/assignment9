import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Home/Home";
import Singleservice from "../../Home/Services/Singleservice";
import Register from "../../Authentication/Register/Register";
import Login from "../../Authentication/Login/Login";
import Private from "../../Authentication/Private/Private";
import Errorpage from "../Errorpage/Errorpage";
import Gallary from "../../Home/Gallary/Gallary";
import Traning from "../../Traning/Traning";
import Events from "../../Home/Events/Events";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },{
                path:'/singledetails/:id',
                element:<Private><Singleservice></Singleservice></Private>,
            },{
                path:"/gallery",
                element:<Gallary></Gallary>
            },{
                path:'/traning',
                element:<Private><Traning></Traning></Private>
            },{
                path:'/event',
                element:<Events></Events>
            }
        ]
    },{
        path:'/register',
        element:<Register></Register>,
    },{
        path:'/login',
        element:<Login></Login>
    }
])
export default routes;