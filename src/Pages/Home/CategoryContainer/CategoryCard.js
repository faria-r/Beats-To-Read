import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/BOOKS/bg.jpg'
const CategoryCard = ({category}) => {
    const {CategoryName} = category;
    return (
        <div>
            <div style={ {backgroundImage: `url(${bg})`}} className="card w-[300px] mx-auto h-[250px]  shadow-xl">
  <div className="card-body text-center">
    <h2 className="card-title text-green-600 text-2xl font-semibold">{CategoryName}</h2>
    
    <div className="card-actions justify-center mt-16">
      <Link  to={`/categories/${category.CategoryName}`}>
      <button className="btn bg-green-600 border-none">Explore Now</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;