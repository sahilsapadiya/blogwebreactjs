import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-800 px-6 md:px-20 py-16 ">
      <h1 className="text-4xl font-bold text-center mb-[10px] text-white mt-[130px] ">
        About Us
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <p className="text-lg leading-relaxed mb-6">
          Welcome to our website! We are passionate about creating innovative and
          useful web applications that make people's lives easier. Our team
          believes in building projects that are not only functional but also
          fun, inspiring, and educational.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Whether it’s a smart tool, a creative entertainment app, or a helpful
          service, our goal is to deliver high-quality experiences using the
          latest technologies like React, Firebase, and Tailwind CSS.
        </p>

        <p className="text-lg leading-relaxed">
          We are continuously learning and improving. If you have suggestions,
          feedback, or just want to say hi — feel free to reach out to us!
          Together, let’s make something awesome.
        </p>
      </div>

      <div className="text-center mt-12 text-sm text-white">
        © {new Date().getFullYear()} Your Website Name. All rights reserved.
      </div>
    </div>
  );
};

export default About;
