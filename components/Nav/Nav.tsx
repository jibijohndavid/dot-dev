import React from "react";

const Nav = () => {
  return (
    <nav className="container mx-auto w-1/2 h-16 shadow-md rounded-md backdrop-filter backdrop-blur-xl backdrop-saturate-200 bg-white bg-opacity-30 flex justify-around items-center">
      <p className="font-bold text-white text-lg uppercase">Home</p>
      <p className="font-bold text-white text-lg uppercase">About</p>
      <p className="font-bold text-white text-lg uppercase">Works</p>
      <p className="font-bold text-white text-lg uppercase">Blog</p>
      <p className="font-bold text-white text-lg uppercase">Contact</p>
    </nav>
  );
};

export default Nav;
