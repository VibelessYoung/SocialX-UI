import React from "react";

function Feature() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-orange-600 mx-auto"
          >
            <path
              fillRule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="text-3xl font-bold mt-6 mb-4">ویژگی های اصلی</h2>

          <p dir="rtl" className="text-gray-500 max-w-2xl mx-auto">
            یک توضیح کوتاه درباره امکانات محصول که باعث می‌شود کاربر متوجه ارزش
            آن شود.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            {[
              "برای شما طراحی شده است",
              "تاریخچه خود را نگه دارید",
              "در ارتباط باش",
              "کنترل را به دست گرفتن",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
              >
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2L15 8H9L12 2Z" />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="/src/assets/phone-features.png"
              alt="phone"
              className="w-72 md:w-96 lg:w-[420px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
