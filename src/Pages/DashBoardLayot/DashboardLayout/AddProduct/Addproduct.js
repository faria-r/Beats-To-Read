import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Context/AuthProvider";

const Addproduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
    const imageHostKey = process.env.REACT_APP_imagebb_APIkey;
    console.log(imageHostKey);

  const handleAdd = (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(data);
        if (imgData.success) {
          const productData = {
            CategoryName: data.category,
            name: data.product,
            resalePrice: data.sale,
            condition: data.condition,
            mobileNo: data.mobile,
            location: data.location,
            about: data.description,
            originalPrice: data.originalPrice,
            purchaseYear: data.purchaseYear,
            useDuration: data.duration,
            seller: data.seller,
            image: imgData.data.url,
            email: data.email,
            date: data.date,
          };
          console.log(productData);
          fetch("https://assignment-twelve-server-psi.vercel.app/books", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productData),
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire("Congrats!", "Your Product Has Been Added!", "success");
              navigate("/dashboard/myproduct");
            });
        }
      });
  };

  return (
    <div className="h-auto w-[700px] shadow-2xl p-5 mx-auto  flex justify-center mt-16">
      <div className="w-[650px] mx-auto h-[650px] py-3 border rounded-2xl bg-green-300  px-7">
        <h3 className="text-green-800 font-semibold text-2xl my-3">
          Add a product
        </h3>
        <form onSubmit={handleSubmit(handleAdd)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Peroduct Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("product", {
                  required: "product name is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Sale Price</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("sale", {
                  required: "Sale price is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Condition</span>
              </label>
              <select
                {...register("condition")}
                className="input input-bordered w-full max-w-xs"
              >
                <option value="Excellent" selected>
                  Excellent
                </option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Mobile No.</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("mobile", {
                  required: "mobile No. is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("location", {
                  required: "location  is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category")}
                className="input input-bordered w-full max-w-xs"
              >
                <option value="Classics" selected>
                  Classics
                </option>
                <option value="Adventure">Adventure</option>
                <option value="Fiction">Fiction</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("description", {
                  required: "description is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("originalPrice", {
                  required: "Original Price is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Purchase Year</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("purchaseYear", {
                  required: "purchase Year is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("duration", {
                  required: "Duration is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="File"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: "image is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("seller", {
                  required: "Seller Name is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: "email is required",
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
                {...register("date", {
                  required: "Date is required",
                })}
              />
            </div>
          </div>
          <input
            className="btn bg-green-600 my-2 w-64 my-3 text-white"
            value="Add"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
