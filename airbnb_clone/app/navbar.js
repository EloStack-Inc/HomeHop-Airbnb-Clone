"use client";
import React from "react";
import Image from "next/image"; // Use next/image for optimized images
import logo from "./assets/logo-transparent.png";
import { GrLanguage } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white border-b flex items-center justify-between">
      {/* Left Side */}
      <div className="flex w-40">
        <Image src={logo} alt="HomeHop Logo" className="object-cover" />
      </div>
      {/* Middle */}
      <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full">
        <input
          type="search"
          placeholder=""
          className="py-2.5 w-[20rem] rounded-full outline-0"
        />
        <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
          <button className="w-full">Place</button>
          <button className="border-l border-x px-6">Time</button>
          <button className="w-full text-gray-600 pl-2">Group Size</button>
        </div>
        <div className=" bg-[#e56166] p-2 rounded-full mr-2">
          <IoSearchSharp className="text-white" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center pr-3 font-semibold text-gray-600">
        <p className="text-[17px]">Rent House</p>
        <div className="flex items-center mx-8 gap-1">
          <GrLanguage className="" />
          <div className="">EN</div>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            id="dropdownDefaultButton"
            className="flex items-center gap-2 border px-3 py-2 mx-5 rounded-full bg-[#e56166] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out"
          >
            <FiMenu className="text-[19px]" />
            <FaHouseChimneyUser className="text-[22px]" />
          </button>
          {isDropdownOpen && (
            <div
              id="dropdown"
              className="absolute mt-2 -ml-35 bg-white divide-y divide-gray-100 rounded-lg shadow w-full"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
