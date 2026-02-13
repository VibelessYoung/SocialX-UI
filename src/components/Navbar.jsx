import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-5">
      <img src="/src/assets/logo.png" alt="logo" className="w-24" />

      <div className="hidden sm:flex gap-6 items-center">
        <a href="#" className="text-white hover:text-orange-500">
          خانه
        </a>
        <a href="#" className="text-white hover:text-orange-500">
          امکانات
        </a>
        <a href="#" className="text-white hover:text-orange-500">
          دانلود
        </a>
        <a href="#" className="text-white hover:text-orange-500">
          مشترک شوید
        </a>

        <button className="p-2 border border-white text-white rounded-sm text-sm">
          آموزش بیشتر
        </button>
      </div>

      <div className="sm:hidden text-white cursor-pointer">
        {!isOpen ? (
          <svg
            onClick={() => setIsOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setIsOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>

      {isOpen && (
        <div
          className="absolute top-20 left-0 w-full 
bg-white/5 
backdrop-blur-xl 
border border-white/10 
shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] 
rounded-b-2xl
flex flex-col items-center gap-6 py-8
sm:hidden transition-all duration-300 mx-4"
        >
          <a href="#" className="text-white">
            خانه
          </a>
          <a href="#" className="text-white">
            امکانات
          </a>
          <a href="#" className="text-white">
            دانلود
          </a>
          <a href="#" className="text-white">
            مشترک شوید
          </a>
          <button className="p-2 border border-white text-white rounded-sm text-sm">
            آموزش بیشتر
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
