import Image from "next/image";
// Update the file name if needed (remove spaces)
import greatestOutdoorsImg from "@/public/GreatestOutdoors airbnb.jpg";

const GreatestOutdoors = () => {
  return (
    <div className="container mx-auto relative w-full h-[200px] sm:h-[200px] md:h-[500px] lg:h-[600px] xl:h-[700px] mt-20 mb-8">
      <Image
        src={greatestOutdoorsImg}
        alt="Greatest Outdoors"
        layout="fill"
        objectFit="cover"
        className="rounded-lg px-1"
      />
      <div className="absolute inset-0 bg-opacity-40">
        {/* Inner wrapper now includes sm:px-10 for horizontal padding */}
        <div className="flex flex-col justify-center items-start p-6 sm:px-10 md:p-8 h-full">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
            The Great
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
            Outdoors
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-white mt-2">
            Wishlists curated by Airbnb
          </p>
          <button className="mt-4 bg-white text-black px-3 py-1 rounded-full font-bold hover:bg-gray-200 transition text-xs sm:text-sm">
            Get Inspired
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreatestOutdoors;
