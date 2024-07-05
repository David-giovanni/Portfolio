import React from "react";
import Home from "../Assets/Home.jpg";

const Currently = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center xl:pt-60 pt-60">
      <img
        className="absolute w-full h-96 blur object-cover z-0"
        src={Home}
        alt="Maison"
      />
      <div className="absolute z-10 text-white text-center">
        <h1 className="text-4xl font-bold">Currently :</h1>
        <p className="mt-2">Fullstack Developer at Setitec</p>
      </div>
    </div>
  );
};

export default Currently;
