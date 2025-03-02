import { HandMetal } from "lucide-react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaRegIdCard, FaStar, FaWallet } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import logos from "../../assets/logos.svg";
import logopayment from "../../assets/traveloka.webp";
import { useNavigate, useParams } from "react-router-dom";
import { formSchema } from "../BookingPage/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { hotels } from "../../data/hotels";

interface Request {
  nonSmoking: boolean;
  highFloor: boolean;
  checkInTime: boolean;
  other: boolean;
  connectingRoom: boolean;
  bedType: boolean;
  checkOutTime: boolean;
}

type FormData = z.infer<typeof formSchema>;

export default function BookingPage() {
  const [isOtherGuest, setIsOtherGuest] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const hotel = hotels.find((hotel) => hotel.slug === slug);
  const [requests, setRequests] = useState({
    nonSmoking: false,
    highFloor: false,
    checkInTime: false,
    other: false,
    connectingRoom: false,
    bedType: false,
    checkOutTime: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const handleCheckboxChange = (name: keyof Request) => {
    setRequests((prev: Request) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const onSubmit = (data: FormData) => {
    if (!data) return;
    navigate(`/hotels/${hotel?.slug}/payment`);
    window.scrollTo(0, 0);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-44 gap-6 bg-gray-50 py-10"
    >
      <div className="flex flex-col items-start justify-start space-y-4">
        <h1 className="text-2xl font-bold">Pemesanan Akomodasi</h1>
        <p className="text-base text-gray-500">
          Pastikan kamu mengisi semua informasi di halaman ini benar sebelum
          melanjutkan ke pembayaran.
        </p>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-4 w-2/3">
          <div className="bg-white p-6 rounded-xl h-fit shadow-sm">
            <h2 className="text-xl font-bold">
              Data Pemesan (untuk E-voucher)
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Isi semua kolom dengan benar untuk memastikan kamu dapat menerima
              voucher konfirmasi pemesanan di email yang dicantumkan.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Nama Lengkap (sesuai KTP/Paspor/SIM)
                </label>
                <input
                  autoComplete="name"
                  {...register("name")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  placeholder="Cth: Abbas Zabier Mohammad"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    autoComplete="email"
                    {...register("email")}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mt-1 p-w border border-gray-300 rounded-lg"
                    placeholder="Cth: abbas.zabier06@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium">Nomor Handphone</label>
                  <div className="flex gap-2 mt-1">
                    <span className="p-2 flex items-center bg-gray-100 border border-gray-300 rounded-lg">
                      +62
                    </span>
                    <input
                      autoComplete="hp"
                      {...register("hp")}
                      type="teks"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="85715731493"
                    />
                  </div>
                  {errors.hp && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.hp.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="guestType"
                  checked={!isOtherGuest}
                  onChange={() => setIsOtherGuest(false)}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                    !isOtherGuest ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {!isOtherGuest && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  )}
                </span>
                Sama dengan pemesan
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="guestType"
                  checked={isOtherGuest}
                  onChange={() => setIsOtherGuest(true)}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                    isOtherGuest ? "border-blue-500" : "border-gray-300"
                  }`}
                >
                  {isOtherGuest && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  )}
                </span>
                Saya memesan untuk orang lain
              </label>
            </div>

            {isOtherGuest && (
              <div className="mt-4">
                <label className="text-sm font-medium">Nama Lengkap Tamu</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  placeholder="Cth: Abbas Zabier Mohammad"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Masukkan nama tamu yang akan menginap di akomodasi.
                </p>
              </div>
            )}
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm mt-4">
            <h2 className="text-xl font-bold">
              Beri tahu di sini jika ada permintaan khusus
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Ketersediaan permintaanmu akan diinformasikan pada waktu check-in.
              Biaya tambahan mungkin akan dikenakan tapi kamu masih bisa
              membatalkannya nanti.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { label: "Kamar Bebas Asap Rokok", key: "nonSmoking" },
                { label: "Lantai Atas", key: "highFloor" },
                { label: "Waktu check-in", key: "checkInTime" },
                { label: "Lainnya", key: "other" },
                {
                  label: "Kamar dengan Pintu Penghubung",
                  key: "connectingRoom",
                },
                { label: "Tipe Ranjang", key: "bedType" },
                { label: "Waktu check-out", key: "checkOutTime" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-gray-300 rounded-md focus:ring-0"
                    checked={requests[item.key as keyof Request]}
                    onChange={() =>
                      handleCheckboxChange(item.key as keyof Request)
                    }
                  />
                  <span className="text-base text-gray-900">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm mt-4">
            <h2 className="p-4 text-xl font-bold">Rincian harga</h2>
            <p className="px-4 text-green-800 text-xs font-bold">
              Gunakan kupon di halaman pembayaran untuk harga yang lebih murah
            </p>

            <div className="px-4 mt-8 space-y-2 pb-2">
              <div className="flex justify-between">
                <span>Harga Kamar</span>
                <span className="font-bold">{hotel?.price}</span>
              </div>
              <p className="text-gray-500 text-sm">
                (1x) Deluxe Pool View (1 malam)
              </p>
            </div>

            <div className="px-4 mt-2 flex justify-between border-b border-gray-200 pb-4">
              <span>
                Pajak dan Biaya <span className="text-gray-400">(i)</span>
              </span>
              <span className="font-bold">Termasuk</span>
            </div>

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
                type="button"
                className="mt-4 w-full cursor-pointer bg-orange-500 text-white py-2 rounded-md text-lg font-bold hover:bg-orange-600"
                onClick={() => setIsOpenPayment(true)}
              >
                Lanjut ke Pembayaran
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
          <div className="bg-white rounded-xl h-fit shadow-sm">
            <div className="flex py-2 px-4 gap-2 rounded-t-xl h-fit bg-gradient-to-r from-blue-900 to-blue-400 text-white items-center">
              <HandMetal size={18} className="text-yellow-300" />
              <p className="text-sm text-gray-500 text-white">
                <span className="text-yellow-300">Pilihan tepat</span> untuk
                tempat menginapmu.
              </p>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold">{hotel?.name}</h2>
                <p className="flex text-sm text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logos} alt="star" className="w-4 h-4" />
                <span className="text-xs text-gray-500">8.9</span>
                <p className="text-xs px-0.5 bg-green-200 text-green-800 rounded-md">
                  Mendapatkan rating tinggi di kategori Lokasi
                </p>
              </div>
              <img
                src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
                alt="Hotel Image"
                className="w-full mt-2 rounded-lg w-full h-40 object-cover"
              />

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

              <p className="my-3 text-lg font-bold">(1x) Deluxe Pool View</p>
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
              <div className="flex justify-between">
                <div className="flex flex-col items-start">
                  <p className="text-sm font-bold">Total Harga Kamar</p>
                  <p className="text-xs text-gray-500">1 kamar, 1 malam</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-md font-bold text-red-500">
                    {hotel?.price}
                  </p>
                  <p className="text-xs text-green-800">Penawaran terbaik</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              🏨 Kebijakan Akomodasi
            </h3>
            <div className="mt-3 bg-blue-100 p-3 rounded-lg flex items-start gap-2">
              <IoMdInformationCircleOutline className="text-blue-500 mt-1" />
              <p className="text-sm text-gray-700">
                <strong className="text-blue-600">Informasi Penting</strong>{" "}
                <br />
                Seperti yang diumumkan oleh Departemen Bea Cukai Kerajaan
                Malaysia, Pajak Pariwisata dikenakan mulai 1 ...
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-sm font-medium flex items-center gap-2">
                <FaRegIdCard /> <strong>Dokumen yang Diperlukan</strong>
              </p>
              <p className="text-sm text-gray-700 ml-6">
                Saat check-in, Anda wajib membawa Kartu Identitas, PASSPORT.
                Dokumen yang wajib dibawa boleh dalam bentuk salinan digital
                (soft copy).
              </p>
              <p className="text-sm font-medium flex items-center gap-2">
                <FaWallet /> <strong>Deposit</strong>
              </p>
              <p className="text-sm text-gray-700 ml-6">
                Anda perlu membayar deposit MYR 200.00 saat check-in. Akomodasi
                menerima tunai, kartu debit atau kredit.
              </p>
            </div>
            <button
              className="mt-4 text-blue-600 font-medium text-sm hover:underline cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Lihat Detail
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[600px]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                🏨 Kebijakan Akomodasi
              </h2>
              <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <CgClose />
              </div>
            </div>
            <div className="mt-3 bg-blue-100 p-3 rounded-lg flex items-start gap-2">
              <IoMdInformationCircleOutline className="text-blue-500 mt-1" />
              <p className="text-sm text-gray-700">
                <strong className="text-blue-600">Informasi Penting</strong>{" "}
                <br />
                Seperti yang diumumkan oleh Departemen Bea Cukai Kerajaan
                Malaysia, Pajak Pariwisata dikenakan mulai 1 ...
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-sm font-medium flex items-center gap-2">
                <FaRegIdCard /> <strong>Dokumen yang Diperl ukan</strong>
              </p>
              <p className="text-sm text-gray-700 ml-6">
                Saat check-in, Anda wajib membawa Kartu Identitas, PASSPORT.
                Dokumen yang wajib dibawa boleh dalam bentuk salinan digital
                (soft copy).
              </p>
              <p className="text-sm font-medium flex items-center gap-2">
                <FaWallet /> <strong>Deposit</strong>
              </p>
              <p className="text-sm text-gray-700 ml-6">
                Anda perlu membayar deposit MYR 200.00 saat check-in. Akomodasi
                menerima tunai, kartu debit atau kredit.
              </p>
            </div>
          </div>
        </div>
      )}

      {isOpenPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full">
            <div className="flex p-6 gap-4 text-center">
              <img src={logopayment} alt="Avatar" className="w-30 h-35" />
              <div className="flex flex-col items-start">
                <h2 className="text-gray-800 font-semibold text-2xl flex items-center justify-center">
                  traveloka
                </h2>
                <p className="text-gray-700 mt-2 text-sm">Rinciannya benar?</p>
                <div className="mt-4 text-left text-gray-700">
                  <ul className="list-disc list-inside pl-4">
                    <li className="text-sm">
                      Email: {email ? email : "Wajib isi!"}
                    </li>
                    <li className="text-sm">
                      No. handphone: {hp ? hp : "Wajib isi!"}
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mt-4 text-sm text-left">
                  Tiket/voucher Anda akan dikirim ke email Anda dan ringkasannya
                  akan dikirim ke nomor handphone Anda.
                </p>
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-200 p-4">
              <button
                className="w-1/2 py-2 text-blue-600 font-semibold cursor-pointer"
                onClick={() => setIsOpenPayment(false)}
              >
                Ubah
              </button>
              <button
                type="submit"
                className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Ya, semua benar.
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
