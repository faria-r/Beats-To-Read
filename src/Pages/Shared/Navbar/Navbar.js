import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaCartPlus, FaHeadphones,} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";


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
    <div className="w-full mx-auto bg-white p-2">
      <div className="navbar mx-auto">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              <Link
                to="/"
                className="ml-1 text-green-600 font-semibold text-xs"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className=" text-green-600 font-semibold text-xs"
              >
                Blog
              </Link>
              <Link
                to="/"
                className=" text-green-600 font-semibold text-xs"
              >
                Contact
              </Link>
              <Link> <FaCartPlus className="text-3xl font-normal text-green-600 mt-4  ml-12"></FaCartPlus><div className="badge badge-sm relative -top-10 -left-3  bg-green-600 h-4 w-4 rounded-50">{orders?.length}</div> </Link>   
            </ul>
          </div>
          <div className=" lg:ml-[250px] w-64 ">
            <Link className=" normal-case text-xl lg:text-3xl text-green-600 font-bold">
              Book Bin
            </Link>
          </div>
          <div  className="ml-8 w-64 flex justify-between items-center">
            <div> <FaHeadphones className="text-3xl text-green-600 mr-2" /></div>
            <div >
              <p>Free Support 24/7</p>
              <p>+01-202-555-0181</p>
            </div>
         
          </div>
         
        </div>
        <div className="navbar-center ml-32 pt-6 hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
            <Link to="/" className="mr-4 text-green-600 font-semibold text-xs">
              Home
            </Link>
            <Link to="/blog" className="text-green-600 font-semibold text-xs mr-2">
              Blog
            </Link>
            <Link to="/" className="text-green-600 font-semibold text-xs">
              Contact
            </Link>
            <Link> <FaCartPlus className="text-xl font-normal text-green-800 ml-6"></FaCartPlus><div className="badge badge-sm relative -top-9 lg:left-7 bg-green-600 text-white h-4 w-4 rounded-50 border-white">{orders?.length}</div> </Link>
             
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
