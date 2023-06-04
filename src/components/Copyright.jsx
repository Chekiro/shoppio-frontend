import React from "react";
import methods from "../assets/methods.png";

const Copyright = () => {
  return (
    <div className="bg-gray-800 py-4 ">
      <div className="container mx-auto px-auto flex items-center justify-between">
        <p className="text-white">© Shoppio - All Rights Reserved 2023</p>
        <div>
          <img src={methods} alt="methods" className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
