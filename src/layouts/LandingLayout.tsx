import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CircleHelp } from "lucide-react";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <div className="fixed right-4 bottom-4">
        <button className="flex items-center gap-1 bg-[#0194f3] text-white px-3 py-2 shadow rounded-full cursor-pointer hover:bg-[#0077c2]">
          <CircleHelp className="text-white" fontVariant="bold" size={22} />
          <span className="text-base font-bold">Perlu Bantuan?</span>
        </button>
      </div>
      <Footer />
    </div>
  );
}
