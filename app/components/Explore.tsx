import ExploreCard from "@/app/components/ExploreCard";
import { get_Explore } from "@/app/utils/api";
import { ExploreData } from "@/app/types/app";
import MainHeading from "@/app/components/MainHeading";

const Explore = async () => {
  const exploreData: ExploreData = await get_Explore();

  return (
    <section className="pt-6">
      <div className="container mx-auto px-4">
        <MainHeading title="Explore nearby" />

        {/* Render explore cards from api data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
          {exploreData.map((item) => (
            <ExploreCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
