import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/errorboundary/ProtectedRoute";
import DefaultLayout from "./defaultLayout";
import Authlayout from "./authLayout";
import ExploreLayout from "./exploreLayout";
import JoinLayout from "./joinLayout";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";

// <--------------- DefaultLayout pages --------------->
import Home from "../module/defaultpage/home";

// <--------------- Authlayout pages --------------->
import Welcomeapge from "../module/authpages/welcome";
import Signin from "../module/authpages/signin";
import Signup from "../module/authpages/signup";
import Forgotpass from "../module/authpages/forgotpass";
import Otp from "../module/authpages/otp";

// <--------------- ExploreLayout pages --------------->
import Detailspage1 from "../module/explorepages/detailspage1";
import Detailspage2 from "../module/explorepages/detailspage2";
import Detailspage3 from "../module/explorepages/detailspage3";
import Detailspage4 from "../module/explorepages/detailspage4";
import Detailspage5 from "../module/explorepages/detailspage5";
import Detailspage6 from "../module/explorepages/detailspage6";
import Detailspage7 from "../module/explorepages/detailspage7";
import Detailspage8 from "../module/explorepages/detailspage8";
import Detailspage9 from "../module/explorepages/detailspage9";
import Detailspage10 from "../module/explorepages/detailspage10";
import Joinnow from "../module/joinnowpages/joinnowpage";
import Trialpage from "../module/joinnowpages/30daystrialpage";
import Mefitness from "../module/defaultpage/mefitness";
import Mefitnessdetails from "../module/defaultpage/mefitnessdetails";
import Menutrition from "../module/defaultpage/menutrition";
import Menutritionsdetails from "../module/defaultpage/menutritionsdetails";
import Errorpage from "../module/errorpage";
import Mebeauty from "../module/defaultpage/mebeauty";
import Mewisdom from "../module/defaultpage/mewisdom";

// <--------------- JoinLayout pages --------------->

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mefitness",
        element: <Mefitness />,
      },
      {
        path: "/mefitnessdetails",
        element: <Mefitnessdetails />,
      },
      {
        path: "/menutrition",
        element: <Menutrition />,
      },
      {
        path: "/menutritionsdetails",
        element: <Menutritionsdetails />,
      },
      {
        path: "/mebeauty",
        element: <Mebeauty />,
      },
      {
        path: "/meproducts",
        element: <Mebeauty />,
      },
      {
        path: "/mewisdom",
        element: <Mewisdom />,
      },
    ],
  },
  {
    path: "/",
    element: <JoinLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/joinnow",
        element: <Joinnow />,
      },
      {
        path: "/trialpage",
        element: <Trialpage />,
      },
    ],
  },
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
        element: <Detailspage2 />,
      },
      {
        path: "/explore3",
        element: <Detailspage3 />,
      },
      {
        path: "/explore4",
        element: <Detailspage4 />,
      },
      {
        path: "/explore5",
        element: <Detailspage5 />,
      },
      {
        path: "/explore6",
        element: <Detailspage6 />,
      },
      {
        path: "/explore7",
        element: <Detailspage7 />,
      },
      {
        path: "/explore8",
        element: <Detailspage8 />,
      },
      {
        path: "/explore9",
        element: <Detailspage9 />,
      },
      {
        path: "/explore10",
        element: <Detailspage10 />,
      },
    ],
  },
  {
    path: "/",
    element: <Authlayout />,
    errorElement: <Errorpage />,
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
