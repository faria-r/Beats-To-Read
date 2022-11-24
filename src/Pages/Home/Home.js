import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BestSeller from "./BestSellerBooks/BestSeller";
import Slider from "./Slider/Slider";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <div className="my-6">
        <Slider></Slider>
       
      </div>
      <div className="my-6">
      <BestSeller></BestSeller>
      </div>
    </div>
  );
};

export default Home;
