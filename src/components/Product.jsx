import React, { useContext } from "react";
import { FaSearch, FaHeart, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

const Product = ({ data }) => {
  const { addToCart } = useContext(DataContext);
  const handleAddToCart = () => {
    addToCart(data);
    toast.success("Product added to cart 🥳");
  };
  const { title, price, discount, rating, image } = data;
  return (
    <div className="group rounded bg-white shadow overflow-hidden">
      <div className="relative">
        <img
          src={image}
          style={{ height: 300 }}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
            <FaSearch />
          </Link>
          <Link className="text-white text-lg w-9 h-9 rounded-full bg-sky-400 hover:bg-gray-800 transition flex items-center justify-center">
            <FaHeart />
          </Link>
        </div>
        <div className="pt-4 pb-3 px-4">
          <Link>
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-sky-400 transition">
              {title}
            </h4>
          </Link>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-roboto font-semibold">
              {discount} zł
            </p>
            <p className="text-sm text-gray-400 font-roboto line-through">
              {price} zł
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">({rating})</div>
          </div>
        </div>
      </div>
      <Link
        onClick={handleAddToCart}
        className="block w-full py-1 text-center text-white bg-sky-400 border-2 border-sky-400 rounded-b hover:bg-transparent hover:text-black transition"
      >
        Add to Cart
      </Link>
    </div>
  );
};

export default Product;
