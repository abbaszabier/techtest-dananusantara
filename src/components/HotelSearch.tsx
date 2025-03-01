import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  History,
  MapPin,
  Calendar,
  Moon,
  User,
  Search,
  CircleDollarSign,
} from "lucide-react";

const HotelSearch = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: "Bandung",
    checkIn: "Jum, 28 Feb 2025",
    duration: "1 malam",
    guests: "2 Dewasa, 0 Anak, 1 Kamar",
  });

  const handleSearch = () => {
    navigate("/hotels?location=" + encodeURIComponent(searchParams.location));
  };

  return (
    <form className="absolute top-[270px] left-1/2 transform -translate-x-1/2 w-full max-w-[950px] bg-white rounded-md shadow-lg border border-gray-100 dark:border-gray-800">
      <div className="mb-4 h-12 px-4 rounded-t-md flex bg-gray-50 text-sm items-center text-blue-500 font-bold">
        <History className="mr-2" size={20} /> Hotel yang Terakhir Dilihat
      </div>

      <div className="space-y-4 px-4">
        <div className="text-left text-sm">
          <label className="block font-medium text-gray-500">
            Kota, tujuan, atau nama hotel
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 hover:border-black/50">
            <MapPin className="text-gray-400 mr-2" />
            <input
              type="text"
              className="bg-transparent outline-none w-full text-black"
              value={searchParams.location}
              onChange={(e) =>
                setSearchParams({ ...searchParams, location: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-left">
          <div className="flex col-span-2 gap-5 text-left text-sm">
            <div className="text-left text-sm w-full">
              <label className="block font-medium text-gray-500">
                Check-in:
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 hover:border-black/50">
                <Calendar className="text-gray-400 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-black"
                  value={searchParams.checkIn}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      checkIn: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="text-left text-sm w-full">
              <label className="block font-medium text-gray-500">Durasi</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 hover:border-black/50">
                <Moon className="text-gray-400 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-black"
                  value={searchParams.duration}
                  onChange={(e) =>
                    setSearchParams({
                      ...searchParams,
                      duration: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="text-left text-sm">
              <label className="block font-bold text-gray-900">
                Check-out:
              </label>
              <div className="flex items-center py-2 my-1">
                <p className="text-black text-base">Sab, 29 Feb 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 text-left">
          <div className="col-span-2 text-left text-sm">
            <label className="block font-medium text-gray-500">
              Tamu dan Kamar
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 border-gray-300 hover:border-black/50">
              <User className="text-gray-400 mr-2" />
              <input
                type="text"
                className="bg-transparent outline-none w-full text-black"
                value={searchParams.guests}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, guests: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-span-1 w-full flex items-end">
            <button
              className="bg-orange-500 w-full text-white px-6 rounded-lg flex h-10 items-center justify-center cursor-pointer"
              onClick={handleSearch}
            >
              <Search size={20} className="mr-2" /> Cari Hotel
            </button>
          </div>
        </div>
      </div>

      <div className="flex p-4 justify-left items-center cursor-pointer">
        <CircleDollarSign className="text-blue-500 mr-1" />
        <button className="text-blue-500 text-[14px] font-bold cursor-pointer">
          Bayar di Hotel
        </button>
      </div>
    </form>
  );
};

export default HotelSearch;
