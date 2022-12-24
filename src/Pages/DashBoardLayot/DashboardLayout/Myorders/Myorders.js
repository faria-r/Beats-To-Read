import { useQuery } from '@tanstack/react-query';
import React from 'react';
import  { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const Myorders = () => {
    const { user } = useContext(AuthContext);
const {data: orders = [] } = useQuery({
    queryKey:['orders'],
    queryFn:async () =>{
        const res = await fetch(`https://assignment-twelve-server-psi.vercel.app/orders?email=${user?.email}`)
        const data = res.json();
        return data;
    } 
})

    return (
        <div className='lg:w-3/4 lg:mx-auto my-8 sm:mx-4'>
        <h3 className='text-2xl font-semibold'>My Orders</h3>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={order._id} order={order}>
                  {" "}
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={order.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.bookName}</div>
                      </div>
                    </div>
                  </td>
                  <td>$ {order.price}</td>       
                  <th>
                    {
                        order.price && !order.paid && 
                       <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-sm btn-outline btn-green-500 btn-xs">
                     Pay
                    </button></Link>
                    }
                    {
                        order.price && order.paid && <span className='text-green-600 text-xl'>Paid</span>
                    }
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Myorders;





  



