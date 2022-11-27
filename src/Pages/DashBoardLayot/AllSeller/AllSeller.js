// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {useState,useEffect }from 'react'
import axios from 'axios'
const AllSeller = () => {

const [sellers,setSellers]  =useState([])

const url = 'http://localhost:5000/sellers'
    const getSellers = () =>{
        axios.get(url)
        .then(res =>{
            const AllSeller= res.data;
            setSellers(AllSeller)
        })
    }
    useEffect(()=>{
        getSellers();
    },[]);

    const handleDelete = (id) =>{
       fetch(`http://localhost:5000/users/${id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json'
        }
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data)
        if(data){
            const remaining = sellers.filter(seller => seller._id !== id)
            setSellers(remaining)
        }
       })
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Verify</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>  
        {
            sellers.map((seller,i) => <tr
            key={seller._id}
            >
                <th>{i+1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td><button className='btn btn-sm btn-outline'>Verify</button></td>
                <td><button onClick={()=>handleDelete(seller._id)} className='btn btn-sm btn-outline btn-error'>X</button></td>
              </tr>)
        }  
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSeller;