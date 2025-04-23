'use client';

import React, { useState } from 'react';
import Navbar from '../common/Navbar/page';
import Image from 'next/image';
import {
  Circleicon,
  CommitIcon,
  Downlodicon,
  NolikeIcon,
  ShortIcon,
  SubscribeIcon,
} from '../common/icon/icon';
import { ThumbsUp, MoreHorizontal, ShareIcon } from 'lucide-react';
import { movieData } from '../components/Halper/page';

const { suggestions, commentsData } = movieData;

const buttons = [
  { icon: <ThumbsUp size={18} />, label: '129' },
  { icon: <NolikeIcon size={20} />, label: '129' },
  { icon: <ShareIcon size={18} />, label: 'Share' },
  { icon: <ShareIcon size={18} />, label: 'Download' },
];

const tabs = ['All', 'Trailer', 'Comedy', 'Related'];

function FilterTabs({ activeTab, onSelect }) {
  return (
    <div className="flex gap-2 p-1 rounded-md mb-4 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelect(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-md border border-white/25 transition
            ${
              activeTab === tab
                ? 'bg-yellow-600 text-white'
                : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}>
          {tab}
        </button>
      ))}
    </div>
  );
}

export default function MoviePanel() {
  const [activeTab, setActiveTab] = useState('All');
  const [selected, setSelected] = useState(suggestions[0]);
  const [showComments, setShowComments] = useState(true);

  const filteredSuggestions =
    activeTab === 'All'
      ? suggestions
      : suggestions.filter((movie) => movie.text.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="min-h-screen pb-6 bg-[url('/image/png/Hero%20Section.png')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row text-white">
          {/* Left Panel */}
          <div className="lg:w-2/3 w-full p-6 space-y-6">
            <div className="w-full h-80 bg-zinc-900 rounded-xl overflow-hidden shadow-lg">
              <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <h1 className="lg:text-2xl md:text-xl sm:text-lg text-sm font-bold">
              {selected.title}
            </h1>

            {/* Channel Info + Buttons */}
            <div className="mt-4 p-4 rounded-lg">
              <div className="flex ">
                <div className="flex flex-col lg:flex-row gap-4 items-start">
                  {/* Channel Info */}
                  <div className="flex items-center gap-3 w-full lg:w-auto flex-wrap">
                    <Image src="/image/png/tvmovis.png" alt="BG" width={40} height={40} />
                    <div>
                      <h2 className="font-medium text-sm text-white">TV Movies</h2>
                      <h5 className="font-normal text-xs text-white/70">929K Subscribers</h5>
                    </div>
                    <button className="ml-4 py-2 px-4 rounded-md text-white flex items-center gap-2 bg-gradient-to-br from-[#F2CD75] to-[#A97424] font-semibold text-xs sm:text-sm whitespace-nowrap">
                      <SubscribeIcon />
                      Subscribe
                    </button>
                  </div>
                </div>{' '}
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:flex gap-2 w-full flex-end">
                  {buttons.map((btn, i) => (
                    <button
                      key={i}
                      className="flex items-center gap-1 px-2 pe-3 py-2 rounded-md text-white lg:bg-white/10 backdrop-blur-md hover:bg-white/20 transition">
                      {btn.icon}
                      {btn.label && <span className="text-sm font-normal">{btn.label}</span>}
                    </button>
                  ))}
                </div>
              </div>
              {/* Description */}
              <div className="bg-white/10 backdrop-blur rounded-md p-4 mt-5">
                <p className="text-sm text-white/70">
                  Elit eu maecenas augue lorem malesuada amet mattis risus. Luctus hac at pharetra
                  erat vivamus fusce sit nec.
                </p>
              </div>
              {/* Comments */}
              <div className="flex items-center border-b border-white/10 pt-10 pb-4">
                <h2 className="text-sm flex gap-1 font-semibold text-white/70 cursor-pointer pr-3">
                  9,595 Comments
                </h2>
                <button className="text-sm text-white/60 hover:text-white flex gap-2">
                  <ShortIcon /> Sort by
                </button>
              </div>
              <div
                className="text-sm text-white/60 hover:text-white flex gap-2 pt-3"
                onClick={() => setShowComments(!showComments)}>
                <CommitIcon /> View Comment
              </div>
              {showComments && (
                <>
                  <div className="flex items-center border border-white/50 rounded-full px-4 py-1 lg:py-2 bg-white/5 mt-4">
                    <CommitIcon />
                    <input
                      type="text"
                      placeholder="Add a comment"
                      className="bg-transparent outline-none placeholder:font-normal placeholder:text-sm text-white placeholder-white/70 w-full ml-2"
                    />
                    <button className="ml-2 p-2 rounded-full bg-gradient-to-br from-[#F2CD75] to-[#A97424] hover:scale-105 transition">
                      <Circleicon />
                    </button>
                  </div>

                  {commentsData.map((data, index) => (
                    <div
                      key={index}
                      className="flex gap-4 py-4 px-3 border-t border-white/10 backdrop-blur bg-white/5 rounded-xl my-3">
                      <img
                        src={data.img2}
                        alt={data.name}
                        className="w-[40px] h-[40px] object-cover rounded-full"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between text-sm  font-medium text-white/90">
                          <span>{data.name}</span>
                          <span className="text-xs text-white/60">{data.date}</span>
                        </div>
                        <p className="text-sm text-white/70">{data.comment}</p>
                        <div className="flex gap-6 text-xs text-white/40 pt-1">
                          <span className="flex items-center gap-1">{data.icon} 126</span>
                          <span className="flex items-center gap-1">{data.icon2} 126</span>
                          <span className="flex items-center gap-1">{data.Reply} Reply</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-1/3 w-full p-4 space-y-2">
            <FilterTabs activeTab={activeTab} onSelect={setActiveTab} />
            {filteredSuggestions.map((movie, index) => (
              <button
                key={index}
                onClick={() => setSelected(movie)}
                className={`flex items-center gap-3 w-full px-3 py-3 rounded-lg border border-white/25 hover:bg-zinc-800 transition backdrop-blur-md ${
                  selected.title === movie.title ? 'bg-zinc-800' : ''
                }`}>
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-[88px] h-[88px] object-cover rounded-md"
                />
                <div className="text-left">
                  <span className="text-sm font-medium">{movie.title}</span>
                  <span className="text-xs font-normal text-white/70 block pt-1">{movie.text}</span>
                  <div className="flex gap-5 pt-1">
                    <span className="text-xs text-white/70">{movie.views}</span>
                    <span className="text-xs text-white/70">{movie.month}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
