import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-6xl mx-auto font-poppins'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;