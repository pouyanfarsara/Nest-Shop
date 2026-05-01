"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ShopByCategories() {
  const categories = [
    { id: 1, name: "Milks and Dairies", items: 5, icon: "/category-1.png" },
    { id: 2, name: "Wines & Alcohol", items: 4, icon: "/category-2.png" },
    { id: 3, name: "Clothing & Beauty", items: 4, icon: "/category-3.png" },
    { id: 4, name: "Pet Foods & Toy", items: 2, icon: "/category-4.png" },
    { id: 5, name: "Packaged fast food", items: 11, icon: "/category-7.png" },
    { id: 6, name: "Baking material", items: 11, icon: "/category-8.png" },
    { id: 7, name: "Vegetables & tubers", items: 6, icon: "/category-11.png" },
    { id: 8, name: "Fresh Seafood", items: 5, icon: "/category-12.png" },
  ];

  return (
    <>
      <div className="container">
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h2 className="text-xl font-semibold text-[#253D4E]">
                Shop by Categories
              </h2>
              <button className="text-xs text-[#3BB77E] hover:underline">
                All Categories →
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-[#F2F3F4] grid place-items-center hover:bg-[#E9ECEF]">
                <ChevronLeft
                  size={16}
                  className="text-[#7E7E7E] cursor-pointer"
                />
              </button>
              <button className="w-8 h-8 rounded-full bg-[#F2F3F4] grid place-items-center hover:bg-[#E9ECEF]">
                <ChevronRight
                  size={16}
                  className="text-[#7E7E7E] cursor-pointer"
                />
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 ">
            {categories.map((c) => (
              <button
                key={c.id}
                className="bg-[#F4F6FA] rounded-2xl px-4 py-6 text-center hover:shadow-sm transition"
              >
                <div className="w-14 cursor-pointer h-14 mx-auto grid place-items-center">
                  <img
                    src={c.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                <p className="mt-3 text-xs font-semibold text-[#253D4E] leading-snug">
                  {c.name}
                </p>

                <p className="mt-1 text-[11px] text-[#ADADAD]">
                  {c.items} items
                </p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
