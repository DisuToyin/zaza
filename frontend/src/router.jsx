import Timeline from "./pages/Timeline";
import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/home",
        element: <Timeline />,
    },
]);

export default router;
