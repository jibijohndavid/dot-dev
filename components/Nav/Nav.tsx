import React from "react";

const Nav = () => {
  return (
    <nav className="container mx-auto w-1/2 h-16 rounded-md backdrop-filter backdrop-blur-2xl backdrop-saturate-200 bg-white bg-opacity-30 flex justify-around items-center">
      <p className="font-bold text-white text-base uppercase">Home</p>
      <p className="font-bold text-white text-base uppercase">About</p>
      <p className="font-bold text-white text-base uppercase">Works</p>
      <p className="font-bold text-white text-base uppercase">Blog</p>
      <p className="font-bold text-white text-base uppercase">Contact</p>
    </nav>
  );
};

export default Nav;
