import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SpecificCategory from "../Pages/SpecificCategory/SpecificCategory";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/categories/:id',
                element:<SpecificCategory></SpecificCategory>,
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }

]);
export default router;