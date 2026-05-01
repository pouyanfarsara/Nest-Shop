"use client";

export default function DealsSection() {
  const deals = [
    {
      id: 1,
      name: "Organic Cage Grade A Large Eggs",
      brand: "Hamburger Hel",
      price: 21.0,
      oldPrice: 24.0,
      image: "/background1.png",
    },
    {
      id: 2,
      name: "Naturally Flavored Cinnamon Vanilla",
      brand: "Hamburger Hel",
      price: 51.0,
      oldPrice: 55.0,
      image: "/background2.png",
    },
    {
      id: 3,
      name: "Seeds of Change Organic Watermelon",
      brand: "Hamburger Hel",
      price: 61.5,
      oldPrice: 66.0,
      image: "/background3.png",
    },
    {
      id: 4,
      name: "Nestle Coffee Mate Coffee Creamer",
      brand: "Totino’s Pizza",
      price: 52.8,
      oldPrice: 58.0,
      image: "/background4.png",
    },
  ];

  return (
    <>
      <div className="container w-full flex-col  justify-center items-center">
        <section className="mt-14  w-full  md:w-4/5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[#253D4E]">
              Deals Of The Day
            </h2>

            <button className="text-sm cursor-pointer text-[#3BB77E] hover:underline">
              All Deals →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((item) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-md">
                  <h4 className="text-sm font-semibold text-[#253D4E]">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-400 mt-1">By {item.brand}</p>

                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <span className="text-[#3BB77E] font-bold text-sm">
                        ${item.price}
                      </span>
                      <span className="text-gray-400 line-through text-xs ml-2">
                        ${item.oldPrice}
                      </span>
                    </div>

                    <button className="bg-[#DEF9EC] text-[#3BB77E] text-xs px-3 py-1 rounded-md hover:bg-[#3BB77E] hover:text-white transition">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
