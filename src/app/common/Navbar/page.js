'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { BellIcon, CircleIcon } from '../icon/icon';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3">
      <div className="max-w-[1140px] mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src="/image/png/rate-my-serics.png" alt="Logo" width={130} height={60} />
        </div>

        {/* Right: Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center space-x-6 text-sm">
            {['Library', 'My Reviews', 'History', 'Subscription', 'Trending'].map((item, i) => (
              <li key={i}>
                <a
                  className="font-normal hover:opacity-100 text-xs py-8  lg:text-sm text-white opacity-70"
                  href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-[14px] py-3 rounded-2xl font-semibold text-sm lg:text-base border border-transparent "
              style={{
                borderWidth: '1px',
                borderImageSource: 'linear-gradient(135deg, #F2CD75 0%, #A97424 100%)',
                borderImageSlice: 1,
              }}>
              Sign out
            </Link>
            <Link
              href="/"
              className="bg-gradient-to-r px-[8px] lg:px-[14px] py-3 from-yellow-500 to-yellow-700 text-white rounded font-semibold text-sm lg:text-base hover:brightness-110 transition duration-300">
              My account
            </Link>
            <div className="cursor-pointer gap-2 flex  px-3 py-2 rounded ">
              <BellIcon />
              <CircleIcon />
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-50 p-6 flex flex-col items-center text-center transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-[10%] right-4 text-white text-3xl font-bold">
          &times;
        </button>

        {/* Nav Items */}
        <div className="mt-20 flex flex-col gap-5">
          {['Library', 'My Reviews', 'History', 'Subscription', 'Trending'].map((item, i) => (
            <a key={i} href="#" className="block font-normal text-sm text-white opacity-70">
              {item}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mt-6 w-full px-6">
          <button
            className="px-[14px] py-3 rounded-2xl font-semibold text-sm lg:text-base border border-transparent"
            style={{
              borderWidth: '1px',
              borderImageSource: 'linear-gradient(135deg, #F2CD75 0%, #A97424 100%)',
              borderImageSlice: 1,
            }}>
            Sign out
          </button>
          <button className="bg-gradient-to-r px-[8px] lg:px-[14px] py-3 from-yellow-500 to-yellow-700 text-white rounded font-semibold text-sm lg:text-base">
            My account
          </button>
        </div>

        {/* Icons */}
        <div className="flex gap-4 justify-center mt-6">
          <BellIcon />
          <CircleIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
