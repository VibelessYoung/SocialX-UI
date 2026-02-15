import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
  const [open, setOpen] = useState(null);

  const data = [
    { id: 1, q: "آیا رایگان است؟", a: "بله نسخه پایه رایگان است." },
    { id: 2, q: "آیا رایگان است؟", a: "بله نسخه پایه رایگان است." },
    { id: 3, q: "آیا رایگان است؟", a: "بله نسخه پایه رایگان است." },
    { id: 4, q: "آیا رایگان است؟", a: "بله نسخه پایه رایگان است." },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-white/10 rounded-xl p-5 backdrop-blur-xl bg-white/5"
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setOpen(open === item.id ? null : item.id)}
            >
              <h3>{item.q}</h3>
              <span>{open === item.id ? "-" : "+"}</span>
            </div>

            <AnimatePresence>
              {open === item.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-400"
                >
                  {item.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
