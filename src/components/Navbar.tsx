import { ChevronDown, UserRound } from "lucide-react";
import Logo from "../assets/logo2.svg";
import Icon from "../assets/icon.webp";
import FlagIcon from "../assets/flag-icon.svg";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50">
      {/* Nav 1 */}
      <nav className="bg-white dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center gap-12 mx-auto max-w-screen-xl px-10 p-1">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} alt="Flowbite Logo" />
          </a>
          <nav className="flex items-center space-x-5 rtl:space-x-reverse">
            <div className="flex text-black font-medium items-center gap-1 text-sm dark:text-white text-black">
              <img src={FlagIcon} className="h-5 w-5 me-1" /> ID | IDR{" "}
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 text-sm text-black font-medium dark:text-white">
              <img src={Icon} className="h-6 w-6" /> Birthday Sale
            </div>
            <div className="flex items-center gap-1 text-sm text-black font-medium dark:text-white">
              Bantuan <ChevronDown size={14} />
            </div>
            <div className="text-sm text-black font-medium dark:text-white hover:underline">
              Jadi Mitra
            </div>
            <div className="text-sm text-black font-medium dark:text-white hover:underline">
              For Corporates
            </div>
            <div className="text-sm text-black font-medium dark:text-white hover:underline">
              Pesanan
            </div>
            <div className="flex items-center space-x-1">
              <button
                type="button"
                className="flex gap-1 items-center text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-sm px-2 py-2 text-centerdark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                <UserRound size={14} />
                Log In
              </button>

              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-md font-bold text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Daftar
              </button>
            </div>
          </nav>
        </div>
      </nav>
      {/* Nav 2 */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-screen-xl px-7 py-4 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-2 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  dark:hover:text-white px-3 py-2 rounded-md"
                  aria-current="page"
                >
                  Hotel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  dark:hover:text-white px-3 py-2 rounded-md"
                >
                  Tiket Pesawat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  dark:hover:text-white px-3 py-2 rounded-md"
                >
                  Tiket Kereta Api
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  dark:hover:text-white px-3 py-2 rounded-md"
                >
                  Tiket Bus & Travel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  dark:hover:text-white px-3 py-2 rounded-md"
                >
                  Antar Jemput Bandara
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  dark:hover:text-white px-3 py-2 rounded-md"
                >
                  Rental Mobil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800  dark:hover:text-white px-3 py-2 rounded-md"
                >
                  Atraksi dan Aktivitas
                </a>
              </li>
              <li>
                <div className="flex items-center gap-1 px-3 text-sm text-gray-600 font-bold dark:text-white  dark:hover:text-white">
                  Produk Lainnya <ChevronDown size={14} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
}
