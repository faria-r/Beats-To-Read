import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const DashBoardPage = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="card w-96 mx-auto mt-16 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Hello {user.displayName}</h2>
    <p className='text-green-600 text-xl'>Explore Your Desired Information Here!</p>
    
  </div>
</div>
        </div>
    );
};

export default DashBoardPage;