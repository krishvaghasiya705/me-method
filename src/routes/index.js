import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/defaultpage/home";
import Authlayout from "./authLayout";
import Welcomeapge from "../module/authpages/welcome";
import Signin from "../module/authpages/signin";
import Signup from "../module/authpages/signup";
import Forgotpass from "../module/authpages/forgotpass";

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
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgotpassword",
        element: <Forgotpass />,
      },
    ],
  },
]);

export default router;
