import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret";
import Dashboard from "../Layout/Dashboard";
import TaskList from "../Pages/Dashboard/Worker/TaskList/TaskList";
import MySubmissions from "../Pages/Dashboard/Worker/MySubmissions/MySubmissions";
import Withdrawals from "../Pages/Dashboard/Worker/Withdrawals/Withdrawals";
import UserHome from "../Pages/Dashboard/Worker/UserHome/UserHome";
import TaskDetails from "../Pages/TaskDetails/TaskDetails";
import AddTasks from "../Pages/Dashboard/TaskCreator/AddTasks";
import MyTasks from "../Pages/Dashboard/TaskCreator/MyTasks";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AdminRoutes from "./AdminRoutes";







export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/secret',
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>,
      },



    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoutes><UserHome></UserHome></PrivateRoutes>,
      },
      {
        path: "tasklist",
        element: <PrivateRoutes><TaskList></TaskList></PrivateRoutes>
      },
      {
        path: "tasklist/taskdetails/:id",
        element: <PrivateRoutes><TaskDetails></TaskDetails></PrivateRoutes>
      },
      {
        path: "submissions",
        element: <PrivateRoutes><MySubmissions></MySubmissions></PrivateRoutes>
      },
      {
        path: "withdrawals",
        element: <PrivateRoutes><Withdrawals></Withdrawals></PrivateRoutes>
      },
      {
        path: "add-task",
        element: <PrivateRoutes><AddTasks></AddTasks></PrivateRoutes>
      },
      {
        path: "my-tasks",
        element: <PrivateRoutes><MyTasks></MyTasks></PrivateRoutes>
      },
      {
        path: "manage-users",
        element:
          <PrivateRoutes>
            <AdminRoutes>
              <ManageUsers>
              </ManageUsers>
            </AdminRoutes>
          </PrivateRoutes>,
      }

    ]
  }
]);
