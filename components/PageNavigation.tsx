import React from "react";

const PageNavigation = ({
  currentIndex,
  endReached,
  handleNext,
  handlePrev,
  lastPage,
}: {
  currentIndex: number;
  endReached: boolean;
  handleNext: any;
  handlePrev: any;
  lastPage: number;
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex flex-row gap-8 items-center">
          {currentIndex > 1 && (
            <button
              className="py-2 border-2 px-4 border-primary-500 hover:scale-110"
              onClick={handlePrev}
            >
              <p className="text-sm font-bold text-primary-500">Previous</p>
            </button>
          )}
          {!endReached && (
            <button
              className="bg-primary-500 py-2 px-6 hover:scale-110"
              onClick={handleNext}
            >
              <p className="text-sm text-white font-bold shadow hover:scale-110">
                Next
              </p>
            </button>
          )}
        </div>
      </div>
      <p className="text-primary-500 mt-4">
        Page {currentIndex} of {lastPage}
      </p>
    </div>
  );
};

export default PageNavigation;
