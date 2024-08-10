import user from "../assets/user_substitue.jpg";
import React from "react";
import Image from "next/image"; // Use next/image for optimized images
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiEdit2 } from 'react-icons/fi';

export default function ProfileCard() {
  return (
    <div className="bg-white border-b flex">
      <div className="flex-col items-center justify-center mx-5">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5 border-2 border-gray">
          <div className="flex items-center px-6 py-4">
            <div className="relative overflow-hidden">
              <Image
                src={user}
                alt="Profile picture"
                layout="intrinsic"
                objectFit="cover"
                className="h-auto w-32 rounded-full border-2"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-600">Guest</p>
            </div>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-sm">
              Hi! I'm John Doe. Nice to meet you. I am hoping to find awesome
              rentals :)
            </p>
            <button className="ml-auto hover:bg-gray-50 text-gray-800 mb-6 flex rounded">
                <FiEdit2 className="mr-2 my-2" />
            </button>
          </div>
        </div>
        <div className="max-w-sm mx-auto shadow-lg rounded-lg my-10 border-2 border-gray">
            <div className="py-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800 text-center">John's Confirmed Information</h2>
                <div className="flex items-center justify-center gap-1 mt-5">
                    <IoMdCheckmarkCircleOutline className="text-gray-600 text-xl" />
                    <p className="text-gray-600">Email Address</p>
                </div>
            </div>
            <div className="border-t border-gray-400 w-5/6 mx-auto"></div>
            <div className="px-6 py-4 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-gray-800 text-center my-2">Verify Your Identity</h2>
                <p className="text-gray-600 text-center my-2">Before you book or host on Homehop, you'll need to be verified</p>
                <button className="justify-center items-center border border-gray-300 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded mt-4">Verify</button>
            </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto p-6 my-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">About John</h3>
        <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded mb-6 flex items-center">
        <FiEdit2 className="mr-2" /> Edit profile
      </button>
      </div>
    </div>
  );
}
