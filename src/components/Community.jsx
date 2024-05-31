import React from "react";
import CommunityPic from "../assets/community.png";

const Community = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-gradient-to-r from-green-800 via-gray-700 via-65% to-blue-900 to-95% bg-fixed bg-cover bg-center bg-no-repeat h-[35rem] text-white">
      <div className=" mr-[15rem]">
        <h1 className="text-[3rem]">
          Join the <br /> Community
        </h1>
        <h3 className="text-[1.5rem] max-w-[45rem] mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt,
          est quae porro expedita pariatur maxime provident! Aut, nobis
          recusandae?
        </h3>
        <button className="bg-gradient-to-br from-green-700 via-gray-600 to-blue-700 mt-16 w-[12rem] text-center h-[4rem] text-[1.9rem] rounded-[0.9rem]">Join</button>
      </div>
      <div className="ml-[2rem]">
        <img src={CommunityPic} alt="Community Picture" className="w-[40rem]" />
      </div>
    </div>
  );
};

export default Community;
