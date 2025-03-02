import { Calendar, MapPin, Search, User } from "lucide-react";

export default function FilterListHotel() {
  return (
    <div className="w-full z-50 flex items-center justify-between mx-auto h-[72px] bg-white shadow-md sticky top-0 px-28">
      <div className="flex items-center border border-gray-300 rounded-l-lg px-3 py-3 hover:border-black/50 w-full">
        <MapPin className="text-gray-400 mr-2" color="#0194f3" />
        <input
          type="text"
          className="bg-transparent outline-none w-full text-black"
          placeholder="Cari lokasi"
        />
      </div>

      <div className="flex items-center border-y hover:border border-gray-300 px-3 py-3 hover:border-black/50 w-full">
        <Calendar className="text-gray-400 mr-2" color="#0194f3" />
        <input
          type="text"
          className="bg-transparent outline-none w-full text-black"
          placeholder="Pilih tanggal"
        />
      </div>

      <div className="flex items-center border border-gray-300 px-3 py-3 hover:border-black/50 w-full">
        <User className="text-gray-400 mr-2" color="#0194f3" />
        <input
          type="text"
          className="bg-transparent outline-none w-full text-black"
          placeholder="Tamu & Kamar"
        />
      </div>

      <button
        type="submit"
        className="bg-[#0194f3] text-white gap-2 px-3 rounded-r-lg flex text-base h-12.5 items-center justify-center cursor-pointer w-1/3"
      >
        <Search size={18} className="" /> Cari Hotel
      </button>
    </div>
  );
}
