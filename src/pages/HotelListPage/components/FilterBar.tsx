import { Grid, List } from "lucide-react";

interface FilterBarProps {
  location?: string;
  totalProperties?: number;
  setSortBy?: (sortBy: string) => void;
  sortBy?: string;
  setPriceView: (priceView: string) => void;
  priceView?: string;
  setView?: (view: string) => void;
  view?: string;
}

const FilterBar = ({
  location,
  totalProperties,
  setSortBy,
  sortBy,
  setPriceView,
  priceView,
  setView,
  view,
}: FilterBarProps) => {
  return (
    <div className="sticky top-18 bg-gray-50 z-[40] my-1 w-full gap-2 py-1.5 flex items-center justify-between">
      <div className="flex flex-col items-left">
        <h1 className="text-sm flex flex-col font-bold">{location}</h1>
        <span className="font-medium text-sm">{totalProperties} hotel</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Urutkan Berdasarkan */}
        <div className="relative flex items-center gap-1">
          <label className="text-gray-600 w-full text-xs w-10">
            Urutkan berdasarkan:
          </label>
          <select
            className="bg-white border border-gray-100 text-sm rounded-full px-2 py-2 cursor-pointer focus:outline-none"
            value={sortBy}
            onChange={(e) => setSortBy && setSortBy(e.target.value)}
          >
            <option className="text-sm">Harga tertinggi</option>
            <option className="text-sm">Harga terendah</option>
            <option className="text-sm">Nilai ulasan</option>
            <option className="text-sm">Popularitas tertinggi</option>
          </select>
        </div>

        {/* Tampilan Harga */}
        <div className="relative flex items-center text-sm">
          <label className="text-gray-600 text-xs mr-2">Tampilan Harga:</label>
          <select
            className="bg-white border border-gray-100 rounded-full px-2 py-2 cursor-pointer focus:outline-none"
            value={priceView}
            onChange={(e) => setPriceView(e.target.value)}
          >
            <option>Per kamar per malam (termasuk pajak & biaya)</option>
            <option>Per kamar per malam (di luar pajak & biaya)</option>
            <option>Total harga (termasuk pajak & biaya)</option>
            <option>Total harga (di luar pajak & biaya)</option>
          </select>
        </div>

        {/* Toggle Tampilan */}
        <div className="flex items-center gap-2">
          <label className="text-gray-600 text-xs">Tampilan:</label>
          <div className="flex items-center gap-2 bg-white border border-gray-100 px-3 py-2 rounded-full">
            <button
              className="cursor-pointer"
              onClick={() => setView && setView("grid")}
            >
              <Grid
                className={`w-4 h-4`}
                color={`${view === "grid" ? "#0194f3" : "#bbb"}`}
              />
            </button>
            <div className="w-0.5 h-5 bg-gray-100"></div>
            <button
              className="cursor-pointer"
              onClick={() => setView && setView("list")}
            >
              <List
                className="w-4 h-4"
                color={`${view === "list" ? "#0194f3" : "#bbb"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
