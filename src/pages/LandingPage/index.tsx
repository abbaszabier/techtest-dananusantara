import HotelSearchSection from "../../components/Hero";
import Banner from "../../assets/banner.webp";
import KuponPengguna from "./components/KuponPengguna";

export default function LandingPage() {
  return (
    <>
      <HotelSearchSection />
      <div className="max-w-screen-lg mx-auto mt-[360px] py-4">
        <img
          src={Banner}
          alt="banner"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="max-w-screen-lg mx-auto py-4">
        <h2 className="text-2xl font-semibold">Hotel Populer</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-100 rounded-lg p-4">
            <img
              src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
              alt="hotel"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Hotel Santika</h3>
            <p className="text-gray-500 mt-2">Jl. Jendral Sudirman No. 49</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1587613861917-1e1b0f5e0e7e"
              alt="hotel"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Hotel Santika</h3>
            <p className="text-gray-500 mt-2">Jl. Jendral Sudirman No. 49</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <img
              src="https://images.unsplash.com/photo-1587613861917-1e1b0f5e0e7e"
              alt="hotel"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Hotel Santika</h3>
            <p className="text-gray-500 mt-2">Jl. Jendral Sudirman No. 49</p>
          </div>
        </div>
      </div>
      <KuponPengguna />
    </>
  );
}
