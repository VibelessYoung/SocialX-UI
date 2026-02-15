function Download() {
  return (
    <section className="py-20 bg-cyan-600 text-center text-white relative overflow-hidden">
      <h2 className="text-3xl font-bold">دانلود اپلیکیشن</h2>
      <p className="mt-4 opacity-80">
        همین حالا روی سیستم عامل مورد نظر خود نصب کنید
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {["Windows", "Mac", "Linux"].map((item, i) => (
          <button
            key={i}
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-cyan-600 transition shadow-lg"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Download;
