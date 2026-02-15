import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 pt-40 pb-20 gap-20">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center lg:text-right"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
          آینده ارتباطات
          <span className="text-cyan-400 block mt-2">امن، سریع و هوشمند</span>
        </h1>

        <p className="text-gray-400 mt-6 leading-relaxed">
          تجربه‌ای متفاوت از پیام‌رسانی در سطح جهانی با امنیت فوق‌العاده و
          عملکرد بی‌نقص.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
          <button className="px-6 py-3 bg-cyan-500 rounded-full shadow-lg hover:scale-105 transition">
            شروع رایگان
          </button>
          <button className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition">
            بیشتر بدانید
          </button>
        </div>
      </motion.div>

      {/* Image */}
      <motion.img
        src="/src/assets/phone-header-bg.png"
        alt="phone"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-72 lg:w-[420px] drop-shadow-2xl hover:rotate-3 hover:scale-105 transition"
      />
    </section>
  );
}

export default HeroSection;
