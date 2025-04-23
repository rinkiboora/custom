'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { movieData } from '../../Halper/page';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { LeftIcon, RigthIcon } from '@/app/common/icon/icon';

export default function NewsSlider() {
  const router = useRouter();
  const { favoritesMovies2 } = movieData;

  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-5 lg:pt-[80px]"
      style={{ backgroundImage: `url('/image/png/bg show.png')` }}>
      <h2 className="font-semibold text-[20px] sm:text-[30px] lg:text-[40px] pb-[50px] text-center lg:pt-[120px] pt-[10%]">
        Recently
        <span className="bg-gradient-to-br ps-2 from-[#F2CD75] to-[#A97424] bg-clip-text text-transparent">
          Viewed
        </span>
      </h2>

      <div className="relative px-4 py-10">
        {/* Swiper Container with Buttons */}
        <div className="relative max-w-[1140px] mx-auto">
          {/* Navigation Buttons */}
          <button className="custom-prev cursor-pointer hidden lg:flex absolute left-[-4rem] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rotate-180 rounded-full border border-[#F2CD75] active:border-[#A97424] bg-white/10 hover:bg-[#F2CD75]/20 transition-all duration-200">
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <LeftIcon className="w-5 h-5 text-black" />
            </div>
          </button>
          <button className="custom-next cursor-pointer hidden lg:flex absolute right-[-4rem] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-[#F2CD75] active:border-[#A97424] bg-white/10 hover:bg-[#F2CD75]/20 transition-all duration-200">
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <RigthIcon className="w-5 h-5 text-black" />
            </div>
          </button>

          {/* Swiper */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper">
            {favoritesMovies2.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] overflow-hidden gap-3 rounded-xl border border-white/25 backdrop-blur-[20px] bg-gradient-to-br from-[#F2CD75]/20 to-[#A97424]/20">
                  <Image
                    src={item.img}
                    alt={`Blog image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-b p-2 flex flex-col justify-end text-white">
                    <h2 className="font-semibold text-lg lg:text-base mb-2">{item.text}</h2>
                    <div className="flex items-center justify-between ">
                      <p className="text-sm md:text-base text-white/80">{item.you}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination for mobile */}
        <div className="flex justify-center mt-5 md:hidden">
          <div className="swiper-pagination !relative bottom-[-30px]" />
        </div>

        {/* View All Button */}
        <div className="mt-6 text-center">
          <button className="text-white px-4 py-3 cursor-pointer rounded-md text-sm font-semibold bg-gradient-to-br from-[#F2CD75] to-[#A97424] hover:scale-105 transition-transform duration-300 shadow-md">
            All Viewed
          </button>
        </div>
      </div>

      {/* Bottom Decorative Image */}
      <div className="absolute top-[20%] hidden lg:flex">
        <Image src="/image/png/XMLID_37_.png" alt="Logo" width={130} height={130} />
      </div>
    </div>
  );
}
