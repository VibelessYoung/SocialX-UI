import React from "react";
import { motion } from "framer-motion";

function Subscribe() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/subscribe-bg.png')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          عضو خبرنامه ما شوید
        </h2>

        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          جدیدترین بروزرسانی‌ها و اخبار محصول را مستقیماً در ایمیل خود دریافت
          کنید.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="ایمیل شما..."
            className="px-5 py-3 rounded-full bg-white/10 border border-white/20 
                       backdrop-blur-md outline-none focus:border-cyan-400 
                       transition w-full sm:w-80"
          />

          <button
            className="px-8 py-3 rounded-full bg-cyan-500 
                       shadow-lg shadow-cyan-500/40 
                       hover:scale-105 hover:shadow-cyan-400/70 
                       transition duration-300"
          >
            عضویت
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center mt-12 text-2xl">
          <i className="fab fa-instagram hover:text-pink-500 transition hover:scale-125"></i>
          <i className="fab fa-telegram hover:text-sky-400 transition hover:scale-125"></i>
          <i className="fab fa-twitter hover:text-sky-500 transition hover:scale-125"></i>
          <i className="fab fa-linkedin hover:text-blue-600 transition hover:scale-125"></i>
          <i className="fab fa-youtube hover:text-red-600 transition hover:scale-125"></i>
        </div>
      </motion.div>
    </section>
  );
}

export default Subscribe;
