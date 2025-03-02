import { ChevronDown, Menu, UserRound, X } from "lucide-react";
import Logo from "../assets/logo2.svg";
import Icon from "../assets/icon.webp";
import FlagIcon from "../assets/flag-icon.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginModal from "./ModalLogin";

const menuItems = [
  { label: "Hotel", href: "/" },
  { label: "Tiket Pesawat", href: "#" },
  { label: "Tiket Kereta Api", href: "#" },
  { label: "Tiket Bus & Travel", href: "#" },
  { label: "Antar Jemput Bandara", href: "#" },
  { label: "Rental Mobil", href: "#" },
  { label: "Atraksi dan Aktivitas", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav
      className={`bg-white dark:bg-gray-900 ${
        location.pathname === "/hotels" ? "" : "sticky"
      } top-0 z-50`}
    >
      {/* Nav 1 */}
      <div className="flex flex-wrap justify-between items-center gap-12 mx-auto max-w-screen-xl px-10 p-1">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} alt="Flowbite Logo" />
        </a>
        <button
          className="lg:hidden text-gray-700 dark:text-white cursor-pointer focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden lg:flex items-center gap-2 rtl:space-x-reverse">
          <nav className="hidden lg:flex items-center rtl:space-x-reverse">
            <div className="flex text-black font-medium items-center gap-1 text-sm dark:text-white text-black px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              <img src={FlagIcon} className="h-5 w-5 me-1" /> ID | IDR{" "}
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 text-sm text-black font-medium dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              <img src={Icon} className="h-6 w-6" /> Birthday Sale
            </div>
            <div className="flex items-center gap-1 text-sm text-black font-medium dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              Bantuan <ChevronDown size={14} />
            </div>
            <div className="text-sm text-black font-medium dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              Jadi Mitra
            </div>
            <div className="text-sm text-black font-medium dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              For Corporates
            </div>
            <div className="text-sm text-black font-medium dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              Pesanan
            </div>
          </nav>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="flex gap-1 items-center text-blue-500 border border-blue-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-sm px-2.5 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 cursor-pointer"
            >
              <UserRound size={14} />
              Log In
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="text-white bg-[#0194f3] focus:ring-4 focus:ring-blue-300 rounded-md font-bold text-sm px-4 py-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer
              dark:bg-[#0194f3] dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-[#0183f6]
              "
            >
              Daftar
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-300 dark:border-gray-800">
            <div className="flex flex-col p-4 space-y-3">
              <div className="flex items-center gap-1 text-sm font-medium dark:text-white text-black">
                <img src={FlagIcon} className="h-5 w-5 me-1" alt="Flag" />
                ID | IDR <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium dark:text-white">
                <img src={Icon} className="h-6 w-6" alt="Sale" />
                Birthday Sale
              </div>
              {menuItems.map(({ label }) => (
                <div
                  key={label}
                  className="text-sm font-medium dark:text-white px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                >
                  {label}
                </div>
              ))}
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex gap-1 items-center text-blue-500 border border-blue-500 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-blue-500 dark:hover:text-white"
                >
                  <UserRound size={14} />
                  Log In
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Nav 2 */}
      <nav className="shadow-sm border-b border-gray-300 dark:border-gray-800">
        <div className="max-w-screen-xl px-7 lg:py-1.5 mx-auto">
          <ul className="hidden lg:flex flex-row items-center font-medium space-x-2 rtl:space-x-reverse text-sm">
            {menuItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-gray-500 text-sm font-bold dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white leading-none"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <div className="flex items-center rounded-md hover:bg-gray-100 gap-1 px-3 py-2 text-sm text-gray-500 font-bold dark:text-white dark:hover:text-white cursor-pointer">
                Produk Lainnya <ChevronDown size={14} />
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
