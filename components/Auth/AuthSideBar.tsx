import React from "react";

const AuthSideBar = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="hidden md:flex flex-col w-[35%] bg-primary-500 h-full relative justify-center px-8 overflow-hidden animated fadeInLeft">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default AuthSideBar;
