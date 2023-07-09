import React, {  } from "react";
import Ads from "./Advertise/Ads";
import BestSeller from "./BestSellerBooks/BestSeller";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import Slider from "./Slider/Slider";
import SwipSlide from "./Slider/SwipSlide";

const Home = () => {
  return (
    <div>
      <div className="my-6">
        {/* <Slider></Slider> */}
        <SwipSlide></SwipSlide>
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
