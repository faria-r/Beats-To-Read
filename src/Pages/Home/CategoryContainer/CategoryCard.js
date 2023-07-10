import React from 'react';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import bg from '../../../assets/BOOKS/bg.jpg'
const CategoryCard = ({category}) => {
    const {CategoryName} = category;
    return (
        <div>
            <div  className="card border border-green-500  mx-auto h-[100px]  shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title text-green-600 text-xl font-semibold">{CategoryName} <Link  to={`/categories/${category.CategoryName}`}>
      <BsArrowRight className=' text-green-600'></BsArrowRight>
      </Link></h2>
    
    <div className="card-actions justify-center">
      
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;