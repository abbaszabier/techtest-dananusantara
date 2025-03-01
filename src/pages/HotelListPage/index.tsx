/* eslint-disable react-refresh/only-export-components */
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FilterSidebar from "./components/FilterSidebar";

export const hotels = [
  {
    id: 1,
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
    location: "Bandung",
    name: "HARRIS Hotel",
    rating: 8.7,
    reviews: 12536,
    price: "Rp 564.857",
    stars: 3,
  },
  {
    id: 2,
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
    location: "Bandung",
    name: "Hotel Santika",
    rating: 8.7,
    reviews: 12536,
    price: "Rp 564.857",
    stars: 3,
  },
  {
    id: 3,
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
    location: "Bandung",
    name: "Hotel Aryaduta",
    rating: 8.7,
    reviews: 1575,
    price: "Rp 1.308.000",
    stars: 4,
  },
  {
    id: 4,
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
    location: "Sunter",
    name: "Hotel Neo",
    rating: 8.6,
    reviews: 10772,
    price: "Rp 796.772",
    stars: 4,
  },
];

const HotelListPage = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location") || "";
  const [filteredHotels, setFilteredHotels] = useState<typeof hotels>([]);

  useEffect(() => {
    if (location) {
      setFilteredHotels(
        hotels.filter((hotel) => hotel.location.includes(location))
      );
    } else {
      setFilteredHotels(hotels);
    }
  }, [location]);

  return (
    <div className="container mx-auto p-6 flex gap-6">
      {/* Filter Sidebar */}
      <FilterSidebar />

      {/* Hotel List */}
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-4">
          Hotel di {location || "Semua Lokasi"}
        </h1>
        <div className="grid grid-cols-1 gap-4">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <div key={hotel.id} className="border p-4 rounded-lg flex gap-4">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold">{hotel.name}</h2>
                  <p className="text-sm text-gray-500">{hotel.location}</p>
                  <p className="text-sm text-gray-500">
                    ⭐ {hotel.rating} ({hotel.reviews} reviews)
                  </p>
                  <p className="font-bold text-orange-500">{hotel.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Tidak ada hotel yang ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelListPage;
