import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CircleHelp } from "lucide-react";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <div className="fixed right-6 bottom-6">
        <button className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-full">
          <CircleHelp className="text-white" />
          <span className="text-sm">Perlu Bantuan?</span>
        </button>
      </div>
    </div>
  );
}
