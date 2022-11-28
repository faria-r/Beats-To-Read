import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryContainer = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
          const res = await fetch("https://assignment-twelve-server-psi.vercel.app/categories")
          const data = res.json();
          return data;
        },
      });
    return (
        <div>
            
            <div className=' my-16 grid grid-cols-1 lg:grid-cols-3 gap-2 mx-[80px]'>
            {
                categories.map(category => <CategoryCard
                key={category._id}
                category={category}
                ></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default CategoryContainer;