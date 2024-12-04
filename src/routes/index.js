import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import DefaultLayout from "./defaultLayout";
import Authlayout from "./authLayout";
import ExploreLayout from "./exploreLayout";
import Home from "../module/defaultpage/home";
import Welcomeapge from "../module/authpages/welcome";
import Signin from "../module/authpages/signin";
import Signup from "../module/authpages/signup";
import Forgotpass from "../module/authpages/forgotpass";
import Otp from "../module/authpages/otp";
import Detailspage1 from "../module/explorepages/detailspage1";
import ErrorBoundary from "../components/ErrorBoundary"; // Assuming ErrorBoundary is defined in this file
import Detailspage2 from "../module/explorepages/detailspage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "/explore1",
  //   element: (
  //     <ProtectedRoute>
  //       <Detailspage1 />
  //     </ProtectedRoute>
  //   ),
  //   errorElement: <ErrorBoundary />,
  // },
  {
    path: "/",
    element: <ExploreLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/explore1",
        element: (
          <ProtectedRoute>
            <Detailspage1 />
          </ProtectedRoute>
        ),
      },
      {
        path: "/explore2",
        element: <Detailspage2 /> ,
      },
    ],
  },
  {
    path: "/",
    element: <Authlayout />,
    children: [
      {
        path: "welcome",
        element: <Welcomeapge />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgotpassword",
        element: <Forgotpass />,
      },
      {
        path: "otp",
        element: <Otp />,
      },
    ],
  },
]);

export default router;
