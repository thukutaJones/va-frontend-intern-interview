"use client";

import LoadingAnimation from "@/components/LoadingAnimation";
import PageNavigation from "@/components/PageNavigation";
import Properties from "@/components/Properties";
import PropertiesTopBar from "@/components/PropertiesTopBar";
import { baseUrl } from "@/constants/baseUrl";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  useAuth();
  const [properties, setProperties] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [view, setView] = useState<"List" | "Card">("Card");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);


  const getPropertListings = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${baseUrl}/api/v2/properties?page=${currentIndex}`
      );
      setProperties(res?.data?.data);
      setLastPage(res?.data?.meta?.last_page);
    } catch (error: any) {
      // alert(error)
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPropertListings();
  }, [currentIndex]);

  if (isLoading) return <LoadingAnimation />;

  return (
    <div className="min-h-screen w-full pb-[5%]">
      <PropertiesTopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Properties
        properties={properties}
        view={view}
        handleSetView={(view: "Card" | "List") => setView(view)}
        searchTerm={searchTerm}
      />
      <PageNavigation
        currentIndex={currentIndex}
        lastPage={lastPage}
        endReached={currentIndex === lastPage}
        handleNext={() => {
          if (currentIndex < lastPage) {
            setCurrentIndex(currentIndex + 1);
          }
        }}
        handlePrev={() => {
          if (lastPage > 1) {
            setCurrentIndex(currentIndex - 1);
          }
        }}
      />
    </div>
  );
};

export default page;
