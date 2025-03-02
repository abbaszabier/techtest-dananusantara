import { X } from "lucide-react";
import Swal from "sweetalert2";
import { useSettingStore } from "../store";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { email, setEmail, name, setName } = useSettingStore();
  if (!isOpen) return null;

  const handleLogin = () => {
    if (!email || !name) {
      return Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Nama dan email harus diisi!",
      });
    }

    Swal.fire({
      icon: "success",
      title: "Login Berhasil",
      text: "Selamat datang di Traveloka!",
    });
    setEmail(email);
    setName(name);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 bg-black/60 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <button className="absolute top-4 right-4" onClick={onClose}>
          <X size={24} className="text-gray-500 cursor-pointer" />
        </button>
        <h2 className="text-xl font-semibold text-center mb-4">Login/Daftar</h2>
        <div className="flex flex-col items-start gap-2">
          <label className="text-xs font-medium">Nama</label>
          <input
            type="text"
            placeholder="Masukkan nama-mu"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="text-xs font-medium">Email/No. Handphone</label>
          <input
            type="text"
            placeholder="Masukkan email atau no. handphone-mu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-gray-100 p-3 rounded-full"
        >
          Lanjutkan
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">
            atau login/daftar dengan
          </span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <button className="w-full bg-blue-200 p-3 rounded-full text-blue-800 flex items-center justify-center gap-2 mb-2">
          Google
        </button>
        <button className="w-full bg-blue-200 p-3 rounded-full text-blue-800 flex items-center justify-center gap-2 mb-2">
          Apple
        </button>
        <button className="w-full bg-blue-200 p-3 rounded-full text-blue-800 flex items-center justify-center gap-2">
          Facebook
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">
          Dengan melanjutkan, kamu menyetujui
          <a href="#" className="text-blue-500">
            Syarat & Ketentuan
          </a>
          ini dan kamu sudah diberitahu mengenai
          <a href="#" className="text-blue-500">
            Pemberitahuan Privasi
          </a>
          kami.
        </p>
      </div>
    </div>
  );
}
