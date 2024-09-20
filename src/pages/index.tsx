import { api } from "~/utils/api";
import RestaurantList from "./components/RestaurantList";
import CategoryFilter from "./components/CategoryFilter";
import { useState } from "react";
import SearchInput from "./components/SearchInput";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {
    data: restaurants,
    isLoading,
    refetch,
  } = api.restaurant.getRestaurants.useQuery();
  const { mutateAsync } = api.restaurant.addFavorite.useMutation({
    onSuccess: async () => {
      await refetch();
    },
  });

  const handleToggleFavorite = async (id: string, isFavorite: boolean) => {
    try {
      await mutateAsync({ id, isFavorite: !isFavorite });
    } catch (error) {
      console.log(error);
    }
  };

  const filteredRestaurants = restaurants?.filter((restaurant) => {
    const matchesCategory = selectedCategory
      ? restaurant.category === selectedCategory
      : true;
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-4">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <RestaurantList
        restaurants={filteredRestaurants ?? []}
        onFavoriteToggle={handleToggleFavorite}
      />
    </div>
  );
}
