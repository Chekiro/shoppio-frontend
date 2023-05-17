import React from "react";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrum = ({ name }) => {
  return (
    <div className="py-4 container mx-auto px-auto flex gap-3 items-center">
      <Link to={"/"} className="text-sky-400 text-base">
        <FaHome size={20} className="font-black" />
      </Link>
      <span className="text-sm text-gray-400">
        <FaArrowRight size={20} className="font-black" />
      </span>
      <p className="text-gray-600 font-medium uppercase">{name}</p>
    </div>
  );
};

export default Breadcrum;
