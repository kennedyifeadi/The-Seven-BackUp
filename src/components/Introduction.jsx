import React from "react";
import MainPic from "../assets/main.png";
import { ArrowForward } from "@mui/icons-material";
import { ArrowRightAltSharp } from "@mui/icons-material";
import { ExploreSharp } from "@mui/icons-material";
const Main = () => {
  return (
    <div className="grid grid-cols-2 text-white justify-center items-center bg-custom-image bg-fixed bg-cover bg-center bg-no-repeat h-screen">
      <div className="mt-0 ml-24">
        <button className="rounded-full h-12 text-center ml-6 pl-8 pr-8 bg-[#2F8050] text-[1.5rem] text-green-300">
          Join next cohort <ArrowForward />
        </button>
        <div className="mt-12">
          <h1 className="text-[3.1rem]">
            Empowering Software Developers, <br />
            Transforming Businesses
          </h1>
          <br />
          <h4 className="text-[1.5rem] text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            recusandae suscipit atque neque veritatis illo libero ipsam vero
            mollitia eos.
          </h4>
        </div>

        <div className="flex mt-8">
          <button className="mr-6 bg-blue-900 px-10 h-[5.5rem] rounded-xl text-[1.5rem]">
            Create an account <ArrowRightAltSharp className="ml-4" />
          </button>
          <button className="bg-transparent border-solid border-white border-2 px-10 h-[5.5rem] text-[1.5rem] rounded-xl">
            Explore Courses <ExploreSharp className="ml-4" />
          </button>
        </div>
      </div>

      <div className="ml-64 mt-0">
        <img src={MainPic} alt="MainPic" className="w-[200rem]"/>
      </div>
    </div>
  );
};

export default Main;

