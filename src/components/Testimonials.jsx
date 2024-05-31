import React from "react";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";

import C1 from "../assets/carousel1.png";
import C2 from "../assets/carousel2.png";
import C3 from "../assets/carousel3.png";
import C4 from "../assets/carousel4.png";

const Testimonials = () => {
  const slides = [
    {
      image: C1,
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque id perferendis quidem necessitatibus fugiat quod laborum error beatae explicabo?",
      name: "Client/student Name 1",
      position: "Position/Occupation 1",
    },
    {
      image: C2,
      testimonial:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      name: "Client/student Name 2",
      position: "Position/Occupation 2",
    },
    {
      image: C3,
      testimonial:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
      name: "Client/student Name 3",
      position: "Position/Occupation 3",
    },
    {
      image: C4,
      testimonial:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      name: "Client/student Name 4",
      position: "Position/Occupation 4",
    },
  ];

  return (
    <div className="grid grid-cols-1 grid-rows-2 bg-gradient-to-br from-green-900 via-gray-700 via-65% to-blue-800 to-95% bg-fixed bg-cover bg-center bg-no-repeat h-screen -mt-[10rem]">
      <div className="text-center justify-center items-center mt-[13rem]">
        <h1 className="text-[3rem] text-white">Testimonials</h1>
        <h3 className="text-[1.8rem] text-green-300">
          Attestations from our past students and clients
        </h3>
      </div>
      <div>
        <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={1} virtual>
          {slides.map((slide, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className="flex flex-row items-center justify-center h-full space-y-4 text-center gap-24">
                <div className="max-w-[50rem]">
                  <h2 className="text-[1.4rem] text-white">{slide.testimonial}</h2><br />
                  <h1 className="text-[2rem] text-white">{slide.name}</h1><br />
                  <h3 className="text-[1.4rem] text-white">
                    {slide.position}
                  </h3>
                </div>
                <div >
                  <img
                    className="w-[15rem] h-auto object-cover"
                    src={slide.image}
                    alt={`Client ${index + 1}`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
