import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Category from "../components/Category";
import BestDeals from "../components/BestDeals";
import AdSection from "../components/AdSection";
import NewProducts from "../components/NewProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Category />
      <BestDeals />
      <AdSection />
      <NewProducts />
    </div>
  );
};

export default Home;
