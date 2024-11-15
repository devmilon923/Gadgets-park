import { createBrowserRouter } from "react-router-dom";
import Sideproduct from "../components/Sideproduct";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import Reviews from "../pages/Reviews";
import Statistics from "../pages/Statistics";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
       
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
                children:[{
                    path:'/:category',
                    element:<Sideproduct></Sideproduct>,
                    loader:()=>fetch('../data.json'),
                },
                {
                    path:'/',
                    element:<Sideproduct></Sideproduct>,
                    loader:()=>fetch('../data.json'),
                }]
              
                         
            },
          
         
            {
                path:'statistics',
                element:<Statistics></Statistics>,
                loader:()=>fetch('../data.json')
            },
            {
               
                    path:'dashboard/:section',
                    element: <Dashboard></Dashboard>
               
                
            },
            {
                path:'details/:pid',
                element:<ProductDetails></ProductDetails>
            },
            {
                path:'reviews/:section',
                element:<Reviews></Reviews>,
                loader:()=>fetch('../reviews.json')
            },
        ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])

