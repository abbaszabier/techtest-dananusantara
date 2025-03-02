import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  History,
  MapPin,
  Calendar,
  Moon,
  User,
  Search,
  CircleDollarSign,
  LocateFixed,
  CircleAlert,
} from "lucide-react";
import { hotels } from "../data/hotels";
import { format, isSunday, isSameDay } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../utils/format";

const lowestPriceDates = [
  new Date(2025, 2, 2),
  new Date(2025, 2, 3),
  new Date(2025, 2, 6),
  new Date(2025, 2, 11),
  new Date(2025, 2, 13),
  new Date(2025, 2, 17),
  new Date(2025, 2, 20),
  new Date(2025, 2, 21),
  new Date(2025, 3, 14),
  new Date(2025, 3, 2),
  new Date(2025, 3, 16),
  new Date(2025, 3, 21),
  new Date(2025, 3, 22),
  new Date(2025, 3, 27),
];

const HotelSearch = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: "Bandung",
    checkIn: "Jum, 28 Feb 2025",
    duration: "1 malam",
    guests: "2 Dewasa, 0 Anak, 1 Kamar",
  });
  const [overlay, setOverlay] = useState(false);
  const [modalLocation, setModalLocation] = useState(false);
  const [modalSelectDate, setModalSelectDate] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [showLowestPrice, setShowLowestPrice] = useState(true);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(1);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  });
  const [modalSelectKamar, setModalSelectKamar] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleSelectDuration = (nights: number) => {
    setSelectedDuration(nights);
    if (selectedDate) {
      const newCheckoutDate = new Date(selectedDate);
      newCheckoutDate.setDate(newCheckoutDate.getDate() + nights);
      setCheckoutDate(newCheckoutDate);
    }
    setIsDropdownOpen(false);
  };

  const handleSearch = () => {
    console.log("Navigating to:", `/hotels?location=${searchParams.location}`);
    navigate(`/hotels?location=${searchParams.location}`);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  return (
    <>
      {overlay && (
        <div
          className="fixed inset-0 bg-[#232a31] z-[50] opacity-92"
          onClick={() => {
            setOverlay(false);
            setModalLocation(false);
            setModalSelectDate(false);
            setIsDropdownOpen(false);
            setModalSelectKamar(false);
          }}
        ></div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className={`absolute top-[270px] left-1/2 transform -translate-x-1/2 w-full max-w-[950px] bg-white rounded-md shadow-lg border border-gray-100 dark:border-gray-800 ${
          overlay ? "z-50" : "z-40"
        }`}
      >
        <div className="mb-4 h-12 px-4 rounded-t-md flex bg-gray-50 text-sm items-center text-blue-500 font-bold">
          <History className="mr-2" size={20} /> Hotel yang Terakhir Dilihat
        </div>

        <div className="space-y-4 px-4">
          <div className="text-left text-sm">
            <label className="block font-medium text-gray-500">
              Kota, tujuan, atau nama hotel
            </label>
            <div
              onClick={() => {
                setModalLocation(true);
                setOverlay(true);
              }}
              className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 hover:border-black/50"
            >
              <MapPin className="text-gray-400 mr-2" />
              <input
                type="text"
                className="bg-transparent outline-none w-full text-black"
                value={searchParams.location}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-left">
            <div className="flex col-span-2 gap-5 text-left text-sm">
              <div className="text-left text-sm w-full">
                <label className="block font-medium text-gray-500">
                  Check-in:
                </label>
                <div
                  onClick={() => {
                    setModalSelectDate(true);
                    setOverlay(true);
                  }}
                  className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 hover:border-black/50"
                >
                  <Calendar className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="bg-transparent outline-none w-full text-black"
                    value={
                      selectedDate
                        ? format(selectedDate, "E, dd MMM yyyy")
                        : formatDate(new Date().toISOString())
                    }
                    onChange={(e) =>
                      setSearchParams({
                        ...searchParams,
                        checkIn: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="text-left text-sm w-full">
                <label className="block font-medium text-gray-500">
                  Durasi
                </label>
                <div
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                    setOverlay(true);
                  }}
                  className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 hover:border-black/50"
                >
                  <Moon className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="bg-transparent outline-none w-full text-black"
                    value={selectedDuration ? `${selectedDuration} malam` : ""}
                    onChange={(e) =>
                      setSearchParams({
                        ...searchParams,
                        duration: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="text-left text-sm">
                <label className="block font-bold text-gray-900">
                  Check-out:
                </label>
                <div className="flex items-center py-2 my-1">
                  <p className="text-black text-base">
                    {" "}
                    {checkoutDate
                      ? format(checkoutDate, "E, dd MMM yyyy")
                      : "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 text-left">
            <div className="col-span-2 text-left text-sm">
              <label className="block font-medium text-gray-500">
                Tamu dan Kamar
              </label>
              <div
                onClick={() => {
                  setModalSelectKamar(true);
                  setOverlay(true);
                }}
                className="flex items-center border rounded-lg px-3 py-2 mt-1 border-gray-300 hover:border-black/50"
              >
                <User className="text-gray-400 mr-2" />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-black"
                  value={`${guests.adults} Dewasa, ${guests.children} Anak, ${guests.rooms} Kamar`}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, guests: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-span-1 w-full flex items-end">
              <button
                type="submit"
                className="bg-orange-500 w-full text-white px-6 rounded-lg flex h-10 items-center justify-center cursor-pointer"
              >
                <Search size={20} className="mr-2" /> Cari Hotel
              </button>
            </div>
          </div>
        </div>
        {modalLocation && (
          <div className="absolute left-0 top-30 mt-2.5 ml-4 w-full max-w-[916px] mx-auto bg-[rgb(250,252,255)] rounded-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] p-4 z-50 max-h-[485px] overflow-y-auto border border-gray-200">
            <div className="bg-white py-2 gap-2 px-4 rounded-lg w-full border border-gray-200 flex items-center">
              <LocateFixed size={20} color="#0071ce" />
              <h3 className="text-base text-[#0071ce] font-bold">Dekat Saya</h3>
            </div>
            <h3 className="text-[20px] font-bold mt-4">Destinasi Populer</h3>
            <div className="flex flex-col w-full justify-left items-center cursor-pointer py-2">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="w-full py-4 flex items-center justify-between border-b border-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchParams({
                      ...searchParams,
                      location: hotel.location,
                    });
                    setModalLocation(false);
                  }}
                >
                  <div className="flex flex-col">
                    <p className="text-[16px] font-bold">{hotel.location}</p>
                    <p className="text-[14px] text-gray-600">
                      {hotel.province}, {hotel.country}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <p className="text-[12px] font-medium rounded-xl py-1 px-2 bg-[#ecf8ff] text-[#0264c8] w-fit text-center">
                      Kota
                    </p>
                    <p className="text-[12px] text-gray-600">324 hotel</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {modalSelectDate && (
          <div className="absolute left-0 top-50 mt-3 ml-4 w-fit max-w-[916px] mx-auto bg-gray-50 rounded-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] z-50 max-h-[485px] overflow-y-auto border border-gray-200">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setModalSelectDate(false);
              }}
              inline
              monthsShown={2}
              minDate={new Date()}
              dayClassName={(date) => {
                if (isSunday(date)) return "text-red-500";
                if (
                  showLowestPrice &&
                  lowestPriceDates.some((d) => isSameDay(d, date))
                )
                  return "border-2 border-green-500 rounded-full";
                return "w-64";
              }}
            />

            <div className="flex flex-col items-left my-2 px-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={showLowestPrice}
                  onChange={() => setShowLowestPrice(!showLowestPrice)}
                  className="mr-1 w-6"
                />
                <span className="text-gray-600 text-sm flex items-center gap-2">
                  Tunjukkan estimasi tarif terendah{" "}
                  <CircleAlert size={14} color="#000" />
                </span>
              </div>
              <div className="flex items-center">
                <span className="border-2 border-green-500 rounded-full mr-1 h-4 w-6"></span>
                <span className="text-gray-600 text-sm">
                  Tanggal dengan estimasi harga terendah
                </span>
              </div>
            </div>
          </div>
        )}
        {isDropdownOpen && (
          <ul className="absolute w-[296px] h-[600px] right-0 top-50 mt-3 mr-81 bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-auto z-10">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((night) => (
              <div
                key={night}
                className={`px-4 flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer ${
                  selectedDuration === night ? "bg-gray-100 text-blue-500" : ""
                }`}
              >
                <div
                  className={`flex items-center h-2 w-2 rounded-full bg-blue-500 ${
                    selectedDuration === night
                      ? "bg-blue-500 "
                      : "bg-transparent"
                  }`}
                ></div>
                <li
                  className={`flex flex-col`}
                  onClick={() => handleSelectDuration(night)}
                >
                  {night} malam
                  <span className="text-xs">senin, 4 mar 2020</span>
                </li>
              </div>
            ))}
          </ul>
        )}
        {modalSelectKamar && (
          <div className="absolute left-0 top-70 mt-4 ml-4 w-fit w-[400] mx-auto bg-gray-50 rounded-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] z-50 overflow-y-auto border border-gray-200">
            <div className="bg-white w-[600px] rounded-lg p-4 shadow-lg w-80">
              {/* Dewasa */}
              <div className="flex justify-between items-center pb-3">
                <div className="flex items-center">
                  <User className="text-gray-500 mr-2" />
                  <span>Dewasa</span>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="px-3 py-1 text-blue-500 bg-gray-50 rounded-md disabled:opacity-50"
                    onClick={() =>
                      setGuests({ ...guests, adults: guests.adults - 1 })
                    }
                    disabled={guests.adults <= 1}
                  >
                    -
                  </button>
                  <span className="text-sm flex items-center w-8 h-8 mx-2 rounded-md border-gray-300 border text-center px-4 justify-center">
                    {guests.adults}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1 text-blue-500 bg-gray-50 rounded-md"
                    onClick={() =>
                      setGuests({ ...guests, adults: guests.adults + 1 })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Anak */}
              <div className="flex justify-between items-center pb-3">
                <div className="flex items-center">
                  <User className="text-gray-500 mr-2" />
                  <span>Anak</span>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="px-3 py-1 text-blue-500 bg-gray-50 rounded-md disabled:opacity-50"
                    onClick={() =>
                      setGuests({ ...guests, children: guests.children - 1 })
                    }
                    disabled={guests.children <= 1}
                  >
                    -
                  </button>
                  <span className="text-sm flex items-center w-8 h-8 mx-2 rounded-md border-gray-300 border text-center px-4 justify-center">
                    {guests.children}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1 text-blue-500 bg-gray-50 rounded-md"
                    onClick={() =>
                      setGuests({ ...guests, children: guests.children + 1 })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Kamar */}
              <div className="flex justify-between items-center pb-3">
                <div className="flex items-center">
                  <User className="text-gray-500 mr-2" />
                  <span>Kamar</span>
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="px-3 py-1 text-blue-500 bg-gray-50 rounded-md disabled:opacity-50"
                    onClick={() =>
                      setGuests({ ...guests, rooms: guests.rooms - 1 })
                    }
                    disabled={guests.rooms <= 1}
                  >
                    -
                  </button>
                  <span className="flex items-center w-8 h-8 mx-2 rounded-md border-gray-300 border text-center px-4 justify-center">
                    {guests.rooms}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1 text-blue-500 bg-gray-50 rounded-md"
                    onClick={() =>
                      setGuests({ ...guests, rooms: guests.rooms + 1 })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="text-blue-600 font-semibold mt-4"
                  onClick={() => {
                    setModalSelectKamar(false);
                  }}
                >
                  Selesai
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex p-4 justify-left items-center cursor-pointer">
          <CircleDollarSign className="text-blue-500 mr-1" />
          <button className="text-blue-500 text-[14px] font-bold cursor-pointer">
            Bayar di Hotel
          </button>
        </div>
      </form>
    </>
  );
};

export default HotelSearch;
