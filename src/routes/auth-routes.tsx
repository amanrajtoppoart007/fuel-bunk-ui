import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";


const authRoutes = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default authRoutes