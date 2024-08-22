import React, { useEffect } from "react";
import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    window.location.href = "/login";
  };

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (!user) {
      window.location.href = "/login";
    }

    setUser(JSON.parse(user));
  }, []);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            E <span className="font-bold text-red-700">Computers</span>
          </h1>
        </Link>
      </div>
      {/* search bar */}
      <div className="bg-gray-200 rounded-full items-center flex px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          type="text"
          placeholder="Search Foods"
          className="bg-transparent p-2 w-full
            focus:outline-none "
        ></input>
      </div>
      {/* cart button */}

      <div className=" flex gap-5">
        <Link to="/cart">
          <button className="bg-black text-white rounded-full boder border-black  px-5  md:flex hidden py-2 hover:scale-105 duration-300">
            <BsFillCartFill size={20} className="mr-2" />{" "}
            <p className="text-yellow-300 font-bold capitalize">cart</p>
          </button>
        </Link>

        <div className="flex items-center gap-2 p-1 px-4 text-blue-500 hover:cursor-pointer border rounded-lg hover:scale-105 duration-300">
          <FaUserCircle size={20} />
          <div>
            <h1 className="font-semibold">{user ? user?.username : "user"}</h1>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="p-2  flex gap-2 text-blue-600  hover:rounded-lg border hover:scale-105 duration-300 border-white shadow-sm bg-red-700 rounded-lg cursor-pointer items-center"
        >
          <RiLogoutBoxLine size={20} className="text-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 z-10 h-screen w-full fixed top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "bg-white h-screen fixed top-0 left-0 z-10 duration-600 w-[300px]"
            : "bg-white h-screen fixed top-0 left-[-100%] z-10 duration-300 w-[300px]"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex py-4 text-xl">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="flex py-4 text-xl">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="flex py-4 text-xl">
              <FaWallet size={25} className="mr-4" /> Walet
            </li>
            <li className="flex py-4 text-xl">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex py-4 text-xl">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex py-4 text-xl">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="flex py-4 text-xl">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
