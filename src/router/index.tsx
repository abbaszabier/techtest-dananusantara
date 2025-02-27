import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/LandingLayout";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
