import React from "react";

function Subscribe() {
  return (
    <div className="flex flex-col text-center py-44 text-white bg-cover bg-fixed bg-[url('/src/assets/subscribe-bg.png')]">
      <form
        action=""
        className="flex gap-2.5 justify-center items-center h-full"
      >
        <input
          type="email"
          placeholder="enter your email..."
          className="px-3 py-1 border border-white/50 rounded-sm outline-0"
        />
        <button
          className="relative px-6 py-2 rounded-md text-white font-medium
                   bg-cyan-500
                   shadow-[0_0_15px_rgba(6,182,212,0.7)]
                   hover:shadow-[0_0_25px_rgba(6,182,212,1)]
                   transition duration-300"
        >
          Subscribe
        </button>
      </form>
      <div className="flex gap-4 text-2xl text-white justify-center mt-10">
        <i className="fab fa-instagram hover:text-pink-500 transition"></i>
        <i className="fab fa-telegram hover:text-sky-400 transition"></i>
        <i className="fab fa-twitter hover:text-sky-500 transition"></i>
        <i className="fab fa-linkedin hover:text-blue-600 transition"></i>
        <i className="fab fa-youtube hover:text-red-600 transition"></i>
      </div>
    </div>
  );
}

export default Subscribe;
