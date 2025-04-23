'use client';
import { Star } from 'lucide-react';
import { movieData } from '../Halper/page';
import Image from 'next/image';

export default function ReviewsSection() {
  const { mostRatedMovies } = movieData;

  const ratingData = [
    { stars: 5, count: 845, percentage: 70 },
    { stars: 4, count: 367, percentage: 25 },
    { stars: 3, count: 98, percentage: 5 },
    { stars: 2, count: 34, percentage: 2 },
    { stars: 1, count: 12, percentage: 1 },
  ];

  const totalReviews = 1456;
  const averageRating = 4.3;

  return (
    <div className="bg-black text-white overflow-hidden w-full lg:py-10 relative">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="font-semibold text-[24px] sm:text-[32px] lg:text-[40px] text-center mb-10">
          Reviews &{' '}
          <span className="bg-gradient-to-br from-[#F2CD75] to-[#A97424] bg-clip-text text-transparent">
            Rating
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Average Rating Section */}
          <div>
            <div className="flex flex-col items-start mb-6">
              <h3 className=" lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-bold">
                {averageRating}
              </h3>
              <div className="flex pt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill={star <= Math.floor(averageRating) ? '#EAB308' : 'none'}
                    color="#EAB308"
                    className="mx-0.5"
                  />
                ))}
              </div>
              <p className="text-gray-400 text-sm pt-3">{totalReviews} reviews</p>
            </div>

            <div className="space-y-2">
              {ratingData.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="w-6 text-right text-sm">{item.stars}</span>
                  <div className="relative w-[85%] h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        width: `${item.percentage}%`,
                        background: 'linear-gradient(135deg, #F2CD75 0%, #A97424 100%)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button className="text-white px-4 py-2 rounded-md  text-xs sm:text-sm font-semibold bg-gradient-to-br from-[#F2CD75] to-[#A97424] hover:scale-105 transition-transform duration-300 shadow-md">
                See All Reviews
              </button>
            </div>
          </div>

          {/* Most Rated Movies Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mostRatedMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white/5 border border-white/25 backdrop-blur-xl rounded-lg p-3 transition-all duration-300 hover:border-yellow-500 hover:scale-105">
                <div className="flex gap-3 items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold lg:text-base text-sm">{movie.title}</h4>
                    <div className="flex items-center gap-3 text-gray-400 text-sm pt-2">
                      <span>{movie.reviews}</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Image
                            key={i}
                            src={movie.starIcon}
                            alt={`Star ${i + 1}`}
                            width={20}
                            height={20}
                            className="rounded-md"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-normal text-gray-400 leading-[1.6] pt-4 pb-4">
                  {movie.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative image */}
      <div className="absolute right-2 top-[20%] opacity-50 pointer-events-none hidden md:block">
        <Image src="/image/png/XMLID_2_.png" alt="Decor" width={60} height={67} />
      </div>
    </div>
  );
}
