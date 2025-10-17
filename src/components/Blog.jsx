import React, { useState } from "react";
import Data from "../Data/Data";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-10 px-5">
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10 mt-[50px]">
        All Blogs
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Data.map((item, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover sm:h-56 md:h-64"
            />

            <div className="p-5">
              <h2 className="text-lg md:text-xl font-semibold mb-2 hover:text-blue-400 cursor-pointer">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mb-3">
                By {item.author} • {item.date} • {item.time}
              </p>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>

              {/* Read More Hindi Content */}
              {expandedIndex === index && (
                <div className="text-gray-200 text-sm whitespace-pre-wrap border-t border-gray-600 pt-3">
                  {item.hiContent}
                </div>
              )}

              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href={item.enurl}
                  className="text-blue-400 hover:underline text-sm"
                >

                </a>
                <button
                  onClick={() => handleExpand(index)}
                  className="text-blue-400 hover:underline text-sm"
                >
                  {expandedIndex === index ? "Hide Hindi" : "Read in Hindi"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
