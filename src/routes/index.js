import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Authlayout from "./authLayout";
import Welcomeapge from "../module/welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Authlayout />,
    children: [
      {
        path: "/welcome",
        element: <Welcomeapge />,
      },
    ],
  },
]);

export default router;
