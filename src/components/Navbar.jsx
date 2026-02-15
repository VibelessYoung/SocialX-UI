import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold tracking-widest">LOGO</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {["خانه", "امکانات", "دانلود", "اشتراک"].map((item, i) => (
            <a key={i} href="#" className="relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <button className="px-5 py-2 bg-cyan-500 rounded-full hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30">
            شروع کنید
          </button>
        </div>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-xl flex flex-col items-center gap-6 py-10"
          >
            {["خانه", "امکانات", "دانلود", "اشتراک"].map((item, i) => (
              <a key={i} href="#" className="text-lg">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
