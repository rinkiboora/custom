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
  const { favoritesMovies } = movieData;

  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-5 lg:pt-[80px]"
      style={{ backgroundImage: `url('/image/png/bg show.png')` }}>
      <h2 className="font-semibold text-[20px] sm:text-[30px] lg:text-[40px] lg:pb-[50px] text-center lg:pt-[120px]">
        Fan
        <span className="bg-gradient-to-br ps-2 from-[#F2CD75] to-[#A97424] bg-clip-text text-transparent">
          favorites
        </span>
      </h2>

      <div className="relative px-4 py-10">
        {/* Swiper Container with Buttons */}
        <div className="relative max-w-[1140px] mx-auto">
          {/* Navigation Buttons */}
          <button className="custom-prev cursor-pointer hidden lg:flex absolute -left-[6%] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rotate-180 rounded-full border border-[#F2CD75] active:border-[#A97424] bg-white/10 hover:bg-[#F2CD75]/20 transition-all duration-200">
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <LeftIcon className="w-5 h-5 text-black" />
            </div>
          </button>
          <button className="custom-next cursor-pointer hidden lg:flex absolute -right-[6%] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-[#F2CD75] active:border-[#A97424] bg-white/10 hover:bg-[#F2CD75]/20 transition-all duration-200">
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
              559: { slidesPerView: 2.1 },
              607: { slidesPerView: 2.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper">
            {favoritesMovies.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] overflow-hidden gap-3 rounded-xl border border-white/25 backdrop-blur-[20px] bg-gradient-to-br from-[#F2CD75]/20 to-[#A97424]/ ">
                  {/* Image with Border and Padding */}
                  <div className="relative w-full h-full p-2 gap-2">
                    <Image
                      src={item.img}
                      alt={`Blog image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-b p-2 flex flex-col justify-end text-white">
                    <h2 className="font-semibold text-sm lg:text-base mb-2">{item.text}</h2>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm md:text-base text-white/80">{item.you}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Image
                            key={i}
                            src={item.icon}
                            alt={`Star ${i + 1}`}
                            width={20}
                            height={20}
                          />
                        ))}
                      </div>
                    </div>
                    <div className=" absolute top-[5%] right-[10%]">{item.redicon}</div>
                    <div className="flex justify-between gap-3 pb-1">
                      <div className="cursor-pointer px-[26px] py-[10px] rounded-md bg-gradient-to-br from-[#F2CD75] to-[#A97424] text-white font-semibold text-sm md:text-base">
                        Watchlist
                      </div>
                      <button
                        className="px-[26px] cursor-pointer py-[10px] rounded-md font-semibold text-sm md:text-base text-white border"
                        style={{
                          borderImage: 'linear-gradient(135deg, #F2CD75 0%, #A97424 100%)',
                          borderImageSlice: 1,
                        }}>
                        Trailer
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination (only for lg) */}
          <div className="lg:flex justify-center mt-5 hidden">
            <div className="swiper-pagination !relative bottom-[-30px]" />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Image */}
      <div className="absolute bottom-0">
        <Image src="/image/png/XMLID_2_.png" alt="Logo" width={59.23} height={66.93} />
      </div>
    </div>
  );
}
