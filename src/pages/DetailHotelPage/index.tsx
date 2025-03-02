import { BookmarkPlus } from "lucide-react";
import { useState } from "react";
import BreadCrumps from "../../components/BreadCrumps";
import { useParams } from "react-router-dom";
import { hotels } from "../../data/hotels";
import { FaStar, FaUser } from "react-icons/fa";
import ReviewCard from "./components/ReviewCard";
import LocationCard from "./components/LocationCard";
import FacilityCard from "./components/FacilityCard";
import { useNavigate } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Deluxe Pool View",
    description: "Suite Pemandangan Samudra",
    breakfast: "Termasuk sarapan untuk 1 orang",
    bed: "1 bed",
    refundPolicy: "Tidak bisa refund",
    originalPrice: "Rp 6.434.539",
    discountedPrice: "Rp 4.825.905",
    points: "18.097 Poin",
    remaining: "Sisa 1 kamar!",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: 2,
    name: "Deluxe Pool View",
    description: "Suite dengan pemandangan kolam",
    breakfast: "Termasuk sarapan untuk 2 orang",
    bed: "1 bed king size",
    refundPolicy: "Bisa refund",
    originalPrice: "Rp 5.234.539",
    discountedPrice: "Rp 3.925.905",
    points: "15.087 Poin",
    remaining: "Sisa 2 kamar!",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

const tabs = [
  { id: "info-umum", label: "Info Umum" },
  { id: "kamar", label: "Kamar" },
  { id: "lokasi", label: "Lokasi" },
  { id: "fasilitas", label: "Fasilitas" },
  { id: "kebijakan", label: "Kebijakan" },
  { id: "review", label: "Review" },
];

const images = [
  "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
];

export default function DetailHotel() {
  const [activeTab, setActiveTab] = useState("info-umum");
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const hotel = hotels.find((hotel) => hotel.slug === slug);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-white shadow-md sticky top-18 z-50 flex justify-between items-center mx-auto px-28 gap-4">
        <div className="flex items-center gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer px-4 py-3 text-sm font-bold text-gray-500  ${
                activeTab === tab.id ? "border-b-4 border-blue-500" : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className="flex text-sm font-bold items-center gap-1.5 justify-center cursor-pointer text-[#0194f3]">
          Simpan Akomodasi <BookmarkPlus size={22} />
        </div>
      </div>
      <div className="container mx-auto">
        {hotel && <BreadCrumps hotel={hotel} />}
        <section className="pb-2 border-b border-gray-300">
          <div className="grid grid-cols-5 gap-2 mx-10">
            <div className="col-span-3 md:col-span-2 row-span-2">
              <img
                src={images[0]}
                alt="Hotel"
                className="w-full h-[332px] object-cover rounded-tl-xl"
              />
            </div>

            {images.slice(1, 7).map((src, index) => (
              <div key={index} className="col-span-1">
                <img
                  src={src}
                  alt={`Hotel ${index + 2}`}
                  className={`w-full h-[162px] gap-2 object-cover ${
                    index === 2 ? "rounded-tr-xl" : ""
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 border border-gray-100 rounded-2xl mx-6 bg-white p-4 rounded-b-lg shadow-md">
            {/* Info Umum */}
            <div id="info-umum" className="flex flex-col">
              <h1 className="text-2xl font-bold">{hotel?.name}</h1>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[#0264c8] font-semibold text-xs px-2 py-1 bg-[#ecf8ff] rounded-full">
                  Hotel
                </span>
                <div className="flex justify-between items-center w-full">
                  <span className="text-blue-500 flex items-center font-semibold text-sm">
                    <FaStar className="text-yellow-500 text-md" />
                    <FaStar className="text-yellow-500 text-md" />
                    <FaStar className="text-yellow-500 text-md" />
                    <FaStar className="text-yellow-500 text-md" />
                  </span>
                  <div className="text-blue-500 flex gap-2 font-semibold text-sm">
                    <div className="flex flex-col items-end ">
                      <span className="text-gray-500 font-semibold text-xs">
                        Harga/kamar/malam mulai dari
                      </span>
                      <span className="text-orange-500 text-xl">
                        {hotel?.price}
                      </span>
                    </div>
                    <button
                      onClick={() => handleTabClick("kamar")}
                      className="bg-orange-500 text-white px-3 py-2 text-base rounded-md font-semibold cursor-pointer"
                    >
                      Pilih Kamar
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <ReviewCard />
                <LocationCard />
                <FacilityCard />
              </div>
              <div className="w-full p-4 border border-gray-200 rounded-xl mt-8">
                note : akomodasi ini sebelumnya bernama Anantara Uluwatu Bali
                Resort Anantara Bali Uluwatu Resort berada di Pecatu.
                Resepsionis siap 24 jam untuk melayani proses check-in,
                check-out dan kebutuhan Anda yang lain. Jangan ragu untuk
                menghubungi resepsionis, kami siap melayani Anda. WiFi tersedia
                di seluruh area publik properti untuk membantu Anda tetap
                terhubung dengan keluarga dan teman.
              </div>
            </div>

            {/* Kamar */}
            <div id="kamar" className="flex flex-col">
              <h1 className="text-2xl font-bold mb-4 mt-8">
                Tipe Kamar yang Tersedia di {hotel?.name}
              </h1>
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-6 flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-full md:w-1/4">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="object-cover w-full h-40 md:h-full"
                    />
                  </div>

                  <div className="w-full md:w-3/4 p-4 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {room.name}
                      </h2>
                      <p className="text-sm text-gray-600 mt-2">
                        {room.description}
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-700">
                          {room.breakfast}
                        </p>
                        <p className="text-sm text-gray-700">{room.bed}</p>
                        <p className="text-sm text-red-600 font-medium">
                          {room.refundPolicy}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <FaUser className="text-gray-500" />
                        <span className="text-sm text-gray-700">1 Tamu</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-2 md:mb-0">
                        <p className="text-sm text-gray-400 line-through">
                          {room.originalPrice}
                        </p>
                        <p className="text-xl font-bold text-red-600">
                          {room.discountedPrice}
                        </p>
                        <p className="text-sm text-yellow-500 mt-1">
                          Dapatkan {room.points} poin
                        </p>
                      </div>
                      <div className="text-right">
                        <button
                          onClick={() => {
                            navigate(`/hotels/${hotel?.slug}/booking`);
                            window.scrollTo(0, 0);
                          }}
                          className="bg-blue-500 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                          Pilih
                        </button>
                        <p className="text-xs text-red-600 font-bold mt-1">
                          {room.remaining} kamar tersisa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
