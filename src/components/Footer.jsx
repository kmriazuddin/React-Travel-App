import React from "react";
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full bg-gray-100 py-10">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4">
                <div className="sm:flex text-center justify-between items-center">
                    <h1>Hello Travel</h1>
                    <div className="flex justify-between w-full sm:max-w-[280px] my-4">
                        <FaFacebook className="icon" />
                        <FaTwitter className="icon" />
                        <FaYoutube className="icon" />
                        <FaInstagram className="icon" />
                        <FaPinterest className="icon" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <ul className="lg:flex">
                        <li>About</li>
                        <li>Partnership</li>
                        <li>Careers</li>
                        <li>NewsRoom</li>
                        <li>Advertising</li>
                    </ul>
                    <ul className="text-right lg:flex">
                        <li>Home</li>
                        <li>Destination</li>
                        <li>Travel</li>
                        <li>View</li>
                        <li>Book</li>
                    </ul>
                </div>
                <p className="text-center mt-10">Copyright &#169; 2023 Hello Travel, Bangladesh. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;