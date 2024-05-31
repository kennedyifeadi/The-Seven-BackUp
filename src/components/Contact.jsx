import React from "react";
import { Article, Business, ConnectWithoutContact, ContactPage, ContactSupport, Group, Info, LinkSharp, LinkedIn, Mail, PhoneIphone, Subject, Twitter } from "@mui/icons-material";
const Contact = () => {
  return (
    <div className="flex flex-row gap-[15rem] justify-center items-center bg-gradient-to-r from-green-800 via-gray-700 via-65% to-blue-900 to-95% bg-fixed bg-cover bg-center bg-no-repeat text-white list-none text-center pt-20">
      <div className="mb-[6rem]">
        <h2 className="text-[1.8rem]"><LinkSharp/> Quick Links</h2>
        <div className="flex flex-row gap-10 text-center justify-center items-center">
          <div>
            <li className="text-[1.2rem] cursor-pointer mt-2 hover:text-yellow-400">
              <Info/> About Us
            </li>
            <li className="text-[1.2rem] cursor-pointer mt-2 hover:text-yellow-400">
              <Subject/> Training Programs
            </li>
          </div>
          <div>
            <li className="text-[1.2rem] cursor-pointer mt-2 hover:text-yellow-400">
              <Business/> Services
            </li>
            <li className="text-[1.2rem] cursor-pointer mt-2 hover:text-yellow-400">
              <Group/> Community
            </li>
          </div>
          <div>
            <li className="text-[1.2rem] cursor-pointer mb-8 hover:text-yellow-400">
              <Article/> Blog posts
            </li>
          </div>
        </div>
      </div>
      <div className="mb-[7rem]">
        <h2 className="text-[1.8rem]"><ContactSupport/> Contact Us</h2>
        <li className="text-[1.2rem] cursor-pointer mt-2 hover:text-yellow-400">
        <PhoneIphone /> Phone: +234-XXX-XXXXXXX
        </li>{" "}
        <li className="text-[1.2rem] cursor-pointer mt-2 hover:text-yellow-400">
        <Mail/> Email: theseven765@gmail.com
        </li>
      </div>
      <div className="mb-[7rem]">
        <h2 className="text-[1.8rem]"><ConnectWithoutContact/> Social Media</h2>
        <li className="text-[1.2rem] cursor-pointer mt-2 hover:text-yellow-400">
          <Twitter/> Twitter
        </li>
        <li className="text-[1.2rem] cursor-pointer mt-2 hover:text-yellow-400">
          <LinkedIn/> LinkedIn
        </li>
      </div>
    </div>
  );
};

export default Contact;
