import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaJava, FaAmazon, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-auto">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm  text-sky-400  font-extrabold tracking-wider uppercase">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Marketing
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Commerce
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Analytics
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Insights
                  </Link>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm text-sky-400  font-extrabold  tracking-wider uppercase">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    API Status
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Documentation
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Guides
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Pircing
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm text-sky-400  font-extrabold  tracking-wider uppercase">
                  Company
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    About
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Blog
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Jobs
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Press
                  </Link>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm text-sky-400  font-extrabold  tracking-wider uppercase">
                  Legal
                </h3>
                <div className="mt-4 space-y-4">
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Claim
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Privacy
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Policy
                  </Link>
                  <Link
                    to={"/"}
                    className="text-base text-gray-500 hover:text-sky-300 block"
                  >
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 xl:col-span-1">
            <img className="w-30" src={logo} alt="Company name" />
            <p className="text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              facere rem
            </p>
            <div className="flex justify-center space-x-6">
              <Link to={"/"} className="text-gray-400 hover:text-sky-400">
                <FaFacebook size={40} />
              </Link>
              <Link to={"/"} className="text-gray-400 hover:text-sky-400">
                <FaAmazon size={40} />
              </Link>
              <Link to={"/"} className="text-gray-400 hover:text-sky-400">
                <FaInstagram size={40} />
              </Link>
              <Link to={"/"} className="text-gray-400 hover:text-sky-400">
                <FaJava size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
