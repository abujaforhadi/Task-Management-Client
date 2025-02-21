import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layouts/Main";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import DashBoard from "../Pages/Dashboard/DashBoard";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import MyAddedTask from "../Pages/Dashboard/Todo/MyAddedTask";
import UpdatePost from "../Pages/Dashboard/UpdatePost/UpdatePost";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/registration",
          element: <SignUp/>,
        },
        {
          path: "/dashboard",
          element: <PrivateRouter><DashBoard/></PrivateRouter>,
          children:[
            {
              path: "Add_Task",
              element: <AddTask/>,
            },
            {
              path: "All_Task",
              element: <MyAddedTask/>,
            },
            {
              path: 'updateTask/:id',
              element: <UpdatePost></UpdatePost>,
              loader: ({ params }) => fetch(`https://taskserverme.vercel.app/tasks/${params.id}`)
            },
          ]
        },
      ]
    }
  ]);