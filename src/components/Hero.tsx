import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Promo1 from "../assets/promo1.png";
import Promo2 from "../assets/promo2.png";
import HotelSearch from "./HotelSearch";

const HotelSearchSection = () => {
  return (
    <div className="relative bg-linear-to-t from-[#3A7FCC] to-[#64B1E3] h-[320px] flex flex-col items-center justify-top">
      <div className="grid grid-cols-1 lg:grid-cols-2 pl-3 w-full">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-left flex flex-col justify-center px-6 lg:pl-48 lg:pr-16"
        >
          <h1 className="text-xl sm:text-2xl font-semibold">
            Booking Hotel & Penginapan Murah dengan Harga Promo
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/70">
            Temukan harga terbaik untuk setiap produk Traveloka yang Anda
            butuhkan.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5 }}
          className="relative w-full overflow-hidden"
        >
          <div className="hidden lg:flex flex-col sm:flex-row gap-4 py-2 w-full">
            <img
              src={Promo1}
              alt="promo1"
              className="h-[180px] sm:h-[230px] aspect-[4/2] rounded-lg object-cover"
            />
            <img
              src={Promo2}
              alt="promo2"
              className="h-[180px] sm:h-[230px] w-full sm:w-[500px] aspect-[4/2] rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute w-[200px] top-[255px] transform -translate-y-1/2 flex w-full justify-center">
        <button>
          <ChevronLeft size={20} className="text-white/30" />
        </button>
        <p className="mx-[110px] text-[12px] text-white/90  text-center flex flex-col font-semibold justify-center">
          Lihat promo lainnya
        </p>
        <button>
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4 flex text-sm items-center text-blue-500 font-semibold">
          <History className="mr-2" /> Hotel yang Terakhir Dilihat
        </div>

        <div className="space-y-4">
          <div className="text-left text-sm">
            <label className="block font-medium text-gray-600">
              Kota, tujuan, atau nama hotel
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1">
              <MapPin className="text-gray-400 mr-2" />
              <input
                type="text"
                className="bg-transparent outline-none w-full text-black"
                defaultValue="Bandung"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-left">
            <div className="text-left text-sm">
              <label className="block font-medium text-gray-600">
                Check-in:
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1">
                <Calendar className="text-gray-400 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-black"
                  defaultValue="Jum, 28 Feb 2025"
                />
              </div>
            </div>
            <div className="text-left text-sm">
              <label className="block font-medium text-gray-600">Durasi</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1">
                <Moon className="text-gray-400 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-black"
                  defaultValue="1 malam"
                />
              </div>
            </div>
            <div className="text-left text-sm">
              <label className="block font-bold text-gray-900">
                Check-out:
              </label>
              <div className="flex items-center py-2 mt-1">
                <p className="text-black">Sab, 29 Feb 2025</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-left">
            <div className="col-span-2 text-left text-sm">
              <label className="block font-medium text-gray-600">
                Tamu dan Kamar
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 mt-1 border-gray-300">
                <User className="text-gray-400 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-black"
                  defaultValue="2 Dewasa, 0 Anak, 1 Kamar"
                />
              </div>
            </div>
            <div className="col-span-1 w-full flex items-end">
              <button className="bg-orange-500 w-full text-white px-6 rounded-lg flex h-10 items-center justify-center cursor-pointer">
                <Search className="mr-2" /> Cari Hotel
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-left items-center">
          <CircleDollarSign className="text-blue-500 mr-2" />
          <button className="text-blue-500 font-semibold">
            Bayar di Hotel
          </button>
        </div>
      </div> */}
      <HotelSearch />
    </div>
  );
};

export default HotelSearchSection;
