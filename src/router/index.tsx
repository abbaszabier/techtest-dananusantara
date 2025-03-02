import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/LandingLayout";
import LandingPage from "../pages/LandingPage";
import HotelListPage from "../pages/HotelListPage";
import ListHotelLayout from "../layouts/ListHotelLayout";
import DetailHotel from "../pages/DetailHotelPage";
import BookingLayout from "../layouts/BookingLayout";
import BookingPage from "../pages/BookingPage";
import PaymentLayout from "../layouts/PaymentLayout";
import PaymentPage from "../pages/Payment";

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
  {
    path: "/hotels",
    element: <ListHotelLayout />,
    children: [
      {
        path: "",
        element: <HotelListPage />,
      },
      {
        path: ":slug",
        element: <DetailHotel />,
      },
    ],
  },
  {
    path: "/hotels/:slug",
    element: <BookingLayout />,
    children: [
      {
        path: "booking",
        element: <BookingPage />,
      },
    ],
  },
  {
    path: "/hotels/:slug",
    element: <PaymentLayout />,
    children: [
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
