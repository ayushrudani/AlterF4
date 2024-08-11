import React from "react";

const Hero = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-start"
      style={{
        backgroundImage: "url('./images/login_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Shadow Div */}
      <div className="w-full h-full bg-black bg-opacity-50 absolute "></div>
      <div className="flex flex-col items-start justify-center gap-y-[15px] px-40 text-white z-10">
        <p className="text-xl">Good guid!</p>
        <h1 className="text-6xl font-bold text-start">
          Explore the world of <br />
          Agriculture with us.
        </h1>

        <div className="flex flex-row gap-x-[15px] mt-5">
          <button className="px-8 py-3 bg-[#47a11d] rounded-[32px]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
