// import { useQuery } from '@tanstack/react-query';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegCheckCircle } from "react-icons/fa";
const AllSeller = () => {
  const [sellers, setSellers] = useState([]);

  const url = "https://assignment-twelve-server-psi.vercel.app/sellers";
  const getSellers = () => {
    axios.get(url).then((res) => {
      const AllSeller = res.data;
      setSellers(AllSeller);
    });
  };
  useEffect(() => {
    getSellers();
  }, []);

  const handleDelete = (id) => {
    fetch(`https://assignment-twelve-server-psi.vercel.app/users/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          const remaining = sellers.filter((seller) => seller._id !== id);
          setSellers(remaining);
        }
      });
  };
  //verify seller
  const handleVerify = (id,email) => {
    console.log(id);
    const userId = { id,email };
    fetch(`https://assignment-twelve-server-psi.vercel.app/verify/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization:`bearer ${localStorage.getItem('access-token')}`
      },
      body: JSON.stringify(userId),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            // const remainingUnverified = sellers.filter((seller) => seller._id !== id);
          fetch(`https://assignment-twelve-server-psi.vercel.app/books/${email}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(userId)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setSellers(AllSeller);
          })
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
      <h2 className=' text-2xl my-8'>Sellers</h2>
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
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {seller.verified ? (
                    <div className="flex  items-center">
                      <button
                        className="btn bg-green-400 btn-sm btn-outline border-none"
                        disabled
                      >
                        Verified 
                      </button> <FaRegCheckCircle className="text-blue-500 ml-2 text-xl font-bold"></FaRegCheckCircle>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => handleVerify(seller._id,seller.email)}
                        className="btn btn-sm btn-outline"
                      >
                        Verify
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
