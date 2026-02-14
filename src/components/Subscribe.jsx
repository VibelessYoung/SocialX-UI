import React from "react";

function Subscribe() {
  return (
    <div className="flex flex-col text-center py-44 text-white bg-cover bg-fixed bg-[url('/src/assets/subscribe-bg.png')]">
      <form
        action=""
        className="flex gap-2.5 justify-center items-center h-full"
      >
        <input
          type="text"
          placeholder="enter your email..."
          className="px-3 py-1 border border-white/50 rounded-sm outline-0"
        />
        <button className="bg-cyan-500 px-3 py-1 rounded-sm">Subscribe</button>
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
