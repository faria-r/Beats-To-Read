import React from "react";
import author from "../../../assets/best-seller-author.webp";
import one from "../../../assets/download.jpg";
import two from "../../../assets/one.jpg";
import three from "../../../assets/two.jpg";
import four from "../../../assets/third.jpg";

const BestSeller = () => {
  return (
    <div className="h-auto">
      <div className="hero max-w-screen overflow-hidden bg-green-200">
        <div className="hero-content flex-col-reverse lg:flex-row w-full h-full">
          <div className="w-1/2">
            <img
              src={author}
              alt=""
              className="lg:w-3/4 w-full  h-[450px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="bg-base-200  grid grid-cols-2  h-[550px] p-3 rounded-lg ">
            <div className="card w-64 text-primary-content">
              <div className="card-body">
                <img src={one} className="h-52 rounded-lg" alt="" srcset="" />
              </div>
            </div>
            <div className="card w-64 text-primary-content">
              <div className="card-body">
                <img src={two} className="h-52 rounded-lg" alt="" srcset="" />
              </div>
            </div>
            <div className="card w-64 text-primary-content">
              <div className="card-body">
                <img src={three} className="h-52 rounded-lg" alt="" srcset="" />
              </div>
            </div>
            <div className="card w-64 text-primary-content">
              <div className="card-body">
                <img src={four} className="h-52 rounded-lg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
