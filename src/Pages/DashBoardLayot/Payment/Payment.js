import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const orderData = useLoaderData();
    console.log(orderData)
    return (
        <div>
            <h3 className='text-xl font-semibold my-4'>Payment for <span className='text-green-700 font-bold text-2xl'>{orderData.bookName}</span></h3>
            <p className='text-xl font-semibold'>Please Pay $<span className='text-white font-bold text-2xl'>{orderData.price}</span> to Confirm Your Order</p>
        </div>
    );
};

export default Payment;