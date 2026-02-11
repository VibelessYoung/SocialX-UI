import React from "react";

function HeroSection() {
  return (
    <div className="flex gap-56 justify-center items-center py-20">
      <img src="/src/assets/phone-header-bg.png" alt="" />
      <div className="flex flex-col">
        <h1 className="text-4xl border-b-2 pb-10 border-b-white text-white font-bold text-center">
          پیشرو در سطح جهانی
          <br />
          امنیت در همه پلتفرم ها
          <br />
          سیستم پیام رسانی
          <br />
        </h1>
        <div className="flex gap-3 mt-5 justify-center">
          <button className="bg-orange-500 p-2 text-white rounded-sm">
            چجوری کار میکنیم
          </button>
          <button className="p-2 border border-white text-white rounded-sm">
            بیاین شروع کنیم
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
