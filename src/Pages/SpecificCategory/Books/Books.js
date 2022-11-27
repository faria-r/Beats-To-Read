import React, { useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";

const Books = ({ book, books,  availableBook,
  setAvailableBook }) => {
console.log(availableBook,'book')
  const {
    name,
    image,
    _id,
    location,
    about,
    resalePrice,
    originalPrice,
    useDuration,
    seller,
  } = book;

  return (
    <div className="my-8 rounded-lg p-4 shadow-2xl">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="w-1/2">
          <figure>
            <img src={image} alt="Album" className="h-[450px]" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">Name:{name}</h2>
          <div className="mr-16 text-start text-xl font-semibold">
            <p>Sale Price: ${resalePrice}</p>
            <p>Original Price: ${originalPrice}</p>
            <p>Used:{useDuration} Months</p>
            <p>Seller:{seller}</p>
            <p>Location:{location}</p>
          </div>
          <div className="card-actions justify-end">
         
            {/* <a href="#booking-modal" className="btn bg-green-600 border-none">
             Book Now
            </a> */}
            <label onClick = {()=> setAvailableBook(book)} htmlFor="my-modal-3" className="btn">Yay!</label>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Books;
