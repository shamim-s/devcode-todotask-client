import AddTask from "../Pages/AddTask/AddTask";
import Completed from "../Pages/Completed/Completed";
import SignUp from "../Pages/SignUp/SignUp";
import Trash from "../Pages/Trash/Trash";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../Layout/Layout");
const { default: Login } = require("../Pages/Login/Login");

export const route = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoutes><Layout/></PrivateRoutes>,
        children: [
            {
                path: "/",
                element:<AddTask/>
            },
            {
                path: "/completed",
                element: <Completed/>
            },
            {
                path: "/trash",
                element: <Trash/>
            },
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
])