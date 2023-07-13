import React, {  } from "react";
import Ads from "./Advertise/Ads";
import BestSeller from "./BestSellerBooks/BestSeller";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import SwipSlide from "./Slider/SwipSlide";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <div className="mb-6">
        <SwipSlide></SwipSlide>
      </div>
      <div>
        <Features></Features>
      </div>
      <div>
        <CategoryContainer></CategoryContainer>
      </div>
      <div className="w-3/4 mx-auto">
        <Ads></Ads>
      </div>
      <div className="my-6 max-w-screen">
      <BestSeller></BestSeller>
      </div>
    </div>
  );
};

export default Home;
