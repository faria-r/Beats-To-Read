import React from 'react';
import {useState,useEffect }from 'react'
import axios from 'axios'
const AllBuyers = () => {

const [buyers,setBuyers]  =useState([])

const url = 'http://localhost:5000/buyers'
    const getBuyers = () =>{
        axios.get(url)
        .then(res =>{
            const AllBuyer= res.data;
            setBuyers(AllBuyer)
        })
    }
    useEffect(()=>{
        getBuyers();
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
            const remaining = buyers.filter(buyer => buyer._id !== id)
            setBuyers(remaining)
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
            buyers.map((buyer,i) => <tr
            key={buyer._id}
            >
                <th>{i+1}</th>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td><button className='btn btn-sm btn-outline'>Verify</button></td>
                <td><button onClick={()=>handleDelete(buyer._id)} className='btn btn-sm btn-outline btn-error'>X</button></td>
              </tr>)
        }  
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllBuyers;