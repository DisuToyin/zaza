import Timeline from "./pages/Timeline";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Timeline />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "signup",
        element: <Signup />,
    },
]);

export default router;
