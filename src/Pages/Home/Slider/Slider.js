import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-auto h-[450px] relative">
        <div id="item1" className="carousel-item w-full">
          <img
            alt=""
            src="https://i.ibb.co/TYhrLpx/il-794x-N-4412125865-4sot.webp"
            className="w-full"
          />
         <div className="absolute top-48 bg-green-400 right-32 bg-transparent w-[450px]">
          <h2 className="text-white text-5xl font bold">Cover Up Fronts Of Book And Leave Summery!</h2>
         <h2 className="btn px-8 py-4 bg-green-600 ">Shop Now</h2>
         </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            alt=""
            src="https://i.ibb.co/x2qj2nS/il-794x-N-2883876270-mn5h.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            alt=""
            src="https://i.ibb.co/hcV3GK7/two-books-with-pink-flowers-as-bookmarks-on-a-white-wooden-table-spring-sunlight-warm-season-reading.jpg"
            className="w-full h-[450px]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            alt=""
            src="https://i.ibb.co/dQcJfnV/home-slider-1-ai-1.webp"
            className="w-full"
          />
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
