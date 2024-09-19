import Image from "next/image";
import React from "react";
import { type Restaurant } from "~/pages/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import HeartIcon from "../Icons/HeartIcon";
import HeartOutlIneWhiteIcon from "../Icons/HeartOutlIneWhiteIcon";

interface RestaurantItemProp {
  restaurant: Restaurant;
  onFavoriteToggle?: (id: string, isFavorite: boolean) => void;
}

export const RestaurantItem: React.FC<RestaurantItemProp> = ({
  restaurant,
  onFavoriteToggle,
}) => {
  const { images, name, isFavorite, description, rating, id } = restaurant;
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative h-56 w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Image of ${name}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => onFavoriteToggle?.(id, isFavorite)}
          className={`absolute right-4 top-4 z-10 h-10 w-10 flex justify-center items-center ${
            isFavorite ? "bg-slate-50" : "bg-white/50"
          } rounded-full`}
        >
          {isFavorite ? (
            <HeartIcon className="h-6 w-6 transition" />
          ) : (
            <HeartOutlIneWhiteIcon className="h-6 w-6 transition" />
          )}
        </button>
      </div>

      <div className="p-4">
        {/* Name */}
        <h3 className="mb-2 text-lg font-semibold">{name}</h3>

        {/* Rating */}
        <div className="mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 17.27l-3.062 1.608.585-3.412-2.476-2.413 3.419-.497L12 9.66l1.534 3.896 3.419.497-2.476 2.413.585 3.412L12 17.27z"
            />
          </svg>
          <span className="ml-1 text-gray-600">{rating}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
