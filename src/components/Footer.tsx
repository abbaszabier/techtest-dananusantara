import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 w-full">
      <div className=" flex justify-between px-10 w-full">
        <div className="flex flex-col">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} alt="Flowbite Logo" />
          </a>
          <h3 className="font-bold mb-4 pt-8">Partner Pembayaran</h3>
          <div className="flex space-x-4">
            <img
              src="https://via.placeholder.com/50x30"
              alt="VISA"
              className="w-12"
            />
            <img
              src="https://via.placeholder.com/50x30"
              alt="Mastercard"
              className="w-12"
            />
            <img
              src="https://via.placeholder.com/50x30"
              alt="Traveloka"
              className="w-12"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Tentang Traveloka */}
          <div>
            <h3 className="font-bold mb-4">Tentang Traveloka</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Cara Pesan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Cileilan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Rilisan Fitur Terbaru
                </a>
              </li>
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h3 className="font-bold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Hotel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Tiket Pesawat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Tiket Kereta Api
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Tiket Bus & Travel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Antar Jemput Bandara
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Rental Mobil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  JR Pass
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Xperience
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Cruises
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Villa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Apartemen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Asuransi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Internet Luar Negeri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  PayLater
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Gift Voucher
                </a>
              </li>
            </ul>
          </div>

          {/* Lainnya */}
          <div>
            <h3 className="font-bold mb-4">Lainnya</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Traveloka for Corporates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Traveloka Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blog Traveloka
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Daftarkan Akomodasi Anda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Daftarkan Bisnis Aktivitas Anda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Traveloka Press Room
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Traveloka Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Vulnerability Disclosure Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  APAC Travel Insights
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
