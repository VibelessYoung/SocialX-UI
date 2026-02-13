import React from "react";

function HeroSection() {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row 
    items-center justify-center 
    gap-10 lg:gap-40 
    px-6 lg:px-20 
    py-16 lg:py-24"
    >
      <div className="relative group flex justify-center items-center">
        <div
          className="absolute -bottom-10 w-72 h-40 
  bg-cyan-500/30 
  blur-3xl 
  rounded-full 
  opacity-70 
  group-hover:opacity-100 
  transition-all duration-500"
        ></div>

        <img
          src="/src/assets/phone-header-bg.png"
          alt="phone"
          className="relative w-64 sm:w-80 lg:w-[400px] 
    transition-all duration-500 
    group-hover:-translate-y-4 
    group-hover:rotate-2 
    group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-right max-w-xl">
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl 
        border-b-2 border-white 
        pb-6 lg:pb-10 
        text-white font-bold leading-relaxed"
        >
          پیشرو در سطح جهانی
          <br />
          امنیت در همه پلتفرم ها
          <br />
          سیستم پیام رسانی
        </h1>

        <div
          className="flex flex-col sm:flex-row 
        gap-4 mt-6 
        w-full sm:w-auto 
        justify-center lg:justify-start"
        >
          <button className="bg-orange-500 px-5 py-2 text-white rounded-md w-full sm:w-auto cursor-pointer">
            چجوری کار میکنیم
          </button>

          <button className="px-5 py-2 border border-white text-white rounded-md w-full sm:w-auto cursor-pointer">
            بیاین شروع کنیم
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
