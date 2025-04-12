import React, { Fragment, useState } from "react";
import Dropdown from "./DropDown";
import Property from "./Property";
import ListProperty from "./ListProperty";

const Properties = ({
  properties,
  view,
  handleSetView,
  searchTerm,
}: {
  properties: any;
  view: "Card" | "List";
  handleSetView: any;
  searchTerm: string;
}) => {
  const [currentTab, setCurentTab] = useState<string>("All");

  const tabs = ["All", "Sale", "Rent"];

  // Filter properties based on selected tab and search term
  const filteredProperties = properties?.filter((property: any) => {
    const matchesSearch = (
      property?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property?.location?.district?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property?.listing_type?.toLowerCase().includes(searchTerm.toLowerCase())
    ) || !searchTerm;

    const matchesTab =
      currentTab === "All" || property?.listing_type?.toLowerCase() === currentTab.toLowerCase();

    return matchesSearch && matchesTab;
  });

  return (
    <div className="px-4 md:px-16 mt-[130px]">
      <div className="w-full flex flex-row gap-8 mt-10 items-center justify-center">
        <Dropdown
          title={view}
          options={["Card", "List"]}
          handleSelectOption={(option: string) => handleSetView(option)}
        />
        <nav>
          <ul className="flex flex-row flex-wrap gap-8 text-dark font-bold text-sm">
            {tabs.map((tab: string, index: number) => (
              <li
                key={index.toString()}
                className={`cursor-pointer hover:scale-110 text-primary-50 hover:text-primary-500 ${
                  currentTab === tab ? "text-primary-500" : ""
                }`}
                onClick={() => setCurentTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-10 mt-10 justify-center">
        {filteredProperties?.map((property: any, index: number) => (
          <Fragment key={index.toString()}>
            {view === "Card" ? (
              <Property property={property} />
            ) : (
              <ListProperty property={property} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Properties;
