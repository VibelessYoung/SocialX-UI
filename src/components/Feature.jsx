import React from "react";
import { motion } from "framer-motion";

function Feature() {
  const features = [
    "امنیت رمزگذاری پیشرفته",
    "مدیریت هوشمند گفتگوها",
    "سرعت فوق‌العاده بالا",
    "سازگار با تمام پلتفرم‌ها",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">ویژگی‌های حرفه‌ای</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
            >
              <h3 className="text-lg font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
