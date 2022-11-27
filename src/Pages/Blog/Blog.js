import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto my-6 bg-green-300 h-auto rounded-xl px-8 py-12'> 
        <h2 className='text-3xl font-semibold text-green-600 mb-4'>Blogs</h2>
            <div className="collapse my-2 rounded-lg shadow-lg">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content flex justify-between">
   <p>What are the different ways to manage a state in a React application?</p>
   <p className='text-2xl font-bold'>+</p>
  </div>
  <div className="collapse-content bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>
            <div className="collapse my-2 rounded-lg shadow-lg">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content flex justify-between">
   <p> How does prototypical inheritance work?</p>
   <p className='text-2xl font-bold'>+</p>
  </div>
  <div className="collapse-content bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>
            <div className="collapse my-2 rounded-lg shadow-lg">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content flex justify-between">
   <p> What is a unit test? Why should we write unit tests?</p>
   <p className='text-2xl font-bold'>+</p>
  </div>
  <div className="collapse-content bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>
            <div className="collapse my-2 rounded-lg shadow-lg">
  <input type="checkbox" className="peer" /> 
  <div className="collapse-title bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content flex justify-between">
   <p> React vs. Angular vs. Vue?</p>
   <p className='text-2xl font-bold'>+</p>
  </div>
  <div className="collapse-content bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content"> 
    <p>hello</p>
  </div>
</div>
        </div>
    );
};

export default Blog;