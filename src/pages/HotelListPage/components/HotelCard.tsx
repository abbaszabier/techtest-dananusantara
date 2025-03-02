import { Coins, Hotel, MapPin } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logos from "../../../assets/logos.svg";

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

const HotelCard = ({ hotel }: { hotel: HotelProps }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/hotels/${hotel.slug}`)}
      className="cursor-pointer rounded-md shadow flex bg-white gap-4"
    >
      <div className="flex flex-col gap-0.5">
        <img
          src={hotel.imagePrimary}
          alt={hotel.name}
          className="w-[298px] h-[160px] object-cover rounded-tl-md"
        />
        <div className="flex gap-0.5 w-[300px]">
          {hotel.subImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`hotel-image-${index}`}
              className={`w-[98px] h-[66px] object-cover ${
                index === 0 ? "rounded-bl-md" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between w-full py-4">
        <div>
          <div className="flex items-top justify-between gap-1">
            <h2 className="text-base font-bold">{hotel.name}</h2>
            <div className="flex flex-col items-left justify-start">
              <div className="flex items-center gap-1 text-[#0264c8] font-semibold text-xs">
                <img src={logos} alt="star" className="w-4 h-4" />
                {hotel.rating}
                <span className="text-gray-500">(1,5rb ulasan)</span>
              </div>
              <p className="text-gray-500 text-right font-semibold text-xs">
                {hotel.reviews}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span className="flex items-center gap-1 text-[#0264c8] font-semibold text-xs p-1 bg-[#ecf8ff] rounded-md">
              <Hotel size={12} /> Hotel
            </span>
            {hotel.stars === 3 && (
              <>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </>
            )}
            {hotel.stars === 4 && (
              <>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </>
            )}
            {hotel.stars === 5 && (
              <>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </>
            )}
            <span className="text-blue-500 font-semibold text-sm ml-2">
              {hotel.rating}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MapPin size={14} className="text-gray-500" />
            <p className="text-black text-sm font-medium ">
              {hotel.location}, {hotel.province}, {hotel.country}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {hotel.features.map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-900 font-medium px-1 py-0.5 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-1 w-fit items-center mt-12 text-yellow-600 font-semibold py-1 px-2 text-xs bg-[#fff1ce] rounded-full">
          <Coins size={14} />
          <span className="text-[#732b06]">{hotel.points} Points</span>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-4 px-4 pb-4 w-[500px] items-end border-l-3 border-gray-100">
        <div>
          <p className="text-[#05a569] font-bold text-end">25% OFF</p>
          <p className="text-[#ff5e1f] font-bold text-xl text-end">
            {hotel.price}
          </p>
        </div>
        <button
          className="bg-orange-500 text-white px-3 py-2 text-sm rounded-md font-semibold cursor-pointer"
          onClick={() => navigate(`/hotels/${hotel.slug}`)}
        >
          Pilih Kamar
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
