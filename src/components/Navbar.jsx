import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around p-5">
      <img src="/src/assets/logo.png" alt="" />
      <div className="flex gap-3 items-center">
        <a href="#" className="text-white">خانه</a>
        <a href="#" className="text-white">امکانات</a>
        <a href="#" className="text-white">دانلود</a>
        <a href="#" className="text-white">مشترک شوید</a>
        <button className="p-2 border border-white text-white rounded-sm text-sm">
          آموزش بیشتر
        </button>
      </div>
    </div>
  );
}

export default Navbar;
