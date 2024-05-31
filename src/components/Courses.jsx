import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

import webApplication from "../assets/webApplication.png";
import businessWebsite from "../assets/businessWebsites.png";
import uiux from "../assets/uiUx.png";
import frontEnd from "../assets/frontendDev.png";
import backEnd from "../assets/backendDev.png";
import fullstackDev from "../assets/fullstackDev.png";

export default function Courses() {
  return (
    <div className="grid grid-cols-1 bg-custom-image bg-fixed bg-cover bg-center bg-no-repeat h-screen">
      <Swiper
        spaceBetween={50}
        effect={"fade"}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="w-full h-full -mt-[15rem]"
      >
        <SwiperSlide className="grid grid-cols-2 justify-center items-center">
          <div className="ml-[24rem]">
            <img src={webApplication} alt="Web Applications" />
          </div>
          <div className="bg-gradient-to-br from-green-900 via-gray-700 via-65% to-green-900 to-95% rounded-xl w-[40rem] h-[31rem]">
            <h1 className="text-[3rem] ml-10 text-white mt-24">
              Web Applications
            </h1>
            <h3 className="text-white ml-10 mt-6 text-[1.4rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <br />
              Vero voluptate harum vitae eligendi quae deleniti <br /> nemo
              accusantium sequi ex commodi.
            </h3>
            <button className="mt-14 text-[1.5rem] font-bold ml-12 bg-gradient-to-br from-green-700 via-gray-700 via-65% to-green-700 to-95% text-white py-4 px-4 rounded-xl">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="grid grid-cols-2 justify-center items-center">
          <div className="ml-[24rem]">
            <img
              src={businessWebsite}
              alt="Business Websites"
              className="rounded-xl h-[31.5rem]"
            />
          </div>
          <div className=" bg-gradient-to-br from-green-800 via-gray-600 to-green-800 rounded-xl w-[40rem] h-[31.5rem]  ">
            <h1 className="text-[3rem] ml-10 text-white mt-24">
              Business Websites
            </h1>
            <h3 className="text-white ml-10 mt-6 text-[1.4rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              natus alias rerum vero perspiciatis repudiandae vitae ad unde,
              dolor officiis?
            </h3>
            <button className=" mt-24 text-[1.5rem] font-bold ml-12 bg-gradient-to-br from-green-700 via-gray-600 to-green-700 text-white py-4 px-4 rounded-xl">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="grid grid-cols-2 justify-center items-center">
          <div className="ml-[24rem]">
            <img src={uiux} alt="UI/UX" className="h-[32rem] rounded-xl" />
          </div>
          <div className="bg-gradient-to-br from-green-700 via-gray-700 to-green-700 rounded-xl w-[40rem] h-[32rem]">
            <h1 className="text-[3rem] text-white ml-8 mt-24">UI/UX</h1>
            <h3 className="text-white ml-10 mt-6 text-[1.4rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              magni eius sed temporibus laudantium necessitatibus vitae,
              doloremque quibusdam libero quam.
            </h3>
            <button className="mt-24 text-[1.5rem] font-bold ml-12 bg-gradient-to-br from-green-900 via-gray-800 via-65% to-green-900 to-95% text-white py-4 px-4 rounded-xl">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="grid grid-cols-2 justify-center items-center">
          <div className="ml-[24rem]">
            <img
              src={frontEnd}
              alt="Frontend"
              className="h-[32rem] rounded-xl"
            />
          </div>
          <div className="bg-gradient-to-br from-green-900 via-gray-700 via-65% to-green-800 to-95% rounded-xl w-[40rem] h-[32rem]">
            <h1 className="text-[3rem] ml-10 text-white mt-24">
              Frontend Development
            </h1>
            <h3 className="text-white ml-10 mt-6 text-[1.4rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              sapiente facere ad inventore saepe dolorum deleniti! In,
              assumenda! Explicabo, inventore!
            </h3>
            <button className="mt-24 text-[1.5rem] font-bold ml-12 bg-gradient-to-br from-green-600 via-gray-600 to-green-600 text-white py-4 px-4 rounded">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="grid grid-cols-2 justify-center items-center">
          <div className="ml-[24rem]">
            <img src={backEnd} alt="Backend" className="h-[32rem] rounded-xl" />
          </div>
          <div className=" bg-gradient-to-br from-green-800 via-gray-600 to-green-800 rounded-xl w-[40rem] h-[32rem]">
            <h1 className="text-[3rem] ml-10 text-white mt-24">
              Backend Development
            </h1>
            <h3 className="text-white ml-10 mt-6 text-[1.4rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates iusto commodi vel aut mollitia excepturi ab dignissimos
              voluptatum quisquam est.
            </h3>
            <button className="mt-24 text-[1.5rem] font-bold bg-gradient-to-br from-green-700 via-gray-600 to-green-700 ml-12 text-white py-4 px-4 rounded">
              Learn More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="grid grid-cols-2 justify-center items-center">
          <div className="ml-[24rem]">
            <img
              src={fullstackDev}
              alt="Fullstack"
              className="h-[32rem] rounded-xl"
            />
          </div>
          <div className="bg-gradient-to-br from-green-900 via-gray-700 via-65% to-green-900 to-95% rounded-xl w-[40rem] h-[32rem]">
            <h1 className="text-[3rem] ml-10 text-white mt-24">
              Fullstack Development
            </h1>
            <h3 className="text-white ml-10 mt-6 text-[1.4rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam id
              illo tenetur vitae natus mollitia iusto culpa amet deleniti
              aliquid.
            </h3>
            <button className="mt-24 text-[1.5rem] font-bold ml-12 bg-gradient-to-br from-green-700 via-gray-700 via-65% to-green-700 to-95% text-white py-4 px-4 rounded">
              Learn More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

