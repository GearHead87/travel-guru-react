import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>
            },
        ],
    },
]);

export default router;