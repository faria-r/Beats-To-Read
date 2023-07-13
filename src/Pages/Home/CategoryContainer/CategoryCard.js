import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import bg from "../../../assets/BOOKS/bg.jpg";
const CategoryCard = ({ category }) => {
  const { CategoryName } = category;
  return (
    <div>
      <div className="card rounded-none border border-green-500  mx-auto h-[100px]  shadow-xl">
        <div className="card-body text-center mx-auto">
          <h2 className="card-title text-green-600 text-xl text-center font-semibold">
            {CategoryName}{" "}
            <Link to={`/categories/${category.CategoryName}`}>
              <BsArrowRight className=" text-green-600"></BsArrowRight>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
