import React from "react";

const Statement = () => {
  return (
    <div className="grid grid-cols-2 gap-64 bg-gradient-to-r from-green-800 via-gray-700 via-65% to-blue-900 to-95% bg-fixed bg-cover bg-center bg-no-repeat pt-16">
      <div className="inset-0  z-20 mt-[16rem] ml-24">
        <h1 className="text-[4rem] text-green-500">VISION STATEMENT</h1> <br />
        <h3 className="text-white text-[2rem]">
          To become the foremost destination for Software development training
          in <br />
          Nigeria, renowned for our commitment to excellence, innovation and{" "}
          <br />
          community collaboration
        </h3>
      </div>
      <div className="mt-[32rem] z-10 mr-32" dir="rtl">
        <h1 className="text-[4rem] text-yellow-600">MISSION STATEMENT</h1>{" "}
        <br />
        <h3 className="text-white text-[2rem] ">
          Empowering software developers and transforming businesses through{" "}
          <br />
          industry-leading training progeams, cutting-edge software development{" "}
          <br />
          services and a vibrant community of tech enthusiasts <br />
        </h3>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Statement;
