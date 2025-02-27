import { Disc2 } from "lucide-react";
import { useState } from "react";

const coupons = [
  {
    id: 1,
    title: "Kupon Diskon 80%",
    snk: "Berlaku untuk ...",
    code: "STEALDEAL20",
    side: "left",
  },
  {
    id: 2,
    title: "20% off on HDFC Bank Cards",
    snk: "Berlaku untuk ...",
    code: "HDFCRIDE20",
    side: "both",
  },
  {
    id: 3,
    title: "Get 50% off on your first ride",
    snk: "Berlaku untuk ...",
    code: "FIRST50",
    side: "right",
  },
];

export default function KuponPengguna() {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = (code: string, id: number) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto py-6">
      <h2 className="text-xl font-bold flex items-center gap-4 text-black">
        <span className="text-2xl">🎁</span> Kupon Pengguna Baru
      </h2>
      <p className="text-gray-500 mt-2">
        Berlaku untuk Transaksi Pertama di Traveloka App
      </p>
      <div className="grid grid-cols-3 bg-gray-200 p-1 gap-2 rounded-lg shadow-md mt-2">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="bg-white text-black gap-4 text-center rounded-lg shadow-md relative"
          >
            <div className="flex flex-col h-full items-left justify-start space-x-2">
              <div className="flex items-center justify-center space-x-2 mt-2">
                <Disc2 className="text-purple-600" />
                <h3 className="text-sm font-semibold">{coupon.title}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-6 space-x-2 ">
                {coupon.snk}
              </p>
              <div className="flex items-top justify-center space-x-2">
                <span id="cpnCode" className="px-4 py-2 rounded-l">
                  {coupon.code}
                </span>
                <span
                  id="cpnBtn"
                  className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
                  onClick={() => handleCopy(coupon.code, coupon.id)}
                >
                  {copied === coupon.id ? "Copied!" : "Copy Code"}
                </span>
              </div>
            </div>

            {/* Styling untuk sisi kupon */}
            {(coupon.side === "left" || coupon.side === "right") && (
              <div className="w-12 h-6 bg-gray-200 rounded-t-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-3 rotate-90"></div>
            )}
            {coupon.side !== "none" && (
              <div className="absolute top-1/2 mx-auto left-6 right-0 border-t border-dashed border-gray-400 transform -translate-y-1/2"></div>
            )}
            {(coupon.side === "right" || coupon.side === "left") && (
              <div className="w-6 h-12 bg-gray-200 rounded-l-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-0"></div>
            )}
            {coupon.side === "both" && (
              <>
                <div className="w-12 h-12 bg-gray-200 rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
                <div className="w-12 h-12 bg-gray-200 rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
