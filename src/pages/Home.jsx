import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Category from "../components/Category";
import BestDeals from "../components/BestDeals";
import AdSection from "../components/AdSection";
import NewProducts from "../components/NewProducts";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Category />
      <Element name="best-deals">
        <BestDeals />
      </Element>
      <AdSection />
      <Element name="new-products">
        <NewProducts />
      </Element>
    </div>
  );
};

export default Home;
