'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Import Swiper Pagination styles
import { LeftIcon, RigthIcon } from '@/app/common/icon/icon';
import { movieData } from '../../Halper/page';

const { featuredData } = movieData;

export default function FeaturedTodaySlider() {
  return (
    <section className="bg-black text-white overflow-hidden py-8 px-4 lg:mt-[90px] relative">
      <div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Text Section */}
          <div className="space-y-4 px-[6%]">
            <div className="max-w-[1140px] mx-auto px-5">
              <h2 className="text-[20px] sm:text-[30px] lg:text-[36px] font-semibold pt-4 lg:pt-16">
                Featured
                <span className="bg-gradient-to-br ps-2 from-[#F2CD75] to-[#A97424] bg-clip-text text-transparent">
                  today
                </span>
              </h2>

              <p className="md:text-base text-sm text-white/70 pt-3 md:pt-[16px]">
                Amet suscipit risus nulla libero porta purus id rhoncus emper faucibus risus cursus
                dibero ipsum tempus rhoncus dignissi massa cursus tortor.
              </p>

              <div className="flex gap-4 md:pt-[40px] pt-5">
                <button className="custom-prev cursor-pointer w-10 h-10 rotate-180 rounded-full p-[1px] bg-transparent border border-[#F2CD75] active:border-[#A97424] transition-all duration-200 lg:block">
                  <div className="w-full h-full flex items-center justify-center hover:bg-[#F2CD75] active:bg-[#A97424] rounded-full">
                    <LeftIcon className="w-4 h-4 text-black" />
                  </div>
                </button>
                <button className="custom-next cursor-pointer w-10 h-10 rounded-full p-[1px] bg-transparent border border-[#F2CD75] active:border-[#A97424] transition-all duration-200 lg:block">
                  <div className="w-full h-full flex items-center justify-center hover:bg-[#F2CD75] active:bg-[#A97424] rounded-full">
                    <RigthIcon className="w-4 h-4 text-black" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="lg:w-3/4 w-full">
            <Swiper
              spaceBetween={10} // Reduced space for compactness
              slidesPerView={2.4}
              navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }} // Auto play enabled
              pagination={{
                clickable: true, // Makes dots clickable
                el: '.swiper-pagination', // Custom pagination container
                type: 'bullets', // Use bullet dots
                dynamicBullets: true, // Make bullets dynamic (changing size)
              }}
              modules={[Navigation, Pagination]} // Add Pagination module
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1900: { slidesPerView: 5 }, // Adjusted for larger screens
              }}>
              {featuredData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[220px] sm:h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-md hover:scale-[1.02] transition-all duration-300">
                    {/* Background Image */}
                    <Image src={item.img} alt="Movie" fill className="object-cover" />

                    {/* Overlay */}
                    <div className="absolute inset-0 z-10" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 z-20 p-4 w-full text-white">
                      <h3 className="text-base font-normal pt-3">{item.title}</h3>
                      <p className="text-sm text-white/70 pt-2">{item.subtitle}</p>
                      <div className="mt-2 flex gap-2 pt-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Image
                            key={i}
                            src={item.rating}
                            alt={`Star ${i + 1}`}
                            width={24}
                            height={24}
                            className="rounded-md"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="swiper-pagination absolute bottom-[-30px] left-0 right-0 flex justify-center hidden lg:flex"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5%] hidden lg:flex">
        <Image
          src="/image/png/XMLID_2_.png"
          alt="Logo"
          width={59.23296738789483}
          height={66.9352340824646}
        />
      </div>
    </section>
  );
}
