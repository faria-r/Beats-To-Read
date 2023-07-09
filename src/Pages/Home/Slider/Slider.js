import React from "react";
import style from './style.css'
const Slider = () => {
  return (
    <div>
      <div className="carousel w-auto h-[80vh] relative">
        <div id="item1" className="carousel-item w-full ">
         
         <div className="absolute top-48 image p-4 rounded-xl right-32  w-[450px]">
          <h2 className="text-green-400 text-5xl font bold">Cover Up Fronts Of Book And Leave Summery!</h2>
         <h2 className="btn px-8 py-4 bg-green-600 ">Shop Now</h2>
         </div>
        </div>
        <div id="item2" className="carousel-item w-full ">
          
        </div>
        <div id="item3" className="carousel-item w-full ">
          
        </div>
        <div id="item4" className="carousel-item w-full ">
         
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
