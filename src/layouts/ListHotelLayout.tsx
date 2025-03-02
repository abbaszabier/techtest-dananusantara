import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { CircleHelp } from "lucide-react";
import Footer from "../components/Footer";
import FilterListHotel from "../components/FilterListHotel";

export default function ListHotelLayout() {
  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <Navbar />
      <FilterListHotel />

      <Outlet />
      {/* <div className="fixed right-4 bottom-4">
        <button className="flex items-center gap-2 bg-[#0194f3] text-white px-3 py-2 shadow rounded-full cursor-pointer hover:bg-[#0077c2] transition-all duration-300">
          <CircleHelp className="text-white" fontVariant="bold" size={22} />
          <span className="text-base font-bold opacity-0 scale-0 transition-all duration-300 hover:opacity-100 hover:scale-100">
            Perlu Bantuan?
          </span>
        </button>
      </div> */}
      <Footer />
    </div>
  );
}
