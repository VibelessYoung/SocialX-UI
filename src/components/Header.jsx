import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

function Header() {
  return (
    <div className="relative h-screen w-full bg-blue-950">
      <Navbar />
      <HeroSection />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 text-white animate-bounce"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
        />
      </svg>
    </div>
  );
}

export default Header;
