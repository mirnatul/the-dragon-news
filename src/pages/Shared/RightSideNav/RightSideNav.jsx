import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/playground.png'
import qZone2 from '../../../assets/swimming.png'
import qZone3 from '../../../assets/class.png'


const RightSideNav = () => {
    return (
        <div className='border'>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-3xl font-semibold'>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className='text-3xl font-semibold'>Find Us On</h2>
                <a className='p-3 flex items-center gap-3 text-lg border rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className='p-3 flex items-center gap-3 text-lg border-x' href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className='p-3 flex items-center gap-3 text-lg border rounded-b-lg' href="">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* Q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-3xl font-semibold'>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;