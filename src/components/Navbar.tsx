import { ChevronDown, Menu, UserRound, X } from "lucide-react";
import Logo from "../assets/logo2.svg";
import Icon from "../assets/icon.webp";
import FlagIcon from "../assets/flag-icon.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginModal from "./ModalLogin";
import { useSettingStore } from "../store";
import Swal from "sweetalert2";

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
  const { email, name, setEmail, setName } = useSettingStore();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      icon: "success",
      title: "Logout Berhasil",
      text: "Terima kasih telah menggunakan Traveloka!",
    });
    setEmail("");
    setName("");
    setIsModalOpen(false);
  };

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
            {!email ? (
              <div className="flex gap-2">
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
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsOpenModal(!isOpenModal)}
                  className="text-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  {name} | 0 Poin
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isOpenModal && (
                  <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <div
                          onClick={() => handleLogout()}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Keluar
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
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
                {!email ? (
                  <div className="flex gap-2">
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
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setIsOpenModal(!isOpenModal)}
                      className="text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                      type="button"
                    >
                      {name}
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {isOpenModal && (
                      <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <div
                              onClick={() => handleLogout()}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Keluar
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
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
