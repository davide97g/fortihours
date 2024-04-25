import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
