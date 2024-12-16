import { RouterProvider } from "react-router-dom";
import "./Global.scss";
import router from "./routes/routes";
import ErrorBoundary from "./components/errorboundary/ErrorBoundary";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);


  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
