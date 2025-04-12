import Image from "next/image";
import React, { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import SearchBar from "./SearchBar";

const PropertiesTopBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => {
  
  return (
    <div className="z-30 fixed top-0 left-0 h-[100px] bg-white  w-full px-4 md:px-16 flex items-center">
      <div className="w-full flex flex-row">
        <div className="w-full flex flex-row gap-8 items-center">
          <h2 className="text-4xl font-bold text-primary-500">Properties</h2>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="flex flex-row items-center gap-4 text-black">
          <BiMessageRoundedDetail size={30} className="hidden md:flex"/>
          <MdOutlineNotificationsNone size={30} className="hidden md:flex" />
          <div className="h-10 w-10 border-2 border-primary-500 rounded-full justify-center items-center hidden md:flex">
            <Image
              src="/profile.png"
              width={100}
              height={100}
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesTopBar;
