import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://assignment-twelve-server-psi.vercel.app/categories")
      const data = res.json();
      return data;
    },
  });

  //logOut a user

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((e) => console.log(e));
  };
  return (
    <div className="w-3/4 mx-auto flex justify-around items-center">
      <div className="w-64 border border-green-600 py-3 px-8 my-2">
        <div className="dropdown ">
          <label tabIndex={0} className=" text-xl font-bold flex  items-center">
            <FaBars className="mr-4 text-green-600"></FaBars>
            <p className="text-green-600"> Categories</p>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-64 -ml-16 mt-4"
          >
            {categories &&
              categories.map((category) => (
                <Link
                  key={category._id}
                  className="text-xl font-bold text-green-600 my-4 "
                  to={`/categories/${category.CategoryName}`}
                >
                  {category.CategoryName} Books
                </Link>
              ))}
          </ul>
        </div>
      </div>
      <form>
      <div className=" hidden lg:flex items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input  border-green-600 rounded-none w-full max-w-xs"
        />
        <button className="btn bg-green-600  border-none rounded-none w-32 -ml-2">
          Search
        </button>
      </div>
      </form>
      

      <div>
        {user && user?.email ? (
          <>
            <div className="flex">
            <button onClick={handleLogOut}>
              <Link className="text-green-500 ml-2 text-xl font-bold italic">
                Logout
              </Link>
            </button>
            <Link to='/dashboard' className="text-green-500 text-xl ml-4 font-bold italic">
            Dashboard
            </Link>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-green-600 text-xl font-bold italic"
            >
              Login /
            </Link>
            <Link to='/register' className="text-green-500 text-xl font-bold italic">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
