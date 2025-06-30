// components/ui/marquee-reviews.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cn } from "@/lib/utils";

const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={cn("h-5 w-5", i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")}
        />
      );
    }
    return <div className="flex justify-center mb-2">{stars}</div>;
  };

  return (
    <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg p-6 shadow-md flex flex-col h-full">
      {review.rating && renderStars(review.rating)}
      <p className="text-gray-700 dark:text-gray-300 text-base italic mb-4 flex-grow">
        "{review.reviewText}"
      </p>
      <div className="flex items-center justify-center mt-auto pt-4 border-t border-gray-100 dark:border-zinc-700 w-full">
        {review.avatar && (
          <Image
            src={review.avatar}
            alt={review.clientName || "Client Avatar"}
            width={50}
            height={50}
            className="rounded-full object-cover mr-3 border-2 border-blue-500"
          />
        )}
        <div className="text-left">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {review.clientName}
          </h4>
          {review.clientTitle && (
            <p className="text-sm text-blue-600 dark:text-blue-400">
              {review.clientTitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const MarqueeReviews = ({
  reviews,
  className,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={cn("w-full", className)}>
      {isMobile ? (
        <div className="relative px-2">
          <Swiper
            modules={[Pagination, Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="pb-10"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-white dark:bg-gray-700 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#4CAF50" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-white dark:bg-gray-700 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#4CAF50" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};