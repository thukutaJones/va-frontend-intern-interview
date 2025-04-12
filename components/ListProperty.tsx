import Image from "next/image";
import React from "react";
import { GoLocation } from "react-icons/go";

const ListProperty = ({ property }: { property: any }) => {
  return (
    <div className="w-full flex flex-row gap-4 p-4 border rounded-lg shadow-sm bg-white">
      <div className="w-[150px] h-[150px] relative rounded-lg overflow-hidden">
        <Image
          src={property?.cover_photo?.url || "/placeholder.png"}
          fill
          alt={property?.cover_photo?.description || "cover_photo"}
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-black font-bold">
              <GoLocation />
              <p className="text-sm">
                {property?.location?.district}, {property?.location?.district}
              </p>
            </div>
            <p className="text-sm text-gray-600">{property?.listing_type}</p>
          </div>
          <div className="text-right">
            <p className="text-primary-500 font-bold text-lg">MWK {property?.price}</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-2 mt-4 text-xs">
          <div className="border px-3 py-1 border-primary-400 rounded-full text-primary-400 font-semibold">
            {new Date(property?.created_at).toDateString()}
          </div>
          <div className="border px-3 py-1 border-primary-400 rounded-full text-primary-400 font-semibold">
            Year built: {property?.year_built}
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-primary-50 py-2 px-4 rounded-full text-sm font-bold shadow-md">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListProperty;
