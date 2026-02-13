import React from "react";

function Download() {
  return (
    <div className="bg-cyan-600 flex flex-col justify-center items-center h-80">
      <h1 className="text-2xl text-white font-medium">دانلود اپلیکیشن ما</h1>
      <div className="w-20 my-4 border-t border-white"></div>
      <small className="text-white">Lorem ipsum dolor sit amet. </small>
      <div className="flex gap-3 mt-4">
        <button className="border border-white p-2 text-white">windows</button>
        <button className="border border-white p-2 text-white">linux</button>
        <button className="border border-white p-2 text-white">mac</button>
      </div>
    </div>
  );
}

export default Download;
