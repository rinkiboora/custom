import Image from 'next/image';

import { LeftIcon, RigthIcon, DownloadIcon } from '@/app/common/icon/icon';

export default function RobinCard() {
  return (
    <div className=" relative">
      <h2 className="font-semibold text-[20px] overflow-hidden sm:text-[30px] lg:text-[40px] text-center lg:pt-[120px] pt-[10%]">
        Most rated
        <span className="bg-gradient-to-br ps-2 from-[#F2CD75] to-[#A97424] bg-clip-text text-transparent">
          movies
        </span>
      </h2>
      <div className="mt-6 text-white rounded-2xl border border-[#F2CD75]/20 bg-gradient-to-br from-[#1f1f1f]/90 to-[#2c2c2c]/90 shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-6xl mx-auto  overflow-hidden backdrop-blur-[100px] transition duration-300 hover:shadow-xl relative">
        <div className="">
          <Image
            src="/image/png/border img top.png"
            alt="Background Ellipse"
            width={250}
            height={350}
            className=" absolute top-0 left-[35%]"
          />
        </div>
        <div className="w-[300px] absolute top-[20px] left-[37%] h-[2px] border-t-5 border-dashed border-[#F2CD75] opacity-10" />
        <div className="">
          <Image
            src="/image/png/border img top.png"
            alt="Background Ellipse"
            width={250}
            height={350}
            className=" absolute hidden lg:flex  bottom-0  right-0"
          />
        </div>
        <div className="w-[300px] absolute hidden lg:flex   bottom-[20px]  right-[60px] h-[2px] border-t-5 border-dashed border-[#F2CD75] opacity-10" />

        <Image
          src="/image/png/Ellipse 4.png"
          alt="Background Ellipse"
          fill
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full">
          {/* Poster Image */}
          <div className="flex-shrink-0">
            <Image src="/image/png/robin.png" alt="Robin Hood" width={250} height={350} />
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Robin Hood</h2>
            <div className="flex flex-wrap items-center font-normal gap-4 text-xs lg:text-base md:text-sm text-white opacity-70 mb-4">
              <span>189K+ Reviews</span>
              <span>29M+ Downloads</span>
              <span>4+ Rated out of 5</span>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Image key={i} src="/image/png/Star 3.svg" alt="star" width={20} height={20} />
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6 font-normal text-xs md:text-sm lg:text-base leading-relaxed">
              Odio elit nulla tellus elementum. Odio proin dignissim venenatis ullamcorper. Sed enim
              et sed lorem. Quis et potenti tortor arcu egestas ac tortor non. Aliquet sem varius in
              eget sodales nisl pretium diam. Lorem mauris aliquet massa aliquam ultricies imperdiet
              phasellus sociis urna. Faucibus quis dui etiam hendrerit amet pellentesque
              pellentesque.
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 cursor-pointer rounded-full bg-gradient-to-br from-[#F2CD75] to-[#A97424] flex items-center justify-center">
                <LeftIcon className="w-4 h-4 text-black " />
              </button>
              <button className="w-9 h-9 cursor-pointer rounded-full bg-gradient-to-br from-[#F2CD75] to-[#A97424] flex items-center justify-center">
                <RigthIcon className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Download Button */}
          <div className="absolute bottom-3 right-2 lg:top-6  lg:right-6 z-20">
            <button className="bg-gradient-to-br flex font-semibold text-sm lg:text-base items-center from-[#F2CD75] to-[#A97424] px-5 py-2 gap-2 rounded-md hover:brightness-110 transition">
              <DownloadIcon /> Download now
            </button>
          </div>
        </div>

        {/* Decorative Bars */}
        <div className="absolute top-0 left-1/2 w-[120px] h-[6px] bg-[#F2CD75] rounded-full -translate-x-1/2 mt-[-12px]" />
        <div className="absolute bottom-0 right-5 w-[100px] h-[4px] bg-[#F2CD75] rounded-full mb-[-12px]" />
      </div>
      <div className="absolute right-0 top-[20%] -z-50 hidden lg:flex">
        <Image src="/image/png/XMLID_2.png" alt="Logo" width={150} height={150} />
      </div>
    </div>
  );
}
