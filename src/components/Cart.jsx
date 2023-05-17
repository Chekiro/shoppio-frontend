import React from "react";
import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product9.jpg";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Breadcrum from "./Breadcrum";

const Cart = () => {
  return (
    <>
      <Breadcrum name="Shopping Cart" />
      <div className="container mx-auto px-auto lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="xl:col-span-9 lg:col-span-8">
          <div className="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
            <p className="text-gray-600 text-center">Product</p>
            <p className="text-gray-600 text-center ml-auto mr-16 xl:mr-24">
              Quantity
            </p>
            <p className="text-gray-600 text-center">Total</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
              <div className="w-32 flex-shrink-0">
                <img src={Product1} className="w-full" alt="product1" />
              </div>
              <div className="md:w-1/3 w-full">
                <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                  Hungarian Brown Chair
                </h2>
                <p className="text-primary font-semibold">45$</p>
                <p className="text-gray-500">Size: 1.34m x 1.56m</p>
              </div>
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                  -
                </div>
                <div className="h-8 w-10 flex items-center justify-center">
                  2
                </div>
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                  +
                </div>
              </div>
              <div className="ml-auto md:ml-0">
                <p className="text-sky-500 text-lg font-semibold">$350.00</p>
              </div>
              <div className="text-gray-600 hover:text-red-500 cursor-pointer">
                <FaTrash />
              </div>
            </div>
            <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
              <div className="w-32 flex-shrink-0">
                <img src={Product2} className="w-full" alt="product1" />
              </div>
              <div className="md:w-1/3 w-full">
                <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                  Italian Pink Chair
                </h2>
                <p className="text-primary font-semibold">78$</p>
                <p className="text-gray-500">Size: 1.34m x 1.56m</p>
              </div>
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                  -
                </div>
                <div className="h-8 w-10 flex items-center justify-center">
                  1
                </div>
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                  +
                </div>
              </div>
              <div className="ml-auto md:ml-0">
                <p className="text-sky-500 text-lg font-semibold">$550.00</p>
              </div>
              <div className="text-gray-600 hover:text-red-500 cursor-pointer">
                <FaTrash />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            Order Summary
          </h4>
          <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
            <div className="flex justify-between font-medium">
              <p>Subtotal</p>
              <p>$700</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>Free</p>
            </div>
          </div>
          <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
            <h4>Total</h4>
            <h4>$900</h4>
          </div>
          <div className="flex mb-5">
            <input
              className="pl-4 w-full border-2 border-r-0 border-sky-400 py-2 px-3 rounded-l-md  focus:border-sky-400 text-sm"
              placeholder="Coupon..."
            />
            <button className="bg-sky-400 border border-sky-400 text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-black transition text-sm font-roboto">
              Apply
            </button>
          </div>
          <Link
            className="bg-sky-400 border-2 border-sky-400 text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
             hover:text-black transition text-sm w-full block text-center"
          >
            Process to checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
