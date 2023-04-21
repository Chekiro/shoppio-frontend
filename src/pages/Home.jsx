import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Category from "../components/Category";
import BestDeals from "../components/BestDeals";
import AdSection from "../components/AdSection";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Category />
      <BestDeals />
      <AdSection />
      <PopularProducts />
    </div>
  );
};

export default Home;
