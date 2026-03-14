"use client";

export default function Banners() {
  const banners = [
    {
      id: 1,
      title: "Everyday Fresh &\nClean with Our\nProducts",
      btn: "Shop Now →",
      image: "Banner1.png",
      bg: "bg-[#F3E9D7]",
    },
    {
      id: 2,
      title: "Make your Breakfast\nHealthy and Easy",
      btn: "Shop Now →",
      image: "Banner2.png",
      bg: "bg-[#F6E7EA]",
    },
    {
      id: 3,
      title: "The best Organic\nProducts Online",
      btn: "Shop Now →",
      image: "Banner33.png",
      bg: "bg-[#E6EEF7]",
    },
  ];

  return (
    <div className="container w-full mx-auto px-4 hidden md:block">
      <section className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
          {banners.map((b) => (
            <div
              key={b.id}
              className={`${b.bg} rounded-2xl p-8 flex items-center justify-between overflow-hidden bg-no-repeat bg-right bg-contain min-h-[200px]`}
              style={{
                backgroundImage: `url(/${b.image})`,
              }}
            >
              <div className="max-w-[60%]">
                <h3 className="text-[#253D4E] font-semibold text-lg leading-snug whitespace-pre-line">
                  {b.title}
                </h3>

                <button className="mt-5 inline-flex items-center bg-[#3BB77E] text-white text-xs px-4 whitespace-nowrap py-2 rounded-md hover:opacity-90 transition">
                  {b.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
