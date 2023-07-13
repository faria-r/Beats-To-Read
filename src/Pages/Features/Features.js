import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { MdDeliveryDining } from 'react-icons/md';
import { GrSupport } from 'react-icons/gr';

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
                    <RiArrowGoBackFill className='text-green-600 text-xl mr-2'></RiArrowGoBackFill>
                </div>
                <div className='text-[10px] font-sans'>
                    <h1>Money Back Garuntee</h1>
                    <h1>100% Money Back</h1>
                </div>
            </div>
            <div className='flex justify-between items-center border-2 border-gray-400 px-4 py-2'>
                <div>
                    <MdDeliveryDining className='text-green-600 text-xl mr-2'></MdDeliveryDining>
                </div>
                <div className='text-[10px] font-sans'>
                    <h1>Cash On Delivery</h1>
                    <h1>Cash-Delivery on Town</h1>
                </div>
            </div>
            <div className='flex justify-between items-center border-2 border-gray-400 px-4 py-2'>
                <div>
                    <GrSupport className='text-green-600 text-xl mr-2'></GrSupport>
                </div>
                <div className='text-[10px] font-sans'>
                    <h1>Help & Support</h1>
                    <h1>Call Us at +8809</h1>
                </div>
            </div>
        </div>
    );
};

export default Features;