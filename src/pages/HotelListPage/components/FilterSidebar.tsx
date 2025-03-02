import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaStar } from "react-icons/fa";

interface FilterSidebarProps {
  priceRange: number;
  handlePriceRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleStarFilterChange: (stars: number, isChecked: boolean) => void;
}

const FilterSidebar = ({
  priceRange,
  handlePriceRangeChange,
  handleStarFilterChange,
}: FilterSidebarProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isStarOpen, setIsStarOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);

  return (
    <div className="w-72 bg-gray-50 rounded-lg">
      <div className="rounded-xl flex flex-col items-center mb-4">
        <img
          src="src/assets/peta.png"
          alt="filter"
          className="h-[125px] w-[250px] object-cover rounded-xl cursor-pointer"
        />
      </div>

      <div className="border border-gray-100 bg-white p-3 rounded-xl mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold">Rentang Harga</h2>
          <button className="text-sm text-blue-500 font-bold">Reset</button>
        </div>
        <p className="text-xs text-gray-500">Per kamar, per malam</p>
        <input
          type="range"
          min={0}
          max={16000000}
          step={100000}
          className="w-full mt-4"
          onChange={handlePriceRangeChange}
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>IDR {priceRange}</span>
          <span>IDR 16.000.000</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Filter Populer */}
        <div className="flex flex-col bg-[#ecf8ff] rounded-lg">
          <div
            className="flex p-3 justify-between items-center cursor-pointer"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <h2 className="text-sm font-bold">Filter Populer</h2>
            <div className="flex items-center rounded-full bg-white p-1">
              {isFilterOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </div>
          </div>
          {isFilterOpen && (
            <div className="m-1 px-4 py-2 rounded-lg space-y-2 text-sm bg-white">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(4, e.target.checked)}
                />
                <div className="flex items-center gap-2 font-semibold">
                  <div className="text-[#0194f3] font-bold flex item-center gap-1">
                    <img
                      src="src/assets/logos.svg"
                      alt="flash"
                      className="w-4 h-4"
                    />
                    8+
                  </div>
                  Mengesankan
                </div>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(5, e.target.checked)}
                />
                <div className="flex items-center gap-1 font-semibold">
                  5 <FaStar className="text-yellow-500" />
                  <span className="text-gray-400">(2)</span>
                </div>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(4, e.target.checked)}
                />
                <div className="flex items-center gap-1 font-semibold">
                  4 <FaStar className="text-yellow-500" />
                </div>
              </label>
            </div>
          )}
        </div>

        {/* Filter Bintang */}
        <div className="bg-white p-3 rounded-lg border border-gray-100">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsStarOpen(!isStarOpen)}
          >
            <h2 className="text-sm font-bold">Bintang</h2>
            <div className="flex items-center rounded-full bg-[#ecf8ff] p-1">
              {isStarOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </div>
          {isStarOpen && (
            <div className="mt-2 space-y-2 text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(5, e.target.checked)}
                />
                <div className="flex items-center gap-1 font-semibold">
                  5 <FaStar className="text-yellow-500" />
                </div>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(4, e.target.checked)}
                />
                <div className="flex items-center gap-1 font-semibold">
                  4 <FaStar className="text-yellow-500" />
                </div>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(3, e.target.checked)}
                />
                <div className="flex items-center gap-1 font-semibold">
                  3 <FaStar className="text-yellow-500" />
                </div>
              </label>
            </div>
          )}
        </div>

        {/* Filter Bintang */}
        <div className="bg-white p-3 rounded-lg border border-gray-100">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsRatingOpen(!isRatingOpen)}
          >
            <h2 className="text-sm font-bold">Rating dari tamu</h2>
            <div className="flex items-center rounded-full bg-[#ecf8ff] p-1">
              {isRatingOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </div>
          </div>
          {isRatingOpen && (
            <div className="mt-2 space-y-2 text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(3, e.target.checked)}
                />
                <div className="flex items-center gap-2 font-semibold">
                  <div className="text-[#0194f3] font-bold flex item-center gap-1">
                    <img
                      src="src/assets/logos.svg"
                      alt="flash"
                      className="w-4 h-4"
                    />
                    7+
                  </div>
                  Nyaman
                </div>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(4, e.target.checked)}
                />
                <div className="flex items-center gap-2 font-semibold">
                  <div className="text-[#0194f3] font-bold flex item-center gap-1">
                    <img
                      src="src/assets/logos.svg"
                      alt="flash"
                      className="w-4 h-4"
                    />
                    8+
                  </div>
                  Mengesankan
                </div>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleStarFilterChange(5, e.target.checked)}
                />
                <div className="flex items-center gap-2 font-semibold">
                  <div className="text-[#0194f3] font-bold flex item-center gap-1">
                    <img
                      src="src/assets/logos.svg"
                      alt="flash"
                      className="w-4 h-4"
                    />
                    9+
                  </div>
                  Luar biasa
                </div>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
