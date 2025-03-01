export default function Akomodasi() {
  const accommodations = [
    {
      id: 1,
      image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
      location: "Kelapa Gading",
      name: "HARRIS Hotel",
      rating: 8.7,
      reviews: 12536,
      price: "Rp 564.857",
      stars: 3,
    },
    {
      id: 2,
      image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
      location: "Sudirman",
      name: "Hotel Santika",
      rating: 8.7,
      reviews: 12536,
      price: "Rp 564.857",
      stars: 3,
    },
    {
      id: 3,
      image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
      location: "Menteng",
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

  return (
    <div className="max-w-[950px] mx-auto py-6">
      <h2 className="text-3xl text-black font-bold">
        Akomodasi yang Paling Dicari
      </h2>
      <p className="text-gray-500 mt-2">
        Wujudkan liburan impian dengan menginap di sini
      </p>

      <div className="flex space-x-3 mt-4">
        {["Jakarta", "Bandung", "Semarang", "Yogyakarta", "Surabaya"].map(
          (city) => (
            <button
              key={city}
              className={`px-4 py-2 rounded-full font-medium ${
                city === "Jakarta"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {city}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {accommodations.map((hotel) => (
          <div
            key={hotel.id}
            className="relative bg-white rounded-lg overflow-hidden"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-56 object-cover"
            />
            <span className="absolute top-6 left-0 bg-green-600 text-white px-2 py-1 text-sm">
              {hotel.location}
            </span>
            <div className="p-4 ">
              <h3 className="text-lg text-black font-semibold">{hotel.name}</h3>
              <div className="flex items-center space-x-1 text-yellow-500 mt-1">
                {Array.from({ length: hotel.stars }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-blue-600 font-medium mt-1">
                {hotel.rating}/10 ({hotel.reviews})
              </p>
              <p className="text-green-600 font-semibold mt-1">{hotel.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
