import React from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';

const NewsPage = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            {/*  */}
            <div className='grid md:grid-cols-4'>
                <div className='md:col-span-3'>
                    <h2 className="text-4xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            news details
        </div>
    );
};

export default NewsPage;