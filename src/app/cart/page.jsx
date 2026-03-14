import { Star, SlidersHorizontal, Grid3X3, ChevronDown } from "lucide-react";
import Button from "@/app/ui/components/Button/button";
import TopHeader from "../components/layout/topheader";
import ShopHeader from "../components/layout/shopheader";
import FooterTop from "../components/layout/Footer";
import FooterBottom from "../components/layout/FooterBottom";

const products = [
  {
    id: 1,
    name: "Field Roast Chao Cheese Creamy Original",
    brand: "Hodo Foods",
    image: "/2.png",
    price: 238.85,
    oldPrice: 245.8,
    badge: "Hot",
    badgeColor: "bg-[#F74B81]",
  },
  {
    id: 2,
    name: "Fresh Organic Mustard Leaves",
    brand: "Hodo Foods",
    image: "/3.png",
    price: 238.85,
    oldPrice: 245.8,
    badge: "Sale",
    badgeColor: "bg-[#67BCEE]",
  },
  {
    id: 3,
    name: "Organic Green Bell Pepper",
    brand: "Hodo Foods",
    image: "/4.png",
    price: 238.85,
    oldPrice: 245.8,
    badge: "New",
    badgeColor: "bg-[#3BB77E]",
  },
  {
    id: 4,
    name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    brand: "Hodo Foods",
    image: "/5.png",
    price: 238.85,
    oldPrice: 245.8,
    badge: "Hot",
    badgeColor: "bg-[#F74B81]",
  },
];

const categories = [
  { id: 1, name: "Milks & Dairies", count: 6 },
  { id: 2, name: "Clothing", count: 6 },
  { id: 3, name: "Pet Foods", count: 7 },
  { id: 4, name: "Baking material", count: 11 },
  { id: 5, name: "Fresh Fruit", count: 14 },
];

const newProducts = [
  {
    id: 1,
    name: "Chen Cardigan",
    image: "/1.png",
    price: "$99.50",
  },
  {
    id: 2,
    name: "Seeds of Change",
    image: "/2.png",
    price: "$89.50",
  },
  {
    id: 3,
    name: "Colorful Jacket",
    image: "/3.png",
    price: "$25.00",
  },
];

const tags = ["Cabbage", "Broccoli", "Artichoke", "Celery", "Spinach"];

export default function Cart() {
  return (
    <main className="bg-white container">
      <ShopHeader />
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="rounded-[24px] bg-[#EAF8F0] px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#253D4E] md:text-4xl">
                Snack
              </h1>

              <div className="mt-3 flex items-center gap-2 text-xs text-[#7E7E7E]">
                <span className="text-[#3BB77E]">Home</span>
                <span>›</span>
                <span>Shop</span>
                <span>›</span>
                <span>Snack</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="rounded-full border border-[#D9EAD3] bg-white px-4 py-2 text-xs text-[#3BB77E] transition hover:bg-[#3BB77E] hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-[#7E7E7E]">
                We found
                <span className="font-semibold text-[#3BB77E]">29</span> items
                for you!
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 rounded-md border border-[#ECECEC] px-3 py-2 text-xs text-[#7E7E7E]">
                  <Grid3X3 size={14} />
                  Show: 50
                  <ChevronDown size={14} />
                </button>

                <button className="flex items-center gap-2 rounded-md border border-[#ECECEC] px-3 py-2 text-xs text-[#7E7E7E]">
                  <SlidersHorizontal size={14} />
                  Sort by: Featured
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative rounded-[20px] border border-[#ECECEC] bg-white p-4 transition hover:shadow-md"
                >
                  <div
                    className={`absolute left-0 top-0 rounded-br-2xl rounded-tl-[20px] px-3 py-1 text-[11px] text-white ${product.badgeColor}`}
                  >
                    {product.badge}
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-[160px_1fr]">
                    <div className="flex items-center justify-center rounded-2xl bg-white p-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[180px] w-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <span className="mb-1 text-xs text-[#B6B6B6]">
                        {product.brand}
                      </span>

                      <h3 className="mb-2 max-w-[500px] text-2xl font-semibold text-[#253D4E]">
                        {product.name}
                      </h3>

                      <div className="mb-3 flex items-center gap-1">
                        <Star
                          size={14}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <Star
                          size={14}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <Star
                          size={14}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <Star
                          size={14}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <Star
                          size={14}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <span className="ml-2 text-xs text-[#B6B6B6]">
                          (4.0)
                        </span>
                        <span className="ml-2 text-xs text-[#B6B6B6]">
                          500g
                        </span>
                      </div>

                      <p className="mb-4 max-w-[620px] text-sm leading-6 text-[#7E7E7E]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam beatae consectetur, atque inventore aliquam adipisci
                        perspiciatis nostrum qui consequatur praesentium?
                      </p>

                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-3xl font-bold text-[#3BB77E]">
                          ${product.price}
                        </span>
                        <span className="text-base text-[#B6B6B6] line-through">
                          ${product.oldPrice}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <Button
                          text="Add to Cart"
                          className="rounded-md bg-[#3BB77E] px-5 py-2 text-sm text-white"
                        />
                        <button className="text-sm text-[#7E7E7E] transition hover:text-[#3BB77E]">
                          + Add Compare
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[18px] border border-[#ECECEC] bg-white p-5">
              <h3 className="mb-4 text-xl font-semibold text-[#253D4E]">
                Category
              </h3>

              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="flex w-full items-center justify-between rounded-xl border border-[#F2F3F4] px-4 py-3 text-sm text-[#253D4E] transition hover:border-[#3BB77E] hover:text-[#3BB77E]"
                  >
                    <span>{category.name}</span>
                    <span className="rounded-full bg-[#EAF8F0] px-2 py-0.5 text-xs text-[#3BB77E]">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] border border-[#ECECEC] bg-white p-5">
              <h3 className="mb-4 text-xl font-semibold text-[#253D4E]">
                Fill by price
              </h3>

              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  className="w-full accent-[#3BB77E]"
                />
              </div>

              <div className="mb-4 flex items-center justify-between text-xs text-[#7E7E7E]">
                <span>
                  From: <span className="text-[#3BB77E]">$0</span>
                </span>
                <span>
                  To: <span className="text-[#3BB77E]">$1,000</span>
                </span>
              </div>

              <div className="space-y-3 text-sm text-[#7E7E7E]">
                <div>
                  <p className="mb-2 font-medium text-[#253D4E]">Color</p>
                  <label className="mb-1 flex items-center gap-2">
                    <input type="checkbox" />
                    Red (56)
                  </label>
                  <label className="mb-1 flex items-center gap-2">
                    <input type="checkbox" />
                    Green (78)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Blue (54)
                  </label>
                </div>

                <div>
                  <p className="mb-2 font-medium text-[#253D4E]">
                    Item Condition
                  </p>
                  <label className="mb-1 flex items-center gap-2">
                    <input type="checkbox" />
                    New (1506)
                  </label>
                  <label className="mb-1 flex items-center gap-2">
                    <input type="checkbox" />
                    Refurbished (27)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Used (45)
                  </label>
                </div>
              </div>

              <button className="mt-5 rounded-md bg-[#3BB77E] px-5 py-2 text-sm text-white">
                Filter
              </button>
            </div>

            <div className="rounded-[18px] border border-[#ECECEC] bg-white p-5">
              <h3 className="mb-4 text-xl font-semibold text-[#253D4E]">
                New products
              </h3>

              <div className="space-y-4">
                {newProducts.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="h-20 w-20 overflow-hidden rounded-xl border border-[#ECECEC]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#253D4E]">
                        {item.name}
                      </h4>

                      <div className="my-1 flex items-center gap-1">
                        <Star
                          size={12}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <Star
                          size={12}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <Star
                          size={12}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <Star
                          size={12}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                        <Star
                          size={12}
                          className="fill-[#FDC040] text-[#FDC040]"
                        />
                      </div>

                      <span className="text-sm font-bold text-[#3BB77E]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <FooterTop />
      <FooterBottom />
    </main>
  );
}
