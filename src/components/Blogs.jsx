// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination } from "swiper/modules";

// import C1 from "../assets/JavaScript.png";
// import C2 from "../assets/HTML.png";
// import C3 from "../assets/CSS.png";
// import C4 from "../assets/Programmer.png";
// import C5 from "../assets/History.jpg";

// const Blogs = () => {
//   const slides = [
//     {
//       image: C1,
//       heading: "Did you know? (Javascript)",
//       statement:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque id perferendis quidem necessitatibus fugiat quod laborum error beatae explicabo?",
//     },
//     {
//       image: C2,
//       heading: "Did you know? (HTML)",
//       statement:
//         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//     },
//     {
//       image: C3,
//       heading: "Did you know? (CSS)",
//       statement:
//         "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
//     },
//     {
//       image: C4,
//       heading: "Habits of great programmers",
//       statement:
//         "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//     },
//     {
//       image: C5,
//       heading: "Programming Origins",
//       statement:
//         "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 grid-rows-2 bg-gradient-to-br from-green-900 via-gray-700 via-65% to-blue-800 to-95% bg-fixed bg-cover bg-center bg-no-repeat h-screen -mt-[10rem]">
//       <div className="text-center justify-center items-center mt-[13rem]">
//         <h1 className="text-[3rem] text-white">Latest Blogs</h1>
//       </div>
//       <div>
//         <Swiper
//           modules={[Pagination]}
//           spaceBetween={100}
//           slidesPerView={1}
//           pagination={{
//             clickable: true,
//           }}
//           className="-mt-[10rem]"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide
//               key={index}
//               virtualIndex={index}
//               className="grid grid-cols-1"
//             >
//               <div className="grid grid-cols-1 grid-rows-2 items-center justify-center text-center gap-24 bg-gradient-to-br from-green-700 via-gray-700 to-green-700 ml-[8rem] h-[40rem] w-[90rem] rounded-[2rem]">
//                 <div className="grid justify-center items-center">
//                   <img
//                     className="object-cover mt-[4rem] w-[40rem] h-[20rem] rounded-[2rem]"
//                     src={slide.image}
//                     alt={`Client ${index + 1}`}
//                   />
//                 </div>
//                 <div className="mb-[3rem]">
//                   <h1 className="text-[2rem] text-white text-center">
//                     {slide.heading}
//                   </h1>
//                   <h3 className="text-[1.4rem] text-white text-center">
//                     {slide.statement}
//                   </h3>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import C1 from "../assets/JavaScript.png";
import C2 from "../assets/HTML.png";
import C3 from "../assets/CSS.png";
import C4 from "../assets/Programmer.png";
import C5 from "../assets/History.jpg";

const Blogs = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      image: C1,
      heading: "Did you know? (Javascript)",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque id perferendis quidem necessitatibus fugiat quod laborum error beatae explicabo?",
    },
    {
      image: C2,
      heading: "Did you know? (HTML)",
      statement:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    },
    {
      image: C3,
      heading: "Did you know? (CSS)",
      statement:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
      image: C4,
      heading: "Habits of great programmers",
      statement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque id perferendis quidem necessitatibus fugiat quod laborum error beatae explicabo?",
    },
    {
      image: C5,
      heading: "Programming Origins",
      statement:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      direction: "horizontal",
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pAagination",
        clickable: true,
      },
      on: {
        init: function () {
          this.slides.forEach((slide) => {
            slide.style.height = "100%";
          });
        },
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 grid-rows-2 bg-gradient-to-br from-green-600 via-gray-700 to-blue-600 bg-fixed bg-cover bg-center bg-no-repeat h-screen -mt-[1rem]">
      <div className="text-center justify-center items-center mt-[5rem]">
        <h1 className="text-[4rem] text-white">Latest Blogs</h1>
      </div>
      <div ref={swiperRef} className="swiper-container -mt-[15rem]">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <div className="grid grid-cols-1 grid-rows-2 items-center justify-center text-center gap-32 bg-gradient-to-br from-green-700 via-gray-700 to-green-700 ml-[8rem] h-[40rem] w-[45rem] rounded-[2rem]">
                <div className="grid justify-center items-center">
                  <img
                    className="object-cover mt-[12rem] w-[40rem] h-[25rem] rounded-[2rem]"
                    src={slide.image}
                    alt={`Client ${index + 1}`}
                  />
                </div>
                <div className="mt-8">
                  <h1 className="text-[2rem] text-white justify-center items-center text-center">
                    {slide.heading}
                  </h1>
                  <h3 className="text-[1.5rem] text-white mt-2 justify-center items-center text-center">
                    {slide.statement}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
