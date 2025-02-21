import React from "react";
import { useNavigate } from "react-router-dom";
import { JobCategory as JobCategoryData } from "../../data/MockData";

const JobCategory = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = (categoryName) => {
    console.log(`Navigating to JobList for: ${categoryName}`);
    navigate(`/joblist?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className=" bg-[#96BE25] text-white px-4 py-2 rounded-lg text-lg font-semibold">
            Industry
          </span>
        </div>
        <div className="bg-gray-200 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-gray-200 p-4">
            {JobCategoryData.map((category, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-105"
              >
                <div
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition duration-300 cursor-pointer hover:bg-[#96BE25] group"
                  onClick={() => handleViewMoreClick(category.name)}
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-white">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-3 group-hover:text-white">
                    {category.name}
                  </h3>
                  <button
                    className="px-6 py-2 text-sm font-medium bg-[#96BE25] text-white rounded-md transition duration-300 border border-[#96BE25] 
                    group-hover:bg-white group-hover:text-[#96BE25]"
                  >
                    View Jobs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
