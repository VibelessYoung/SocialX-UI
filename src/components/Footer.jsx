function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h3 className=" text-xl font-bold mb-4 text-cyan-400">Brand</h3>
          <p className="text-sm" dir="rtl">
            نسل جدید ارتباطات دیجیتال با امنیت و سرعت بی‌نظیر.
          </p>
        </div>

        <div>
          <h4 className="text-cyan-400 mb-4">محصول</h4>
          <ul className="space-y-2">
            <li>امکانات</li>
            <li>قیمت گذاری</li>
            <li>دانلود</li>
          </ul>
        </div>

        <div>
          <h4 className="text-cyan-400 mb-4">شرکت</h4>
          <ul className="space-y-2">
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>فرصت های شغلی</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">خبرنامه</h4>
          <input
            type="email"
            placeholder="ایمیل شما"
            className="w-full p-2 rounded bg-white/10 border border-white/20 outline-none"
          />
        </div>
      </div>

      <div className="text-center mt-12 text-sm border-t border-white/10 pt-6">
        © 2026 All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
