import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const errors = useRouteError();
    return (
        <div>
            <h3 className='text-center text-4xl text-red-600'>{errors.statusText || errors.message}</h3>
        </div>
    );
};

export default DisplayError;