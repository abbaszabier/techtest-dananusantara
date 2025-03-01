import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/LandingLayout";
import LandingPage from "../pages/LandingPage";
import HotelListPage from "../pages/HotelListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "hotels",
        element: <HotelListPage />,
      },
    ],
  },
]);

export default router;
