import React from "react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = ["SUSHI", "UNAGI", "YAKITORI", "RAMEN"];

  return (
    <div className="mb-6 flex space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`rounded-full border px-4 py-2 ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => onCategoryChange(category === selectedCategory ? '' : category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
