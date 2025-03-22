import Image from "next/image";
import bannerImg from "@/public/Banner airbnb.jpg";

const Banner = () => {
  return (
    <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] relative overflow-hidden shadow-md">
      <Image
        src={bannerImg}
        alt="Airbnb banner"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Button Overlay */}
      <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
        <p className="text-sm sm:text-lg text-black font-semibold">
          Not sure where to go? Perfect.
        </p>
        <button
          type="button"
          className="
      text-red-500 
      bg-black 
      font-bold 
      mt-4 
      rounded-full 
      shadow-md 
      hover:shadow-lg 
      transition
      px-6 py-2
      sm:px-8 sm:py-3
      md:px-10 md:py-4
      text-sm sm:text-base md:text-md
      cursor-pointer
    "
        >
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
