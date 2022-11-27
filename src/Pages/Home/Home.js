import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Ads from "./Advertise/Ads";
import BestSeller from "./BestSellerBooks/BestSeller";
import Slider from "./Slider/Slider";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <div className="my-6">
        <Slider></Slider>
      </div>
      <div>
        <Ads></Ads>
      </div>
      <div className="my-6">
      <BestSeller></BestSeller>
      </div>
    </div>
  );
};

export default Home;
