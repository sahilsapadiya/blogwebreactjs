import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../Data/Data";

const BlogDetails = () => {
  const { ss } = useParams();
  const navigate = useNavigate();
  const item = Data[ss];

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-red-500 text-xl font-semibold px-4">
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-black text-white p-5">
      <div className="max-w-4xl mx-auto">

     

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-[90px]">{item.title}</h1>

        <img
          src={item.img}
          alt={item.title}
          className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-2xl shadow-md mb-6"
        />

        <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6">
          By <span className="font-semibold">{item.author}</span> • {item.date} • {item.time}
        </p>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg whitespace-pre-line">
          {item.hiContent}
        </p>
        <button
          onClick={() => navigate(-1)} // Go back to previous page
          className=" px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white text-sm font-medium transition m-auto justify-center flex  "
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
