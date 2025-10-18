import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../Data/Data";

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-5">
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10 mt-[50px]">
        All Blogs
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Data.map((item, index) => (
          <NavLink to={`/blog/${index}`} key={index}>
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover sm:h-56 md:h-64"
              />
              <div className="p-5">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-400 mb-3">
                  By {item.author} • {item.date} • {item.time}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Blog;
