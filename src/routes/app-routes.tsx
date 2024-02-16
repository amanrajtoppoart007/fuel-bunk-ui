import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Tanks from "../pages/Tanks";
import Employee from "../pages/Employee";
import Dus from "../pages/Dus";
import DayStart from "../pages/DayStart";
import DayEnd from "../pages/DayEnd";
import AllReconcillation from "../pages/AllReconcillation";


const appRoutes = createBrowserRouter([
    {
        path:'/',
        element:<Dashboard/>
    },
    {
        path:'/product',
        element:<Product/>

    },
    {
        path:'/tanks',
        element:<Tanks/>
    },
    {
        path:'/employee',
        element:<Employee/>
    },
    {
        path:'/dus',
        element:<Dus/>
    },
    {
        path:'/day-start',
        element:<DayStart/>
    },
    {
        path:'/day-end',
        element:<DayEnd/>
    },
    {
        path:'all-reconcillation',
        element:<AllReconcillation/>
    }
])

export default appRoutes