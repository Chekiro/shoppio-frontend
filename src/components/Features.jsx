import React from "react";
import delivery from "../assets/delivery-van.svg";
import money_back from "../assets/money-back.svg";
import service_hours from "../assets/service-hours.svg";

const Features = () => {
  return (
    <div className="container mx-auto px-auto py-16">
      <div className="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
        <div className="border-sky-400 border-4 rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
          <img
            src={delivery}
            className="lg:w-12 w-10 h-12 object-contain"
            alt="delivey-image"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">free shipping</h4>
            <p className="text-gray-500 text-xs lg:text-sm">Order over $100</p>
          </div>
        </div>
        <div className="border-sky-400 border-4 rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
          <img
            src={money_back}
            className="lg:w-12 w-10 h-12 object-contain"
            alt="delivey-image"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Money Returns</h4>
            <p className="text-gray-500 text-xs lg:text-sm">
              30 Days money return
            </p>
          </div>
        </div>
        <div className="border-sky-400 border-4 rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
          <img
            src={service_hours}
            className="lg:w-12 w-10 h-12 object-contain"
            alt="delivey-image"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
            <p className="text-gray-500 text-xs lg:text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
