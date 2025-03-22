import MainHeading from "@/app/components/MainHeading";
import { get_Live } from "@/app/utils/api";
import { LiveData } from "@/app/types/app";
import Livecard from "@/app/components/Livecard";

const Live = async () => {
  const liveData: LiveData = await get_Live();

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <MainHeading title="Live Anywhere" />

      {/* Live Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3">
        {liveData.map((item) => (
          <Livecard key={item.img} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Live;
