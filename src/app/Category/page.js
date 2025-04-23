import React from 'react';
import Navbar from '../common/Navbar/page';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Mostpopular from '../components/slider/Mostpopular/page';
import Fq from '../common/Fq/page';
import Footer from '../common/Footer/page';

const page = () => {
  return (
    <div className=" relative">
      <div className="min-h-sc reen pb-6 bg-[url('/image/png/Hero%20Section.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <div className=" absolute top-[25%] h-[100vh]">
          <Image
            src="/image/png/XMLID_2_.png"
            alt="Logo"
            width={59.23296738789483}
            height={66.9352340824646}
          />
        </div>

        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className=" text-center lg:text-start pt-5 lg:pt-0 ">
              <h1 className="text-white text-xl  sm:text-2xl  lg:pt-[140px] md:text-4xl lg:text-[55px] font-bold">
                TV
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2CD75] to-[#A97424] px-2 ">
                  Shows
                </span>
              </h1>

              <p className="font-normal text-xs md:text-base text-white opacity-70 pt-[10px]">
                Sit volutpat purus semper metus laoreet amet justo suscipit posuere vestibulum eget
                erat aliquet quam donec donec suspendisse.
              </p>
              <div className="sm:w-[343px] sm:h-[50px] mt-[40px] flex items-center rounded-full border border-[#FFFFFF80] overflow-hidden mx-auto bg-black/50 backdrop-blur-sm lg:mx-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 placeholder:font-normal placeholder:text-sm text-white bg-transparent outline-none placeholder-white"
                />
                <button className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#F2CD75] to-[#A97424]">
                  <Search color="white" size={20} />
                </button>
              </div>
            </div>

            <Image
              className=" mx-auto lg:mx-0"
              src="/image/png/img2hero.png"
              alt="img2"
              width={523}
              height={523}
            />
          </div>
        </div>
      </div>
      <div className=" absolute right-0 bottom-0">
        <Image
          className=" mx-auto lg:mx-0"
          src="/image/png/XMLID_36_.png"
          alt="img2"
          width={190}
          height={100}
        />
      </div>
      <Mostpopular />
      <Fq />
      <Footer />
    </div>
  );
};

export default page;
