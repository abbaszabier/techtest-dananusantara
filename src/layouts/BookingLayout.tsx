import { Outlet } from "react-router-dom";
import Logo from "../assets/logo2.svg";

export default function BookingAndPaymentLayout() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-wrap justify-between items-center gap-12 mx-auto max-w-screen-xl h-[58px] px-5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} alt="Flowbite Logo" className="h-8" />
        </a>
        <div className="flex items-center gap-2 rtl:space-x-reverse">
          <nav className="flex items-center rtl:space-x-reverse">
            <div className="flex gap-2 items-center text-sm text-gray-600 font-medium dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-blue-500 text-white text-xs">
                1
              </div>
              Pesan
            </div>
            <div className="text-sm text-black font-medium dark:text-white px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              <div className="w-4 h-0.5 bg-gray-400"></div>
            </div>
            <div className="flex gap-2 items-center text-sm text-gray-600 font-medium dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-gray-500 text-white text-xs">
                2
              </div>
              Bayar
            </div>
            <div className="text-sm text-black font-medium dark:text-white px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              <div className="w-4 h-0.5 bg-gray-400"></div>
            </div>
            <div className="flex gap-2 items-center text-sm text-gray-600 font-medium dark:text-white px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer">
              <div className="flex items-center justify-center h-4 w-4 rounded-full bg-gray-500 text-white text-xs">
                3
              </div>
              Voucher Terkirim
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
