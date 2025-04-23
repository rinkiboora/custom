import Navbar from '../app/common/Navbar/page'; // Verify this path
import { Search } from 'lucide-react';
import Image from 'next/image';
import CustomerSlider from './components/slider/Customerslider/page';
import Watchvslider from './components/slider/Watchvslider/page';
import Favoritesslider from './components/slider/Favoritesslider/page';
import Mostrated from './components/slider/Mostrated/page';
import Reviews from './components/Reviews/page';
import Featured from './components/slider/Featured/page';
import Recently from './components/slider/Recently/page';
import Fq from '../app/common/Fq/page';
import Footer from '../app/common/Footer/page';

export default function Home() {
  return (
    <div className=" relative overflow-hidden">
      <div className=" absolute top-[5%] h-[100vh]">
        <Image
          src="/image/png/XMLID_2_.png"
          alt="Logo"
          width={59.23296738789483}
          height={66.9352340824646}
        />
      </div>
      <div className="min-h-sc reen bg-[url('/image/png/Hero%20Section.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />

        <div className="max-w-[1140px] mx-auto px-4">
          <div className="flex flex-col-reverse xl:flex-row">
            <div className=" text-center lg:text-start ">
              <h1 className="text-white text-xl  sm:text-2xl  lg:pt-[140px] md:text-4xl lg:text-[55px] font-bold">
                Customer
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2CD75] to-[#A97424] px-2 ">
                  Review
                </span>
                sites movies
              </h1>
              <h5 className="font-semibold text-xs md:text-base pt-3 text-white opacity-90">
                Csras lectus nunc venenatis incidunt id quis malesuada
              </h5>
              <p className="font-normal text-xs md:text-base text-white opacity-70 pt-[10px]">
                Amet suscipit risus nulla libero porta purus id rhoncus emper faucibus risus cursus
                dibero ipsum tempus rhoncus dignissi massa cursus tortor.
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
            <div className=" mx-auto md:mx-0">
              <CustomerSlider />
            </div>
          </div>
        </div>
      </div>
      <Watchvslider />

      <Favoritesslider />
      <Mostrated />
      <Featured />
      <Reviews />
      <Recently />
      <Fq />
      <Footer />
    </div>
  );
}
