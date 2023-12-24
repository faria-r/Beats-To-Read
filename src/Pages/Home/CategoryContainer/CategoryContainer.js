import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
import bg1 from "../../../assets/BOOKS/bgone.jpg";
import bg2 from "../../../assets/BOOKS/bgt.jpg";
import bg3 from "../../../assets/BOOKS/bgl.jpg";
import { Link } from "react-router-dom";
import SpecificCategory from "../../SpecificCategory/SpecificCategory";
const CategoryContainer = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://assignment-twelve-server-psi.vercel.app/categories"
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <Tabs>
      <TabList className="w-[50vw] bg-green-400 p-5  my-8 grid grid-cols-1 lg:grid-cols-3 gap-2 mx-auto">
        {categories?.map((category) => (
          <Tab className="">
            <p  key={category._id} category={category}>{category.CategoryName}</p>
          </Tab>
        ))}
      </TabList>
      
          <TabPanel>
           
          </TabPanel>
      
     
    </Tabs>
  );
};

export default CategoryContainer;
