import { AccountCircleSharp, LoginSharp } from "@mui/icons-material";
import React from "react";
const Nav = () => {
  return (
    <div className="bg-custom-image bg-fixed bg-cover bg-center bg-no-repeat h-16">
      <div className="grid grid-cols-3 gap-24 bg-inherit h-16 items-center pt-8">
        <div className="text-[2.5rem] text-white ml-[5rem] ">
          <h1>TheSeven</h1>
        </div>

        <div className="grid grid-cols-4 text-white text-[2rem] list-none justify-center items-center gap-48 spaxe-between cursor-pointer mr-48">
          <li className="hover:text-yellow-600 w-32 text-center">
            Home
          </li>
          <li className="hover:text-yellow-600 w-32 text-center">
            About
          </li>
          <li className="hover:text-yellow-600 w-40 text-center">
            Services
          </li>
          <li className="hover:text-yellow-600 w-56 text-center">
            Community
          </li>
        </div>
        <div className="grid grid-cols-2 ml-32 text-[1.5rem] text-white">
          <button className="bg-inherit border-solid border-2 border-white w-[10rem] h-12 rounded-xl text-center">
            Login <LoginSharp />
          </button>
          <button className="border-solid bg-blue-700 w-[10rem] h-12 rounded-xl text-center">
            Signup <AccountCircleSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
