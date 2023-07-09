import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Header from "../Header/Header";

const Navbar = () => {
  const {user} = useContext(AuthContext);
  const {data: orders=[]} = useQuery({
    queryKey:['orders'],
    queryFn:async ()=>{
      const res = await fetch(`https://assignment-twelve-server-psi.vercel.app/orders?email=${user?.email}`)
      const data = res.json();
      return data;
    }

  })
  return (
    <div className="w-full mx-auto bg-green-300 p-4">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                to="/"
                className="mr-4 text-green-600 font-semibold text-xl"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className=" text-green-600 font-semibold text-xl"
              >
                Blog
              </Link>
              <Link> <FaCartPlus className="text-3xl font-normal text-green-600 ml-6"></FaCartPlus><div className="badge badge-sm relative -top-9  bg-green-600 h-4 w-4 rounded-50">{orders?.length}</div> </Link>   
            </ul>
          </div>
          <div className="w-64">
            <Link className=" normal-case text-2xl lg:text-4xl text-green-600 font-bold">
              Book Bin
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link to="/" className="mr-4 text-green-600 font-semibold text-xl">
              Home
            </Link>
            <Link to="/blog" className="text-green-600 font-semibold text-xl">
              Blog
            </Link>
            <Link> <FaCartPlus className="text-3xl font-normal text-green-800 ml-6"></FaCartPlus><div className="badge badge-sm relative -top-9 left-9 bg-green-600 text-white h-4 w-4 rounded-50 border-white">{orders?.length}</div> </Link>
             
          </ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={0}
          className="btn btn-ghost ml-36 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
