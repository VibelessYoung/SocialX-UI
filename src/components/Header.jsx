import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

function Header() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full bottom-[-150px] right-[-100px] animate-pulse"></div>
      </div>

      <Navbar />
      <HeroSection />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 15 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white mt-2 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
