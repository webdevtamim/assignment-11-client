import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddJob from "../Pages/AddJob/AddJob";
import Myjobs from "../Pages/MyJobs/Myjobs";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/alljobs",
          element: <AllJobs></AllJobs>,
        },
        {
          path: "/appliedjobs",
          element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
        },
        {
          path: "/addjob",
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
          path: "/myjobs",
          element: <PrivateRoute><Myjobs></Myjobs></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/jobs')
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/job/:id",
          element: <PrivateRoute><Details></Details></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/jobs')
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
      ]
    },
  ]);

export default router;