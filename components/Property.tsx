import Image from "next/image";
import React from "react";
import { GoLocation } from "react-icons/go";
import { TbHeartFilled } from "react-icons/tb";

const Property = ({ property }: { property: any }) => {
  return (
    <div className="w-full md:w-[30%] min-h-[350px] rounded-lg relative">
      <Image
        src={property?.cover_photo?.url || "/placeholder.png"}
        width={500}
        height={500}
        alt={property?.cover_photo?.description || "cover_photo"}
        className="w-full rounded-lg h-full"
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-white to-transparent  from w-full p-4 h-[35%] rounded-b-lg ">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="max-w-[80%] flex flex-row items-center gap-2 text-black font-bold">
            <GoLocation />
            <p className="text-sm">{property?.location?.district}, {property?.location?.district} </p>
          </div>
          <div className="flex flex-row items-center gap-2 px-2 border-2 border-primary-500 bg-primary-300">
            <p className="text-primary-500 font-bold">{property?.listing_type}</p>
          </div>
        </div>
        <div className="w-full flex flex-row gap-x-4 gap-y-2 mt-2 items-center flex-wrap">
          <div className="border px-4 py-[2] border-primary-400 rounded-full">
            <p className="text-xs font-bold text-primary-400">{new Date(property?.created_at).toDateString()}</p>
          </div>
          <div className="border px-4 py-[2] border-primary-400 rounded-full">
            <p className="text-xs font-bold text-primary-400">
              Year built: {property?.year_built}
            </p>
          </div>
          <div className="border px-4 py-1 border-primary-400 rounded-full">
            <p className="text-sm font-bold text-primary-400">MWK {property?.price}</p>
          </div>
          <button className="shadow-lg shadow-primary-50 py-2 px-4 rounded-full bg-primary-50">
            <p className="text-center text-sm font-bold">BOOK NOW</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
