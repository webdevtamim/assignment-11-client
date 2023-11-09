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
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/alljobs",
          element: <AllJobs></AllJobs>,
          loader: () => fetch('https://job-seeking-server-seven.vercel.app/jobs')
        },
        {
          path: "/appliedjobs",
          element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
          loader: () => fetch('https://job-seeking-server-seven.vercel.app/appliedJobs')
        },
        {
          path: "/addjob",
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
          path: "/myjobs",
          element: <PrivateRoute><Myjobs></Myjobs></PrivateRoute>,
          loader: () => fetch('https://job-seeking-server-seven.vercel.app/jobs')
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
          loader: () => fetch('https://job-seeking-server-seven.vercel.app/jobs')
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params}) => fetch(`https://job-seeking-server-seven.vercel.app/jobs/${params.id}`)
        },
      ]
    },
  ]);

export default router;