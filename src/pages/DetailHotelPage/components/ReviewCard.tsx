import Card from "./CardDetail";

const ReviewCard = () => (
  <Card title="">
    <img
      src="https://ik.imagekit.io/tvlk/image/imageResource/2024/12/13/1734060460929-07d3ce81447d2371cfa2bf9303b14bbb.svg?tr=q-75"
      alt="flash"
      className="absolute top-0 right-0 z-30 object-cover"
      style={{
        maskImage: "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,1))",
      }}
    />
    <div className="relative flex items-center space-x-2">
      <div className="bg-blue-500 z-40 text-white px-2 py-2 rounded-lg text-xl font-bold">
        9.0
      </div>
      <div className="flex flex-col items-left gap-1 text-blue-500 font-semibold text-sm">
        <h1 className="text-xl text-gray-900 font-bold">Mengesankan</h1>
        <p className="text-gray-600 text-sm">
          Dari 1.615 review tamu yang terverifikasi
        </p>
      </div>
    </div>
  </Card>
);

export default ReviewCard;
