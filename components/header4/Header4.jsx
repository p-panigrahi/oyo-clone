"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 p-1">
      <div className="flex items-center">
        <Image
          src={"/fire.jpg"}
          width={200}
          height={200}
          className="w-20 h-20 rounded-full mr-5"
        />
        <div className="text-lg">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex mr-5">
        <input
          type="email"
          className="px-7 py-3 outline-none rounded-lg border border-gray-300 mr-5"
          placeholder="Enter Your Email"
        />
        <button type="submit" className="w-24 h-14 bg-red-500 text-xl text-white cursor-pointer rounded-lg">Notify</button>
      </div>
    </div>
  );
};

export default Header4;
