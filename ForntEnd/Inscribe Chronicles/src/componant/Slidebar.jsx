import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slidebar = () => {
  const categories = [
    "For you",
    "Following",
    "Humor",
    "Coding",
    "React",
    "Life",
    "Money",
    "Relationships",
  ];

  return (
    <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap py-2 px-4 border-b border-gray-200 bg-white">
      {/* Add Icon */}
      <button className="text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none px-2 flex items-center">
        <AddIcon fontSize="small" />
      </button>

      {/* Categories */}
      {categories.map((category, index) => (
        <button
          key={index}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none border-b-2 border-transparent hover:border-gray-300 focus:border-black px-2"
        >
          {category}
        </button>
      ))}

      {/* Arrow Icon */}
      <button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-2 flex items-center">
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  );
};

export default Slidebar;
