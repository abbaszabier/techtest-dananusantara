import {
  Calendar,
  CircleAlert,
  LocateFixed,
  MapPin,
  Search,
  User,
} from "lucide-react";
import { hotels } from "../data/hotels";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { format, isSunday, isSameDay } from "date-fns";
import { useSearchParams, useNavigate } from "react-router-dom";

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

export default function FilterListHotel() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const location = params.get("location");
  const [searchParams, setSearchParams] = useState({
    location: location || "",
    checkIn: format(new Date(), "dd MMM yyyy"),
    duration: "1 malam",
    guests: "2 Dewasa, 0 Anak, 1 Kamar",
  });
  const [modalLocation, setModalLocation] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [modalSelectDate, setModalSelectDate] = useState(false);
  const [showLowestPrice, setShowLowestPrice] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [modalSelectKamar, setModalSelectKamar] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleSearch = () => {
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
            setModalSelectKamar(false);
          }}
        ></div>
      )}
      <div className="w-full z-50 flex items-center justify-between mx-auto h-[72px] bg-white shadow-md sticky top-0 px-28">
        <div
          onClick={() => {
            setModalLocation(true);
            setOverlay(true);
          }}
          className="flex items-center border border-gray-300 rounded-l-lg px-3 py-3 hover:border-black/50 w-full"
        >
          <MapPin className="text-gray-400 mr-2" color="#0194f3" />
          <input
            type="text"
            className="bg-transparent outline-none w-full text-black"
            placeholder="Cari lokasi"
            value={searchParams.location}
          />
        </div>

        <div className="flex items-center border-y hover:border border-gray-300 px-3 py-3 hover:border-black/50 w-full">
          <Calendar className="text-gray-400 mr-2" color="#0194f3" />
          <input
            type="text"
            className="bg-transparent outline-none w-full text-black"
            placeholder="Pilih tanggal"
            value={searchParams.checkIn}
            onClick={() => {
              setModalSelectDate(true);
              setOverlay(true);
            }}
          />
        </div>

        <div className="flex items-center border border-gray-300 px-3 py-3 hover:border-black/50 w-full">
          <User className="text-gray-400 mr-2" color="#0194f3" />
          <input
            type="text"
            onClick={() => {
              setModalSelectKamar(true);
              setOverlay(true);
            }}
            value={searchParams.guests}
            className="bg-transparent outline-none w-full text-black"
            placeholder="Tamu & Kamar"
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-[#0194f3] text-white gap-2 px-3 rounded-r-lg flex text-base h-12.5 items-center justify-center cursor-pointer w-1/3"
        >
          <Search size={18} className="" /> Cari Hotel
        </button>

        {modalLocation && (
          <div className="absolute left-0 top-16 mt-2.5 ml-4 w-full max-w-[916px] mx-auto bg-[rgb(250,252,255)] rounded-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] p-4 z-50 max-h-[485px] overflow-y-auto border border-gray-200">
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
          <div className="absolute left-115 top-16 mt-3 ml-4 w-fit max-w-[916px] mx-auto bg-gray-50 rounded-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] z-50 max-h-[485px] overflow-y-auto border border-gray-200">
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
        {modalSelectKamar && (
          <div className="absolute left-200 top-15 mt-4 ml-4 w-fit w-[400] mx-auto bg-gray-50 rounded-md drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] z-50 overflow-y-auto border border-gray-200">
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
      </div>
    </>
  );
}
