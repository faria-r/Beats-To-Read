import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../customHooks/Token/useToken";

const Register = () => {
  const { handleSubmit, register } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token, setToken] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }
  const handelregister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        console.log(userInfo);
        //update user
        updateUserProfile(userInfo)
          .then(() => {
            storeUsers(data.name, data.email, data.role);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  const storeUsers = (name, email, role) => {
    const user = { name, email, role };

    fetch("https://assignment-twelve-server-psi.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };
  return (
    <div className="h-[800px]  flex justify-center mt-16 ">
      <div className="w-96 h-[400px] border rounded-2xl bg-green-300  px-7">
        <h2 className="text-xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handelregister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: "email address is required" })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "email address is required" })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "passoword is required",
                minLength: {
                  value: 6,
                  message: "password must be six characters longer",
                },
              })}
            />
          </div>
          <div className="form-control my-2 w-full max-w-xs">
            <select
              {...register("role", { required: "role is required" })}
              className="select border select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Buyer
              </option>
              <option>Seller</option>
              <option>Buyer</option>
            </select>
          </div>
          <input
            className="btn bg-green-600 my-2 w-full text-white"
            value="SignUp"
            type="submit"
          />
          <div></div>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-primary" to="/login">
            please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
