import React from "react";
import { RestaurantItem } from "../RestaurantItem";
import { type Restaurant } from "~/pages/types";
import { type GetResult } from "@prisma/client/runtime";

export const RestaurantList = ({
  restaurants,
  onFavoriteToggle,
}: {
  restaurants: GetResult<Restaurant, any>[];
  onFavoriteToggle?: (id: string, isFavorite: boolean) => Promise<void>;
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {restaurants.map((restaurant) => (
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
