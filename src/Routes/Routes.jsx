import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddJob from "../Pages/AddJob/AddJob";
import Myjobs from "../Pages/MyJobs/Myjobs";
import Blogs from "../Pages/Blogs/Blogs";

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
          element: <AppliedJobs></AppliedJobs>,
        },
        {
          path: "/addjob",
          element: <AddJob></AddJob>,
        },
        {
          path: "/myjobs",
          element: <Myjobs></Myjobs>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
      ]
    },
  ]);

export default router;