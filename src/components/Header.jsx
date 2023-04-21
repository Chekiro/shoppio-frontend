import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="py-4 shadow-sm lg:bg-white">
      <div className="container mx-auto px-4   flex items-center justify-between">
        <Link to={"/"} className="block w-32">
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <AiOutlineSearch size={25} className="cursor-pointer" />
          </span>
          <input
            type="text"
            className="border-2 border-sky-400 pl-12 w-full  border-r-0  py-3 px-3 rounded-l-md focus:border-black"
            placeholder="search"
          />
          <button
            type="submit"
            className="bg-sky-400  border-2 border-sky-400 text-white px-8 font-medium rounded-r-md hover:bg-transparent focus:border-black hover:text-black transition"
          >
            Search
          </button>
        </div>
        <div className="space-x-4 flex items-center">
          <div>
            <Link
              to={"/fav"}
              className="block text-center text-gray-700 hover:text-sky-400 transition relative"
            >
              <span className="absolute right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-sky-400 text-white text-xs">
                5
              </span>
              <div className="text-2xl">
                <AiOutlineHeart size={30} className="ml-2" />
              </div>
              <div className="text-xs leading-3">Wish List</div>
            </Link>
          </div>
          <div>
            <Link
              to={"/cart"}
              className="lg:block text-center text-gray-700 hover:text-sky-400 transition hidden relative"
            >
              <span className="absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-sky-400 text-white text-xs">
                5
              </span>
              <div className="text-2xl">
                <AiOutlineShoppingCart size={30} className="-ml-1" />
              </div>
              <div className="text-xs leading-3">Cart</div>
            </Link>
          </div>
          <div className="flex text">
            <Link
              to={"/profile"}
              className="block text-center text-gray-700 hover:text-sky-400 transition relative"
            >
              <div className="text-2xl ">
                <CgProfile size={30} className="ml-2" />
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
