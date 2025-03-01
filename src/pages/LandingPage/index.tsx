import HotelSearchSection from "../../components/Hero";
import Banner from "../../assets/banner.webp";
import KuponPengguna from "./components/KuponPengguna";
import Akomodasi from "./components/Akomodasi";

export default function LandingPage() {
  return (
    <>
      <HotelSearchSection />
      <div className="max-w-[950px] mx-auto mt-[380px] py-4">
        <img
          src={Banner}
          alt="banner"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <KuponPengguna />
      <Akomodasi />
    </>
  );
}
