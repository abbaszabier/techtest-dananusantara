import { Outlet } from "react-router-dom";
import Logo from "../assets/logo2.svg";

export default function PaymentLayout() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-wrap justify-between items-center gap-12 mx-auto max-w-screen-xl h-[58px] px-24">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} alt="Flowbite Logo" className="h-10" />
        </a>
      </div>
      <Outlet />
    </div>
  );
}
