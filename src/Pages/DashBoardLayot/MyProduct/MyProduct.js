import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const Swal = require("sweetalert2");
  const url = `https://assignment-twelve-server-psi.vercel.app/myproducts?email=${user?.email}`;
  const getProducts = () => {
    axios.get(url).then((res) => {
      const myProducts = res.data;
      console.log(myProducts);
      setProducts(myProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, [user?.email]);
  const handleDelete = (id) => {
    console.log(id, "clicked");
    fetch(`https://assignment-twelve-server-psi.vercel.app/myproducts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const reamainingProducts = products.filter(
          (product) => product._id !== id
        );
        setProducts(reamainingProducts);
      });
  };
//handle advertise
const handleAdvertise = (id,image,name) =>{
  console.log(id,image,name);
  const adsImage = {
    image:image,
    name,
  };
  fetch('https://assignment-twelve-server-psi.vercel.app/advertise',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(adsImage)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.insertedId){
      Swal.fire("Done!", " Product Has Been Advertised!", "success");
    }
    
  })

}
  return (
    <div>
      <h3 className="text-2xl text-white my-6">My Products</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL.</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id} product={product}>
                {" "}
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.sold && (
                    <span className="text-green-500 font-bold">Sold</span>
                  )}
                  {!product.sold && (
                    <span className="text-red-500 font-bold">Unsold</span>
                  )}
                </td>
                <td>$ {product.resalePrice}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    X
                  </button>
                </td>
                <th>
                  {!product.sold && (
                    <button onClick={()=>handleAdvertise(product._id,product.image,product.name)} className="btn btn-sm btn-outline btn-green-500 btn-xs">
                      Advertise
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;
