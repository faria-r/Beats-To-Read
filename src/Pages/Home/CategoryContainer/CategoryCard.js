import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import bg1 from "../../../assets/BOOKS/bgone.jpg";
import bg2 from "../../../assets/BOOKS/bgt.jpg";
import bg3 from "../../../assets/BOOKS/bgl.jpg";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const CategoryCard = ({ category }) => {
  const { CategoryName } = category;
  return (
    <div>
      <div
        // style={{
        //   backgroundImage: `url(${bg2})`,

        //   backgroundSize: "cover",
        // }}
        className="card rounded-none border border-green-500  mx-auto h-[100px]  shadow-xl"
      >
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
