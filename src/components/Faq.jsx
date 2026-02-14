import React, { useState } from "react";

function Faq() {
  const data = [
    {
      id: 1,
      question: "question...",
      answer: "answer...",
    },
    {
      id: 2,
      question: "question...",
      answer: "answer...",
    },
    {
      id: 3,
      question: "question...",
      answer: "answer...",
    },
    {
      id: 4,
      question: "question...",
      answer: "answer...",
    },
    {
      id: 5,
      question: "question...    ",
      answer: "answer...",
    },
  ];

  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div>
      <div className="flex flex-col items-center mx-5 md:mx-30 mt-20 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full border border-white/50 rounded-2xl px-5 transition-all duration-300 bg-cyan-600"
          >
            <div
              className="h-20 flex justify-between items-center cursor-pointer"
              onClick={() => toggle(item.id)}
            >
              <p className="text-white font-bold text-lg md:text-xl lg:text-2xl">
                {item.question}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-6 text-white transition-all duration-300 ${
                  openId === item.id ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openId === item.id
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white text-lg px-2 pb-5">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
