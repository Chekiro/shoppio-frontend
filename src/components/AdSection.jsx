import React from "react";
import Ad from "../assets/offer.jpg";

const AdSection = () => {
  return (
    <div className="container pb-16 px-auto mx-auto">
      <img src={Ad} className="w-full cursor-pointer" />
    </div>
  );
};

export default AdSection;
