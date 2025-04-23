import React from 'react';
import Image from 'next/image';
import { FacsbookIcon, InIcon, InstaIcon } from '../icon/icon';
import Link from 'next/link';

const Footer = ({ closeNavbar }) => {
  return (
    <footer className="pt-20 pb-3 relative bg-black overflow-hidden lg:pt-[100px] text-white">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-y-10 text-center md:text-left">
          {/* Logo & Description */}
          <div className="w-full md:w-5/12 lg:w-4/12">
            <Image
              className=" mx-auto lg:mx-0"
              src="/image/png/rate-my-serics.png"
              alt="Logo"
              width={136}
              height={74}
            />
            <p className="text-xs lg:text-sm text-white opacity-70 lg:w-[90%] mt-4">
              Duis vel lacus nulla dapibus auctor arcu viverra eget sed.
            </p>
            <div className="flex items-center cursor-pointer justify-center lg:justify-start  gap-3 pt-7">
              <button
                aria-label="Instagram"
                className="w-10 h-10 cursor-pointer rounded-full border border-[#F2CD75] flex justify-center items-center  bg-transparent transition duration-200 hover:border-[#A97424] ">
                <InstaIcon className="w-5 h-5 text-black mx-auto" />
              </button>
              <button
                aria-label="Facebook"
                className="w-10 h-10 cursor-pointer rounded-full border  flex justify-center items-center  border-[#F2CD75] bg-transparent transition duration-200 hover:border-[#A97424]">
                <FacsbookIcon className="w-5 h-5 text-black mx-auto" />
              </button>
              <button
                aria-label="LinkedIn"
                className="w-10 h-10 cursor-pointer rounded-full flex justify-center items-center border border-[#F2CD75] bg-transparent transition duration-200 hover:border-[#A97424]">
                <InIcon className="w-5 h-5 text-black mx-auto " />
              </button>
            </div>
          </div>

          {/* Footer Links */}
          {[
            {
              title: 'Resources',
              links: [
                { text: 'Watch videos', href: '/' },
                { text: 'Fan favorites', href: '/Fan' },
                { text: 'Most rated movies', href: '/Most' },
                { text: 'Featured', href: '/facilities' },
                { text: 'Reviews & Rating', href: '/Reviews' },
                { text: 'Recently Viewed', href: '/Recently' },
                { text: 'Faqs', href: '/Faqs' },
              ],
            },
            {
              title: 'Category',
              links: [
                { text: 'links', href: '/events' },
                { text: 'links', href: '/news' },
                { text: 'links ', href: '/contactus' },
              ],
            },
            {
              title: 'Item',
              links: [
                { text: 'links', href: '/faqs' },
                { text: 'links', href: '/terms' },
                { text: 'links', href: '/privacy' },
              ],
            },
            {
              title: 'My Account',
              links: [
                { text: 'links', href: '/profile' },
                { text: 'links', href: '/settings' },
                { text: 'links', href: '/logout' },
              ],
            },
          ].map((section, index) => (
            <div key={index} className="w-full  sm:w-3/12 md:w-2/12">
              <ul className="space-y-4">
                <li className="text-white font-semibold text-sm">{section.title}</li>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      onClick={closeNavbar}
                      className="text-xs lg:text-sm text-gray-400 hover:text-white transition">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-12">
          <p className="text-xs sm:text-sm md:text-base text-white opacity-70">
            © 2023 RMS. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute bottom-0 right-0 z-0">
        <Image src="/image/png/XMLID_36_ (1).png" alt="Decor" width={154} height={86} />
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <Image src="/image/png/leyar.png" alt="Decor Layer" width={526} height={526} />
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <Image src="/image/png/leyar2.png" alt="Decor Layer" width={526} height={526} />
      </div>
    </footer>
  );
};

export default Footer;
