import React, {useState} from "react";
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    };
  return (
    <div className="w-full flex justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
      <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'} >Hello Travel.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      
      <div className="hidden md:flex gap-5">
        <BiSearch size={25} />
        <BsPerson size={25} />
      </div>

      <div onClick={handleNav} className="md:hidden z-10 cursor-pointer">
        {nav ? <AiOutlineClose className="text-black" size={30} /> : <HiOutlineMenuAlt4 size={30} />}
      </div>

      <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
            <h1>Hello Travel.</h1>
            <li className="border-b">Home</li>
            <li className="border-b">Destination</li>
            <li className="border-b">Travel</li>
            <li className="border-b">View</li>
            <li className="border-b">Book</li>
        </ul>
        <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
        </div>
        <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
