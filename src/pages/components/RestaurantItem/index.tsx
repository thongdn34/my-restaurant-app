import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import HeartIcon from "../Icons/HeartIcon";
import HeartOutlIneWhiteIcon from "../Icons/HeartOutlIneWhiteIcon";
import { Restaurant } from "../RestaurantList";

interface RestaurantItemProp {
  restaurant: Restaurant;
  onFavoriteToggle?: (id: string, isFavorite: boolean) => void;
}

const RestaurantItem: React.FC<RestaurantItemProp> = ({
  restaurant,
  onFavoriteToggle,
}) => {
  if (!restaurant) return null;
  const { images, name, isFavorite, description, rating, id, ratingCount } =
    restaurant;
  return (
    <div className="bg-white overflow-hidden rounded-lg shadow-md">
      <div className="relative h-56 w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="h-full"
        >
          {images?.map((image, index) => (
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
          className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center ${
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
        <div className="flex items-center justify-start">
          <h3 className="mb-2 text-lg font-semibold flex-1 whitespace-nowrap text-ellipsis">{name}</h3>

          <div className="mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-400 h-5 w-5"
              fill="#FDB022"
              viewBox="0 0 24 24"
              stroke="#FDB022"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 17.27l-3.062 1.608.585-3.412-2.476-2.413 3.419-.497L12 9.66l1.534 3.896 3.419.497-2.476 2.413.585 3.412L12 17.27z"
              />
            </svg>
            <span className="text-gray-600 ml-1">
              {rating}({ratingCount})
            </span>
          </div>
        </div>

        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default RestaurantItem;
