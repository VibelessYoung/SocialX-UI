import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

function Header() {
  return (
    <>
      <div className="h-screen w-full bg-blue-950">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default Header;
