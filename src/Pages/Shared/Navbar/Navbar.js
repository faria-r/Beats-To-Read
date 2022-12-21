import React from "react";
import { FaCartPlus, FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full mx-auto bg-base-200">
      <div className="navbar bg-base-200">
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
              <li> <FaCartPlus className="text-green-600"></FaCartPlus> ji</li>
             
            </ul>
          </div>
          <div className="w-64">
            <Link className=" normal-case text-2xl lg:text-4xl text-green-600 font-bold">
              Beats To Read
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
            <Link> <FaCartPlus className="text-3xl font-normal text-green-600 ml-6"></FaCartPlus><div className="badge badge-sm relative -top-9 left-9 bg-green-600 h-4 w-4 rounded-50">4</div> </Link>
             
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
