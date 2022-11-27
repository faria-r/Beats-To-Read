import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);
const Payment = () => {
    const orderData = useLoaderData();
    const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return <progress className="progress w-56"></progress>
  }

    return (
        <div>
            <h3 className='text-xl font-semibold my-4'>Payment for <span className='text-green-700 font-bold text-2xl'>{orderData.bookName}</span></h3>
            <p className='text-xl font-semibold'>Please Pay $<span className='text-white font-bold text-2xl'>{orderData.price}</span> to Confirm Your Order</p>

            <div className='w-96 mx-auto my-12 bg-white px-5 py-8 rounded-xl'>
            <Elements stripe={stripePromise}>
      <CheckOutForm orderData={orderData} />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;