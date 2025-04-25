'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../common/Navbar/page';
import { movieData } from '../components/Halper/page';
import {
  Homeicon,
  LeftIcon,
  RigthIcon,
  LibraryIcon,
  ReviewIcon,
  HistoryIcon,
  TrendingIcon,
  SignOutIcon,
  SubscriptionIcon,
  AccountIcon,
} from '@/app/common/icon/icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const { movieSections } = movieData;

export default function MoviePanelPage() {
  const navigationRefs = useRef([]);

  return (
    <div className="w-full bg-[#0f0f0f]">
      <div className="max-w-[1140px] mx-auto">
        <Navbar />

        <div className="text-white min-h-screen flex flex-col md:flex-row max-w-[1140px] mx-auto">
          {/* Sidebar */}
          <aside className="w-full md:w-60 bg-[#1e1e1e] p-4 flex flex-col">
            <div className="mb-6">
              <Image
                className="mx-auto"
                src="/image/png/Floydimg.png"
                alt="Decor"
                width={57}
                height={57}
              />
              <h2 className="text-center font-normal text-[18px]">Floyd Miles</h2>
              <p className="text-xs text-center text-gray-400">| Uploads 2.5k | Likes 1.2M</p>
            </div>

            {/* Profile Info */}
            <div className="space-y-4 text-sm">
              {[
                { label: 'Subscriptions', value: '100k' },
                { label: 'Uploads', value: '2.5k' },
                { label: 'Likes', value: '1.2M' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between pt-1">
                    <h2 className="font-normal text-sm text-white opacity-80">{item.label}</h2>
                    <h2 className="font-normal text-sm text-white opacity-80">{item.value}</h2>
                  </div>
                  <div className="border-b-1 opacity-20 mt-1"></div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <nav className="space-y-2 mt-6 text-sm">
              {[
                { name: 'Home', icon: <Homeicon /> },
                { name: 'Library', icon: <LibraryIcon /> },
                { name: 'My reviews', icon: <ReviewIcon /> },
                { name: 'History', icon: <HistoryIcon /> },
                { name: 'Subscription', icon: <SubscriptionIcon /> },
                { name: 'Trending', icon: <TrendingIcon /> },
                { name: 'My account', icon: <AccountIcon /> },
                { name: 'Sign out', icon: <SignOutIcon /> },
              ].map((item) => (
                <button
                  key={item.name}
                  className="text-left text-gray-300 hover:text-white w-full py-3 px-2 rounded hover:bg-[#2e2e2e] flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6 space-y-10 overflow-hidden">
            {movieSections.map((section, index) => {
              const prevRef = useRef(null);
              const nextRef = useRef(null);

              return (
                <section key={section.title} className="space-y-4 relative">
                  {/* Title and Scroll Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <h2 className="text-xl font-bold">{section.icon}</h2>
                      <h2 className="text-xl font-bold">{section.title}</h2>
                    </div>
                  </div>

                  {/* Swiper Slider */}
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    loop
                    spaceBetween={30}
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
                      1024: { slidesPerView: 3.8 },
                    }}
                    className="!pb-10">
                    {section.movies.map((movie) => (
                      <SwiperSlide key={movie.id}>
                        <div className="min-w-[220px] max-w-[220px] bg-[#2a2a2a] p-3 rounded-lg shadow text-sm flex-shrink-0">
                          <Image
                            src={movie.image}
                            alt={movie.title}
                            width={200}
                            height={300}
                            className="rounded mb-2 object-cover"
                          />
                          <h3 className="font-semibold text-white mb-1">{movie.title}</h3>
                          <p className="text-gray-400 text-xs mb-1">
                            {movie.views} • {movie.time}
                          </p>
                          <div className="flex gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
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
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Custom Navigation Buttons */}
                  <div className="absolute top-0 right-[60px]  gap-3 z-10 hidden lg:flex">
                    <button
                      ref={prevRef}
                      className="w-10 h-10 rotate-180 rounded-full p-[1px] bg-blue-600 hover:bg-blue-700 transition-all duration-200">
                      <div className="w-full h-full flex items-center justify-center">
                        <LeftIcon className="w-4 h-4 text-white" />
                      </div>
                    </button>
                    <button
                      ref={nextRef}
                      className="w-10 h-10 rounded-full p-[1px] bg-blue-600 hover:bg-blue-700 transition-all duration-200">
                      <div className="w-full h-full flex items-center justify-center">
                        <RigthIcon className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </div>
                </section>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
