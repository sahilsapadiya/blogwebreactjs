  // import React from "react";

  // const Home = () => {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-[#11162A] text-white px-4">
  //       <h1 className="text-3xl md:text-5xl font-bold text-center">
  //         Welcome To My Blog Website 
  //       </h1>
  //     </div>
  //   );
  // };

  // export default Home;


//   import React from "react";
// import Blog from "./Blog"; 

// const Home = () => {
//   return (
//     <div className="bg-[#26231f] text-white">
//       <div className="flex justify-center items-center min-h-[50vh] px-4">
//         <h1 className="text-3xl md:text-5xl font-bold text-center">
//           Welcome To My Website
//           <h2 className="bg-[#707070] text-white text-4xl font-bold text-center py-4 px-6 rounded-[20px] mt-[40px] ">
//   OURBLOG
// </h2>
//         </h1>


//       </div>
//       <Blog /> 
//     </div>
//   );
// };

// export default Home;



import React from "react";
import Blog from "./Blog";

const Home = () => {
  return (
    <div className="bg-[#26231f] text-white flex flex-col min-h-screen">

      <div className="flex justify-center items-center min-h-[50vh] px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Welcome To My Website
          <h2 className="bg-[#707070] text-white text-4xl font-bold text-center py-4 px-6 rounded-[20px] mt-[40px]">
            OURBLOG
          </h2>
        </h1>
      </div>

      <Blog />


      <footer className="h-[70px] items-center flex">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4 ">
          <p>&copy; {new Date().getFullYear()} YourWebsiteName. All rights reserved.</p>
          <div className="flex gap-4">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
