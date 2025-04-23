'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { movieData } from '../../Halper/page';
import { LeftIcon, RigthIcon } from '@/app/common/icon/icon';
import Mostrated from '../Mostrated/page';

const SliderSection = ({ sectionTitle = '', movies = [] }) => {
  const [firstWord, secondWord = ''] = sectionTitle.split(' ');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mb-2 0 max-w-[1140px] mx-auto px-4 relative">
      <h2 className="font-semibold text-[20px] pb-5 sm:text-[30px] lg:text-[40px] text-center lg:pt-[80px] pt-[%] lg:pb-[60px]">
        {firstWord}
        <span className="bg-gradient-to-br ps-2  from-[#F2CD75] to-[#A97424] bg-clip-text text-transparent">
          {secondWord}
        </span>
      </h2>

      {/* Left Arrow */}
      <button
        ref={prevRef}
        className="absolute top-2/3 -translate-y-1/2 left-[-50px] z-10 w-10 h-10 rotate-180 rounded-full p-[1px] bg-transparent border border-[#F2CD75] active:border-[#A97424] transition-all duration-200 hidden lg:block">
        <div className="w-full h-full bg-transparent rounded-full flex items-center justify-center hover:bg-[#F2CD75] active:bg-[#A97424] cursor-pointer">
          <LeftIcon className="w-4 h-4 text-black" />
        </div>
      </button>

      {/* Right Arrow */}
      <button
        ref={nextRef}
        className="absolute top-2/3 -translate-y-1/2 -right-[50px] z-10 w-10 h-10 rounded-full p-[1px] bg-transparent border border-[#F2CD75] active:border-[#A97424] transition-all duration-200 hidden lg:block">
        <div className="w-full h-full bg-transparent rounded-full flex items-center justify-center hover:bg-[#F2CD75] active:bg-[#A97424] cursor-pointer">
          <RigthIcon className="w-4 h-4 text-black" />
        </div>
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-10">
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="p-2 gap-5 rounded-xl border border-white/25 backdrop-blur-[20px] from-[#F2CD75]/20 to-[#A97424]/20">
              <img
                src={movie.image}
                alt={`Poster of ${movie.title}`}
                className="h-56 w-full object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="lg:text-xl md:text-lg sm:text-base font-semibold text-white ">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-400 pt-1 font-normal">
                  Your rating: {movie.rating}/5
                </p>
                <div className="flex pt-2 text-yellow-400">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Image
                      key={i}
                      src={movie.rating2}
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
    </div>
  );
};

// ✅ Updated MovieSliderList component
const MovieSliderList = () => {
  const { sliderDataList } = movieData;

  return (
    <div className="bg-black  p-6 relative">
      {sliderDataList.map((section, index) => (
        <div key={section.sectionTitle}>
          <SliderSection sectionTitle={section.sectionTitle} movies={section.movies} />
          {(index + 1) % 3 === 0 && (
            <div className=" pb-5">
              <Mostrated />
            </div>
          )}
        </div>
      ))}
      <div className="absolute top-[2%] right-0 z-0 hidden lg:flex">
        <Image src="/image/png/XMLID_36_.png" alt="Decor" width={154} height={86} />
      </div>
      <div className="absolute top-[35%] left-[-1%] z-0 hidden lg:flex">
        <Image src="/image/png/XMLID_2.png" alt="Decor" width={154} height={86} />
      </div>
      <div className="absolute bottom-[10%] left-[-1%] z-0 hidden lg:flex">
        <Image src="/image/png/XMLID_2.png" alt="Decor" width={154} height={86} />
      </div>
      <div className="absolute top-0 left-0 z-0">
        <Image src="/image/png/lyar4.png" alt="Decor" width={600} height={400} />
      </div>
      <div className="absolute top-[15%] left-0 z-0">
        <Image src="/image/png/XMLID_2_.png" alt="Decor" width={100} height={100} />
      </div>
      <div className="absolute top-[15%] right-0 z-0">
        <Image src="/image/png/lyar5.png" alt="Decor" width={600} height={400} />
      </div>
      <div className="absolute top-[30%] right-0 z-0">
        <Image src="/image/png/XMLID_2_.png" alt="Decor" width={100} height={100} />
      </div>
    </div>
  );
};

export default MovieSliderList;
