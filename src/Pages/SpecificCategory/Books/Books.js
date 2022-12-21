import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useBuyers from "../../../customHooks/useBuyers/useBuyers";
import { FaRegCheckCircle, FaStar } from "react-icons/fa";

const Books = ({ book, books, availableBook, setAvailableBook }) => {
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyers(user?.email);
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
    <div className="my-8 rounded-lg px-4">
      <div className="card lg:card-side shadow-xl shadow-green-500 lg:h-[380px]">
        <div className="lg:w-1/2">
          <figure>
            <img src={image} alt="Album" className="hover:-skew-x-12 hover:scale-50  h-[350px] rounded-2xl w-[450px] scale-75 -rotate-12 p-4" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">Name:{name}</h2>
          <div className="mr-16 text-start text-xl font-semibold">
            <p>Sale Price: ${resalePrice}</p>
            <p>Original Price: ${originalPrice}</p>
            <p>Used:{useDuration}</p>
            <div className="">
              <p className="flex items-center ">Seller: {seller} {book?.gotVerified && (
                  <FaRegCheckCircle className="text-blue-500  text-xl font-bold"></FaRegCheckCircle>
                )} 
              </p>
            </div>

            <p>Location:{location}</p>
            <p className="flex items-center">Ratings:<span className="flex text-green-600"><FaStar></FaStar>
            <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar>
            
            </span></p>
          </div>
          {book?.gotVerified && isBuyer && (
            <div className="card-actions justify-end">
              <label
                onClick={() => setAvailableBook(book)}
                htmlFor="my-modal-3"
                className="btn bg-green-600 border-none"
              >
                Add To Cart
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
