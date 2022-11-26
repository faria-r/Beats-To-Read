import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../customHooks/isAdmin/useAdmin';
import useBuyers from '../../../customHooks/useBuyers/useBuyers';
import useSeller from '../../../customHooks/UseSellers/useSeller';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const{user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyers(user?.email);
    const [isSeller] = useSeller(user?.email);
    console.log(isSeller)
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="drawer drawer-mobile bg-green-400 rounded-xl">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
<Outlet></Outlet>
  </div> 
  <div className="drawer-side bg-green-400 rounded shadow-2xl">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80  text-base-content">
    {
        isBuyer && 
        <>
         <li><Link to='/dashboard/myorders'>My Orders</Link></li>
        </>
      }
      {
         isSeller && 
         <>
          <li><Link to='/dashboard/myproduct '>My Product</Link></li>
          <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
         </>
      }
     
      {
        isAdmin && <>
         <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
         <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
        </>
       
      }
     
      
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;