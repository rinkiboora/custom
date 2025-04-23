'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const moviesColumn1 = ['/image/png/imghero1.png', '/image/png/img2.png', '/image/png/img3.png'];
const moviesColumn2 = ['/image/png/img4.png', '/image/png/img5.png', '/image/png/img6.png'];

export default function MovieSlider() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const scroll1 = scrollRef1.current;
    const scroll2 = scrollRef2.current;

    let scrollAmount1 = 0;
    let scrollAmount2 = 0;

    const autoScroll = () => {
      if (scroll1 && window.innerWidth >= 640) {
        scrollAmount1 += 1;
        if (scrollAmount1 >= scroll1.scrollHeight - scroll1.clientHeight) scrollAmount1 = 0;
        scroll1.scrollTop = scrollAmount1;
      }

      if (scroll2 && window.innerWidth >= 640) {
        scrollAmount2 += 1;
        if (scrollAmount2 >= scroll2.scrollHeight - scroll2.clientHeight) scrollAmount2 = 0;
        scroll2.scrollTop = scrollAmount2;
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1140px] mx-auto px-4 overflow-hidden">
      <div className="flex gap-4 justify-center p-4 overflow-x-auto sm:overflow-x-visible flex-nowrap">
        {/* Column 1 */}
        <div
          ref={scrollRef1}
          className="h-[60vh] sm:h-[80vh] max-h-[530px] w-[150px] sm:w-[270px] overflow-hidden no-scrollbar flex-shrink-0">
          <div className="flex flex-col gap-4">
            {[...moviesColumn1, ...moviesColumn1].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={270}
                height={270}
                alt={`movie1-${index}`}
                className="w-full sm:w-[270px] h-auto object-cover rounded-xl"
              />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div
          ref={scrollRef2}
          className="hidden sm:block h-[60vh] sm:h-[80vh] max-h-[530px] w-[150px] sm:w-[270px] overflow-hidden no-scrollbar flex-shrink-0">
          <div className="flex flex-col gap-4">
            {[...moviesColumn2, ...moviesColumn2].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={270}
                height={270}
                alt={`movie2-${index}`}
                className="w-full sm:w-[270px] h-auto object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
