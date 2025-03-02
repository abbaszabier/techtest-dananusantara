import Card from "./CardDetail";

const facilities = [
  "❄️ AC",
  "🅿️ Parkir",
  "🍽 Restoran",
  "🏢 Lift",
  "🏊‍♂️ Kolam Renang",
  "📶 WiFi",
  "⏰ Resepsionis 24 Jam",
];

const FacilityCard = () => (
  <Card title="Fasilitas Utama" linkText="Selengkapnya">
    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
      {facilities.map((item, index) => (
        <div key={index} className="p-2">
          {item}
        </div>
      ))}
    </div>
  </Card>
);

export default FacilityCard;
