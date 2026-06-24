import React from "react";
import brandImg from "../assets/brandLogo.png";
import CmnButton from "./CmnButton";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full py-6  bg-black text-white px-14 flex items-center justify-between">
      <div className="w-[180px]">
        <img src={brandImg} alt="" className="w-full ojbect" />
      </div>
      <ul className="flex">
        <li className="px-4 py-2">
          <a href="" className="font-medium text-base">Home</a>
        </li>
        <li className="px-4 py-2">
          <a href="" className="font-medium text-base">Recipes</a>
        </li>
        <li className="px-4 py-2">
          <a href="" className="font-medium text-base">Categories</a>
        </li>
        <li className="px-4 py-2">
          <a href="" className="font-medium text-base">Collections</a>
        </li>
        <li className="px-4 py-2">
          <a href="" className="font-medium text-base">Meal Planner</a>
        </li>
        <li className="px-4 py-2">
          <a href="" className="font-medium text-base">About</a>
        </li>
      </ul>
      <div className="flex gap-4">
        <CmnButton btnName="Log In" variant="dark" />
        <CmnButton btnName="Sign Up" variant="red" />
      </div>
    </div>
  );
};

export default Navbar;
