import { Hotel, User } from "lucide-react";
import Swal from "sweetalert2";
import { SetStateAction, useState } from "react";
import { hotels } from "../../data/hotels";
import { useParams, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("creditCard");

  const hotel = hotels.find((hotel) => hotel.slug === slug);

  const handleMethodChange = (method: SetStateAction<string>) => {
    setSelectedMethod(method);
  };

  const handlePayment = () => {
    window.scrollTo(0, 0);
    navigate("/");
    Swal.fire({
      title: "Pembayaran Berhasil",
      text: "Terima kasih telah melakukan pembayaran",
      icon: "success",
    });
  };

  return (
    <div className="min-h-screen flex flex-col px-44 gap-6 bg-gray-50 py-10">
      <div className="flex gap-6">
        <div className="flex flex-col w-2/3">
          <div className="bg-[#0071ce] flex items-center gap-2 text-white rounded-t-xl py-5 px-8 border-b border-gray-100 shadow-sm">
            Tenang, harganya tidak akan berubah. Yuk selesaikan pembayaran dalam
            10 menit
          </div>
          <div className="bg-white p-6 rounded-b-xl h-fit shadow-sm">
            <h2 className="text-xl font-bold">Mau bayar pakai metode apa?</h2>

            {/* Cicilan Kartu Kredit */}
            <div className="mt-4 border-b border-gray-100 p-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={selectedMethod === "creditCard"}
                  onChange={() => handleMethodChange("creditCard")}
                />
                <span className="font-semibold">Cicilan Kartu Kredit</span>
              </label>
              {selectedMethod === "creditCard" && (
                <div className="mt-4 space-y-3">
                  <input
                    type="text"
                    placeholder="Nomor Kartu Kredit"
                    className="border border-gray-300 p-2 w-full rounded-md"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border border-gray-300 p-2 w-1/2 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="CVV/CVN"
                      className="border border-gray-300 p-2 w-1/2 rounded-md"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Nama di Kartu"
                    className="border border-gray-300 p-2 w-full rounded-md"
                  />
                </div>
              )}
            </div>

            {/* Virtual Account */}
            <div className="mt-4 border-b border-gray-100 p-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="virtualAccount"
                  checked={selectedMethod === "virtualAccount"}
                  onChange={() => handleMethodChange("virtualAccount")}
                />
                <span className="font-semibold">Virtual Account</span>
              </label>
              {selectedMethod === "virtualAccount" && (
                <div className="mt-4 space-y-3">
                  {["BCA", "Mandiri", "BNI", "BRI"].map((bank) => (
                    <label
                      key={bank}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="radio" name="vaBank" />
                      <span>{bank}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Transfer Bank */}
            <div className="mt-4 border-b border-gray-100 p-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankTransfer"
                  checked={selectedMethod === "bankTransfer"}
                  onChange={() => handleMethodChange("bankTransfer")}
                />
                <span className="font-semibold">Transfer Bank</span>
              </label>
              {selectedMethod === "bankTransfer" && (
                <div className="mt-4 space-y-3">
                  {["BCA", "Mandiri", "BNI", "BRI"].map((bank) => (
                    <label
                      key={bank}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="radio" name="transferBank" />
                      <span>{bank}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Minimarket */}
            <div className="mt-4 border-b border-gray-100 p-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="minimarket"
                  checked={selectedMethod === "minimarket"}
                  onChange={() => handleMethodChange("minimarket")}
                />
                <span className="font-semibold">Minimarket</span>
              </label>
              {selectedMethod === "minimarket" && (
                <div className="mt-4 space-y-3">
                  {["Alfamart", "Indomaret", "Lawson"].map((minimarket) => (
                    <label
                      key={minimarket}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="radio" name="minimarketOption" />
                      <span>{minimarket}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white mt-6 rounded-xl h-fit shadow-sm">
            <div className="px-4 mt-4 flex justify-between text-lg font-bold text-gray-800">
              <span>Harga Total</span>
              <span className="text-orange-500">{hotel?.price}</span>
            </div>

            <div className="px-4 mt-4 flex items-center justify-center text-blue-600 text-sm">
              <span className="mr-2">⏳</span>
              <span>Kamu tidak perlu bayar apa pun sekarang!</span>
            </div>

            <div className="px-4 flex items-center justify-center text-sm">
              <button
                onClick={() => handlePayment()}
                className="mt-4 w-full cursor-pointer bg-orange-500 text-white py-2 rounded-md text-lg font-bold hover:bg-orange-600"
              >
                Bayar dengan{" "}
                {selectedMethod === "creditCard"
                  ? "Kartu Kredit"
                  : selectedMethod}
              </button>
            </div>

            <p className="p-4 text-xs text-gray-500 text-center">
              Dengan lanjut ke pembayaran, kamu telah menyetujui menyetujui
              <span className="text-blue-600 cursor-pointer">
                Syarat dan Ketentuan
              </span>
              ,
              <span className="text-blue-600 cursor-pointer">
                Kebijakan Privasi
              </span>
              , dan
              <span className="text-blue-600 cursor-pointer">
                Prosedur Refund Akomodasi
              </span>
              dari Traveloka.
            </p>
            <div className="bg-[#d1f0ff] rounded-b-xl p-4 flex items-center justify-start text-[#0071ce] text-sm font-semibold">
              <span>🏆 Dapatkan 10.205 Poin</span>
              <div className="w-[1px] h-3 bg-gray-300 mx-2" />
              <span>⭐ Raih 326.559 Priority XP</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-1/3">
          <div className="sticky top-6 bg-white rounded-xl h-fit shadow-sm">
            <div className="flex items-center py-2 px-4 gap-2 rounded-t-xl h-fit bg-gradient-to-r from-[#0071ce] to-blue-400 text-white">
              <Hotel size={24} className="text-white" />
              <div className="flex flex-col">
                <p className="text-lg font-bold">Rincian Hotel</p>
                <p className="text-sm text-white">No. Pesanan 83982397</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-md font-bold">{hotel?.name}</h2>
              </div>
              <div className="flex items-center mt-4 gap-4">
                <div className="w-fit h-fit p-2 flex flex-col justify-center items-center border border-gray-300 rounded-xl">
                  <p className="text-gray-400 text-xs flex items-center justify-center h-full">
                    Check-In
                  </p>
                  <p className="text-gray-700 text-xs font-bold flex items-center justify-center h-full">
                    Sen, 3 Mar 2025
                  </p>
                  <p className="text-gray-500 text-xs font-medium flex items-center justify-center h-full">
                    Dari 14:00
                  </p>
                </div>
                <div className="flex w-fit flex-col justify-center items-center gap-1">
                  <p className="text-sm font-medium">1 Malam</p>
                  <div className="w-full h-[1px] bg-gray-300" />
                </div>
                <div className="w-fit h-fit p-2 flex flex-col justify-center items-center border border-gray-300 rounded-xl">
                  <p className="text-gray-400 text-xs flex items-center justify-center h-full">
                    Check-Out
                  </p>
                  <p className="text-gray-700 text-xs font-bold flex items-center justify-center h-full">
                    Sen, 4 Mar 2025
                  </p>
                  <p className="text-gray-500 text-xs font-medium flex items-center justify-center h-full">
                    Sebelum 14:00
                  </p>
                </div>
              </div>

              <p className="my-3 text-md font-bold">(1x) Deluxe Pool View</p>
              <div className="flex space-y-2 flex-col items-left justify-between">
                <p className="text-sm text-[#707577] font-semibold">1 Tamu</p>
                <p className="text-sm text-[#707577] font-semibold">
                  1 City Oasis King
                </p>
                <p className="text-sm text-[#707577] font-semibold">
                  Termasuk sarapan untuk 1 orang
                </p>
              </div>
              <div className="w-full h-[1px] bg-gray-200 my-3" />
              <p className="text-md font-bold mb-1">Data Pemesan</p>
              <div className="flex items-center gap-2">
                <User size={20} />
                <div className="flex flex-col items-start">
                  <p className="text-sm font-medium">Abbas Zabier Mohammad</p>
                  <p className="text-xs text-gray-500">088372894782</p>
                  <p className="text-xs text-gray-500">abbas@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
