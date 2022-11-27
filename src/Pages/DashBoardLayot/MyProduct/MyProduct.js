import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import axios from "axios";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const url = `http://localhost:5000/myproducts?email=${user?.email}`;
  const getProducts = () => {
    axios.get(url).then((res) => {
      console.log(res);
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
    fetch(`http://localhost:5000/myproducts/${id}`, {
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

  return (
    <div>
      <h3>My Products</h3>
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
                    <button className="btn btn-sm btn-outline btn-green-500 btn-xs">
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