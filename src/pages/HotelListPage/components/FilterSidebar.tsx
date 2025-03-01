import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterSidebar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isPromoOpen, setIsPromoOpen] = useState(true);
  const [isStarOpen, setIsStarOpen] = useState(true);

  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">
      <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center mb-4">
        <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium cursor-pointer">
          Eksplor di Peta
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Rentang Harga</h2>
          <button className="text-blue-500 font-medium">Reset</button>
        </div>
        <p className="text-sm text-gray-500">Per kamar, per malam</p>
        <input
          type="range"
          min={0}
          max={16000000}
          step={100000}
          className="w-full mt-4"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>IDR 0</span>
          <span>IDR 16.000.000</span>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <h2 className="font-semibold">Filter Populer</h2>
          {isFilterOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
        {isFilterOpen && (
          <>
            <div className="mt-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsPromoOpen(!isPromoOpen)}
              >
                <h3 className="font-semibold">Promo & Diskon</h3>
                {isPromoOpen ? <ChevronUp /> : <ChevronDown />}
              </div>
              {isPromoOpen && (
                <div className="mt-2 space-y-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />{" "}
                    <span>Promo untuk Anda (175)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" /> <span>Extra Benefit (56)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" /> <span>Promo Domestik (18)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" /> <span>Best Price (11)</span>
                  </label>
                </div>
              )}
            </div>

            {/* Bintang */}
            <div className="mt-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsStarOpen(!isStarOpen)}
              >
                <h3 className="font-semibold">Bintang</h3>
                {isStarOpen ? <ChevronUp /> : <ChevronDown />}
              </div>
              {isStarOpen && (
                <div className="mt-2 space-y-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" /> <span>1 ⭐ (2206)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" /> <span>2 ⭐ (653)</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" /> <span>3 ⭐ (959)</span>
                  </label>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
