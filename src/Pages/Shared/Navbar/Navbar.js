import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div className="navbar bg-base-100">
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
              <Link to="/" className=" text-green-600 font-semibold text-xl">
                Blog
              </Link>
            </ul>
          </div>
         <div className="w-64">
         <Link className=" normal-case text-4xl text-green-600 font-bold">
            Beats To Read
          </Link>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <Link to="/" className="mr-4 text-green-600 font-semibold text-xl">
              Home
            </Link>
            <Link to="/" className="text-green-600 font-semibold text-xl">
              Blog
            </Link>
          </ul>
        </div>
      
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
