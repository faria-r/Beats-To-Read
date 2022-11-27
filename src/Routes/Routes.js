import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import AllBuyres from "../Pages/DashBoardLayot/AllBuyers/AllBuyres";
import AllSeller from "../Pages/DashBoardLayot/AllSeller/AllSeller";
import Addproduct from "../Pages/DashBoardLayot/DashboardLayout/AddProduct/Addproduct";
import DashboardLayout from "../Pages/DashBoardLayot/DashboardLayout/DashboardLayout";
import Myorders from "../Pages/DashBoardLayot/DashboardLayout/Myorders/Myorders";
import MyProduct from "../Pages/DashBoardLayot/MyProduct/MyProduct";
import DisplayError from "../Pages/DisplayError/DisplayError";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/register/Register";
import SpecificCategory from "../Pages/SpecificCategory/SpecificCategory";
import AdminRoute from "./AdminRoutes/AdminRoutes";
import Privateroutes from "./PrivateRoutes/Privateroutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/categories/:name",
        element: <Privateroutes><SpecificCategory></SpecificCategory></Privateroutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.name}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/myorders",
        element: <Myorders></Myorders>,
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyres></AllBuyres>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: <Addproduct></Addproduct>,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProduct></MyProduct>,
      },
    ],
  },
]);
export default router;
