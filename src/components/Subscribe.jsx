import React from "react";



const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-300 dark:bg-gray-800 text-white "
    
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl text-gray-500 font-semibold">
            Join Our Mailing List
          </h1>
          <div className="flex flex-row gap-3">
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 placeholder-gray-400 shadow-lg rounded-lg"
          />
          <button className="bg-blue-500 p-4 rounded-lg shadow-md brightness-125 "> SignUp</button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
