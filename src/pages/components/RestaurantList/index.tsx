import React from "react";
import { type GetResult } from "@prisma/client/runtime";
import RestaurantItem from "../RestaurantItem";

export interface Restaurant {
  rating: number;
  ratingCount: number;
  category: string;
  city: string;
  description: string;
  id: string;
  images: string[];
  name: string;
  priceRange: string;
  featuredId: string;
  isFavorite: boolean;
}

const RestaurantList = ({
  restaurants,
  onFavoriteToggle,
}: {
  restaurants: GetResult<Restaurant, any>[];
  onFavoriteToggle?: (id: string, isFavorite: boolean) => Promise<void>;
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {restaurants?.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onFavoriteToggle={onFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList