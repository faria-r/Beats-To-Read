import React from 'react';
import { FaTruck } from 'react-icons/fa';

const Features = () => {
    return (
        <div className='lg:flex  justify-around items-center w-1/2 mx-auto'>
            <div className='flex justify-between items-center border-2 border-gray-400 px-4 py-2'>
                <div>
                    <FaTruck className='text-green-600 text-xl mr-2'></FaTruck>
                </div>
                <div className='text-[10px] font-sans'>
                    <h1>Free Shipping Item</h1>
                    <h1>Orders Over $500</h1>
                </div>
            </div>
            <div className='flex justify-between items-center border-2 border-gray-400 px-4 py-2'>
                <div>
                    <FaTruck className='text-green-600 text-xl mr-2'></FaTruck>
                </div>
                <div className='text-[10px] font-sans'>
                    <h1>Free Shipping Item</h1>
                    <h1>Orders Over $500</h1>
                </div>
            </div>
            <div className='flex justify-between items-center border-2 border-gray-400 px-4 py-2'>
                <div>
                    <FaTruck className='text-green-600 text-xl mr-2'></FaTruck>
                </div>
                <div className='text-[10px] font-sans'>
                    <h1>Free Shipping Item</h1>
                    <h1>Orders Over $500</h1>
                </div>
            </div>
            <div className='flex justify-between items-center border-2 border-gray-400 px-4 py-2'>
                <div>
                    <FaTruck className='text-green-600 text-xl mr-2'></FaTruck>
                </div>
                <div className='text-[10px] font-sans'>
                    <h1>Free Shipping Item</h1>
                    <h1>Orders Over $500</h1>
                </div>
            </div>
        </div>
    );
};

export default Features;