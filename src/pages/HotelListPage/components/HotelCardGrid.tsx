import { Star, MapPin } from "lucide-react";

export interface HotelProps {
  id: number;
  slug: string;
  imagePrimary: string;
  subImages: string[];
  location: string;
  name: string;
  province: string;
  country: string;
  rating: number;
  reviews: string;
  price: string;
  stars: number;
  features: string[];
  points: number;
}

export default function HotelCardGrid({ hotels }: { hotels: HotelProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="rounded-xl overflow-hidden shadow-lg border border-gray-100"
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src={hotel.imagePrimary}
              alt={hotel.name}
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {hotel.subImages.slice(0, 3).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 0 ? "bg-white" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="p-2">
            <div className="flex items-center justify-between">
              <h2 className="text-md font-bold">{hotel.name}</h2>
              <span className="text-blue-600 font-semibold">
                {hotel.rating}
              </span>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md">
                Resor
              </span>
              <div className="flex items-center text-yellow-400">
                {[...Array(hotel.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>
            <div className="flex items-center mt-2 text-gray-600 text-sm">
              <MapPin size={14} />
              <span className="ml-1">{hotel.location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-700">
              {hotel.features.slice(0, 3).map((feature, i) => (
                <span key={i} className="bg-gray-200 px-2 py-1 rounded-md">
                  {feature}
                </span>
              ))}
              {hotel.features.length > 3 && (
                <span className="bg-gray-300 px-2 py-1 rounded-md">3+</span>
              )}
            </div>

            <p className="text-green-600 font-bold text-sm mt-2">25% OFF</p>
            <p className="text-orange-600 text-xl font-bold">{hotel.price}</p>
            <p className="text-xs text-gray-500">Termasuk pajak & biaya</p>
            <button className="w-full bg-orange-500 text-white mt-4 py-2 rounded-md">
              Pilih
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
