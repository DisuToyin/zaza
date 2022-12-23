import Timeline from "./pages/Timeline";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Timeline />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;
