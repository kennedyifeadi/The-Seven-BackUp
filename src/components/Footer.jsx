import { Copyright } from "@mui/icons-material";
import React from "react";
import { RiCopyrightFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="grid grid-rows-2 bg-gradient-to-br from-green-900 via-gray-700 via-65% to-blue-800 to-95% bg-fixed bg-cover bg-center bg-no-repeat h-[25rem] justify-center items-center">
      <div className="flex flex-row justify-center items-center gap-[10rem] text-white text-[1.8rem] cursor-pointer mt-16 ">
        <h1 className="hover:text-yellow-600">Copyright information</h1>
        <h1 className="hover:text-yellow-600">Privacy policy</h1>
        <h1 className="hover:text-yellow-600">Terms of service</h1>
      </div>
      <div className="grid grid-rows-1 text-white justify-center items-center text-center">
        <div className="grid grid-rows-1 justify-center items-center w-[75rem] leading-8">
          <p className="text-[1.6rem]">
            Copyright <Copyright /> 2024, TheSeven
          </p>
          <h3 className="mt-2 text-[1.15rem]">
            All rights reserved. This website and its contents are protected by
            copyright law and may not be reproduced, distributed or transmitted
            in any form or by any means without the prior written permission of
            the company. Unauthorized production, redistribution or transmission
            of this website or any portion thereof, may result in severe civil
            and criminal penalties, and will be prosecuted to the maximum extent
            possible under law.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;

