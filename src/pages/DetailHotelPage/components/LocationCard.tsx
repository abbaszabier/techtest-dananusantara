import { ChevronRight } from "lucide-react";

const LocationCard = () => (
  <div className="relative z-40 bg-white shadow-md border border-gray-100 rounded-xl p-4 flex-1">
    <div className="relative z-30 flex justify-between items-center mb-2">
      <h2 className="text-lg font-bold">Area Akomodasi</h2>
      <a href="#" className="flex items-center gap-2 text-blue-700 text-sm">
        Lihat Peta <ChevronRight size={16} />
      </a>
    </div>

    <img
      src="https://ik.imagekit.io/tvlk/image/imageResource/2023/03/08/1678269700277-fb3bdb104bce257a9f273c868f0fdf56.svg?tr=q-75"
      alt="flash"
      className="absolute top-0 right-0 z-30 pointer-events-none object-cover"
      style={{
        maskImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.8))",
        WebkitMaskImage:
          "linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.8))",
      }}
    />

    <div className="relative z-40 flex items-center space-x-2">
      <p>📍</p>
      <p className="text-sm text-gray-600">
        Jalan Raya Nusa Dua Selatan, Sawangan, Nusa Dua, Bali...
      </p>
    </div>
    <p className="relative z-40 text-blue-500 text-sm mt-2">
      Lokasi Strategis{" "}
      <span className="bg-gray-200 text-xs px-2 py-1 rounded-lg">
        Dekat tempat rekreasi
      </span>
    </p>
    <ul className="relative z-40 mt-2 text-sm text-gray-700 space-y-1">
      <li>📍 Pura Geger - 1.33 km</li>
      <li>📍 Pantai Gunung Payung - 2.20 km</li>
      <li>📍 LIGA.TENNIS Nusa Dua - 529 m</li>
    </ul>
  </div>
);

export default LocationCard;
