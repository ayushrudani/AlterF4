import React from "react";

const Home = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-start"
      style={{
        backgroundImage: "url('./images/login_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Shadow Div */}
      <div className="w-full h-full bg-black bg-opacity-50 absolute "></div>
      <div className="flex flex-col items-start justify-center gap-y-[15px] px-40 text-white z-10">
        <p className="text-xl">New feature available!</p>
        <h1 className="text-5xl font-bold text-start">
          You'r guid to morden Agriculture
        </h1>
        <h6 className="text-start text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h6>
        <div className="flex flex-row gap-x-[15px] mt-5">
          <button className="px-6 py-4 bg-[#47a11d] rounded-lg">
            Get Started
          </button>
          <button className="px-6 border border-white py-4 bg-transparent rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
