import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FilterSidebar from "./components/FilterSidebar";
import { hotels } from "../../data/hotels";
import HotelCard from "./components/HotelCard";
import FilterBar from "./components/FilterBar";
import { BadgePercent } from "lucide-react";
import HotelCardGrid from "./components/HotelCardGrid";

const HotelListPage = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const [view, setView] = useState<string>("list");
  const [filteredHotels, setFilteredHotels] = useState<typeof hotels>([]);
  const [priceRange, setPriceRange] = useState<number>(16000000);
  const [starFilter, setStarFilter] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>("");
  const [priceView, setPriceView] = useState<string>("");

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPriceRange(Number(event.target.value));
  };

  const handleStarFilterChange = (stars: number, isChecked: boolean) => {
    if (isChecked) {
      setStarFilter((prev) => [...prev, stars]);
    } else {
      setStarFilter((prev) => prev.filter((star) => star !== stars));
    }
  };

  useEffect(() => {
    let filtered = hotels;

    if (location) {
      filtered = filtered.filter((hotel) => hotel.location.includes(location));
    }

    if (priceRange) {
      filtered = filtered.filter((hotel) => {
        const price = Number(hotel.price.replace(/[^0-9]/g, ""));
        return price <= priceRange;
      });
    }

    if (starFilter.length > 0) {
      filtered = filtered.filter((hotel) => starFilter.includes(hotel.stars));
    }

    if (sortBy) {
      switch (sortBy) {
        case "Harga tertinggi":
          filtered.sort((a, b) => {
            const priceA = Number(a.price.replace(/[^0-9]/g, ""));
            const priceB = Number(b.price.replace(/[^0-9]/g, ""));
            return priceB - priceA;
          });
          break;
        case "Harga terendah":
          filtered.sort((a, b) => {
            const priceA = Number(a.price.replace(/[^0-9]/g, ""));
            const priceB = Number(b.price.replace(/[^0-9]/g, ""));
            return priceA - priceB;
          });
          break;
        case "Nilai ulasan":
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case "Popularitas tertinggi":
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    }

    setFilteredHotels(filtered);
  }, [starFilter, location, priceRange, sortBy]);

  return (
    <div className="container mx-auto p-6 flex gap-6">
      <FilterSidebar
        priceRange={priceRange}
        handlePriceRangeChange={handlePriceRangeChange}
        handleStarFilterChange={handleStarFilterChange}
      />

      <div className="w-full">
        <FilterBar
          location={location || "Semua Lokasi"}
          totalProperties={filteredHotels.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setPriceView={setPriceView}
          priceView={priceView}
          view={view}
          setView={setView}
        />
        <div className="h-[64px] w-full bg-[#0076ff] rounded-xl mb-4 mt-1 gap-3 py-4 px-8 flex items-center justify-start">
          <BadgePercent size={20} color="#fff" />
          <p className="text-white text-center">
            Nginep di hotel lebih seru dengan Birthday Sale diskon s.d. 50%.
            Pesan sekarang!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 px-1">
          {filteredHotels.length > 0 ? (
            view === "list" ? (
              filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))
            ) : (
              <HotelCardGrid hotels={filteredHotels} />
            )
          ) : (
            <p className="text-gray-500">Tidak ada hotel yang ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelListPage;
