import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import axios from 'axios'
import ProductList from './ProductList/ProductList';

const MyProduct = () => {
const {user} = useContext(AuthContext) ;

    const [products,setProducts] = useState([]);
    const url = `http://localhost:5000/myproducts?email=${user?.email}`;

const getProducts = () =>{
    axios.get(url)
    .then(res => {
        console.log(res)
        const myProducts = res.data;
        console.log(myProducts)
        setProducts(myProducts)
    })
}

    useEffect(()=>{
       getProducts()
    },[user?.email])
    return (
        <div>
            <h3>My Products</h3>
            <div>
           
            </div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
                products.map((product,i) => <tr
                key={product._id}
                product={product}
                >   <th>
                {i+1}
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th></tr>)
            } 
    </tbody> 
  </table>
</div> 
           
        </div>
    );
};

export default MyProduct;