"use client";

import { useEffect, useState } from "react";

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-[300px] h-[300px] rounded-full bg-[#c500ff] opacity-20 blur-[100px] z-50"
      style={{
        left: position.x - 150,
        top: position.y - 150,
      }}
    />
  );
};

export default GlowCursor;
