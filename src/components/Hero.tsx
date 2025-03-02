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
      <HotelSearch />
    </div>
  );
};

export default HotelSearchSection;
