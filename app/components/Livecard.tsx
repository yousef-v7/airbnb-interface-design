import { LiveItem } from "@/app/types/app";
import Image from "next/image";

type LiveCardProps = LiveItem;
const Livecard = ({ title, img }: LiveCardProps) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-200">
      <div className="relative w-full h-40 md:h-60">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg mt-2">{title}</h3>
    </div>
  );
};

export default Livecard;
