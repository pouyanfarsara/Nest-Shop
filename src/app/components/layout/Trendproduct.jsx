"use client";
import Image from "next/image";

const productsData = {
  "Top Selling": [
    {
      id: 1,
      name: "All Natural Style Chicken Meatballs",
      price: 52.85,
      oldPrice: 55.8,
      image: "/1.png",
    },
    {
      id: 2,
      name: "Angie's Sweet & Salty Kettle",
      price: 48.85,
      oldPrice: 52.8,
      image: "/2.png",
    },
    {
      id: 3,
      name: "Gorton's Beer Battered Fish Fillets",
      price: 23.85,
      oldPrice: 25.8,
      image: "/3.png",
    },
  ],
  "Trending Products": [
    {
      id: 4,
      name: "Seeds of Change Organic Watermelon",
      price: 61.5,
      oldPrice: 66,
      image: "/4.png",
    },
    {
      id: 5,
      name: "Frozen Vegetables Broccoli",
      price: 71,
      oldPrice: 75,
      image: "/5.png",
    },
    {
      id: 6,
      name: "Gorton's Beer Battered Fish Fillets",
      price: 23.85,
      oldPrice: 25.8,
      image: "/6.png",
    },
  ],
  "Recently Added": [
    {
      id: 7,
      name: "Seeds of Change Organic Red Rice",
      price: 28.85,
      oldPrice: 32.8,
      image: "/7.png",
    },
    {
      id: 8,
      name: "All Natural Style Chicken Meatballs",
      price: 52.85,
      oldPrice: 55.8,
      image: "/8.png",
    },
    {
      id: 9,
      name: "Angie's Sweet & Salty Kettle Corn",
      price: 48.85,
      oldPrice: 52.8,
      image: "/9.png",
    },
  ],
  "Top Rated": [
    {
      id: 10,
      name: "Blue Almonds Lightly Salted",
      price: 23.85,
      oldPrice: 25.8,
      image: "/10.png",
    },
    {
      id: 11,
      name: "Organic Cage Grade A Large Eggs",
      price: 21,
      oldPrice: 24,
      image: "/2.png",
    },
    {
      id: 12,
      name: "All Natural Style Chicken Meatballs",
      price: 52.85,
      oldPrice: 55.8,
      image: "/3.png",
    },
  ],
};

function ProductCard({ product }) {
  return (
    <div className="flex gap-4 border-b pb-4 last:border-none ">
      <div className="w-18 h-18 relative  rounded-md cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-1"
        />
      </div>

      <div className="flex flex-col">
        <h4 className="text-sm font-medium text-gray-800 leading-snug cursor-pointer">
          {product.name}
        </h4>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-600 font-semibold text-sm cursor-pointer">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-xs cursor-pointer">
            ${product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(productsData).map(([title, products]) => (
          <div key={title}>
            <h3 className="text-lg font-semibold mb-6">{title}</h3>

            <div className="flex flex-col gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
