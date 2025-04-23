'use client';

import React, { useEffect } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftIcon, RigthIcon } from '@/app/common/icon/icon';
import { movieData } from '../../Halper/page';

const Page = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('slick-carousel');

      $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2500,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              autoplay: true,
              autoplaySpeed: 2000,
            },
          },
        ],
      });

      $('.custom-prev').click(() => $('.responsive').slick('slickPrev'));
      $('.custom-next').click(() => $('.responsive').slick('slickNext'));
    }
  }, []);

  const { watchVideos } = movieData;

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 relative">
        <h2 className="font-semibold text-[20px] sm:text-[30px] lg:text-[40px] text-center lg:pt-[120px] pt-[10%]">
          Watch{' '}
          <span className="bg-gradient-to-br ps-2 from-[#F2CD75] to-[#A97424] bg-clip-text text-transparent">
            videos
          </span>
        </h2>

        <button className="custom-prev absolute top-2/3 cursor-pointer -translate-y-1/2 left-[-50px] z-10 w-10 h-10 rotate-180 rounded-full p-[1px] bg-transparent border border-[#F2CD75] active:border-[#A97424] transition-all duration-200 hidden lg:block">
          <div className="w-full h-full bg-transparent rounded-full flex items-center justify-center hover:bg-[#F2CD75] active:bg-[#A97424] cursor-pointer">
            <LeftIcon className="w-4 h-4 text-black" />
          </div>
        </button>

        <button className="custom-next absolute cursor-pointer top-2/3 -translate-y-1/2 -right-[50px] z-10 w-10 h-10 rounded-full p-[1px] bg-transparent border border-[#F2CD75] active:border-[#A97424] transition-all duration-200 hidden lg:block">
          <div className="w-full h-full bg-transparent rounded-full flex items-center justify-center hover:bg-[#F2CD75] active:bg-[#A97424] cursor-pointer">
            <RigthIcon className="w-4 h-4 text-black" />
          </div>
        </button>

        {/* Background Image */}
        <div className="absolute top-[-30%] -z-10">
          <Image src="/image/png/lnierimg.png" alt="BG" width={1000} height={800} />
        </div>

        {/* Slider */}
        <div className="responsive mt-10">
          {watchVideos.map((item, index) => (
            <div key={index} className="px-2">
              <div className="p-4 gap-5 rounded-xl border border-white/25 backdrop-blur-[20px] bg-gradient-to-br from-[#F2CD75]/20 to-[#A97424]/20">
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-10">
                    <Image
                      src={item.img}
                      alt={`Small Icon ${index + 1}`}
                      width={30}
                      height={30}
                      className="rounded-lg"
                    />
                  </div>
                  {/* Main image */}
                  <Image
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    width={540}
                    height={303}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Text */}
                <div className="mt-3 font-semibold text-xs sm:text-sm md:text-base  lg:text-xl text-white">
                  {item.text}
                </div>

                {/* Optional Rating Text */}
                {item.you && (
                  <div className="mt-2 font-normal text-xs md:text-sm lg:text-base  opacity-70 text-white">
                    {item.you}
                  </div>
                )}

                {/* Star Icons */}
                <div className="mt-2 flex gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Image
                      key={i}
                      src={item.icon}
                      alt={`Star ${i + 1}`}
                      width={24}
                      height={24}
                      className="rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-[10%] hidden lg:flex">
        <Image src="/image/png/XMLID_36_.png" alt="Logo" width={150} height={150} />
      </div>
    </div>
  );
};

export default Page;
