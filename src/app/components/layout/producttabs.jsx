"use client";

import Button from "@/app/ui/components/Button/button";
import { ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "./Skeletonloading";
import Link from "next/link";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        console.log("products:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("fetch error:", err);
        setError("مشکلی در دریافت محصولات پیش آمده");
        setLoading(false);
      });
  }, []);

  const addToCart = async (product) => {
    try {
      const res = await fetch("http://localhost:3001/cart");
      const cart = await res.json();

      const existingItem = cart.find((item) => item.productId === product.id);

      if (existingItem) {
        await fetch(`http://localhost:3001/cart/${existingItem.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: existingItem.quantity + 1,
          }),
        });
      } else {
        await fetch("http://localhost:3001/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: product.id,
            quantity: 1,
          }),
        });
      }

      alert("محصول به سبد خرید اضافه شد");
    } catch (error) {
      console.log("add to cart error:", error);
      alert("خطا در اضافه کردن به سبد خرید");
    }
  };

  const filteredProducts =
    activeTab === "tab1"
      ? products
      : activeTab === "tab2"
      ? products.filter((product) => product.category === "Baking Material")
      : activeTab === "tab3"
      ? products.filter((product) => product.category === "Fresh Fruit")
      : activeTab === "tab4"
      ? products.filter((product) => product.category === "Dairy")
      : activeTab === "tab5"
      ? products.filter((product) => product.category === "Meats")
      : activeTab === "tab6"
      ? products.filter((product) => product.category === "Seafood")
      : products;

  if (loading) {
    return (
      <div className="tab">
        <div className="block w-full md:flex pt-5 items-center justify-between">
          <h5 className="font-semibold text-xl whitespace-nowrap">
            Popular Products
          </h5>

          <div className="tablist text-xs md:text-sm whitespace-nowrap flex gap-2.5 md:gap-5">
            <span className="text-[#3BB77E]">All</span>
            <span>Baking Material</span>
            <span>Fresh Fruits</span>
            <span>Milks & Dairies</span>
            <span>Meats</span>
            <span>Seafood</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-3 pt-6 px-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="pt-6 text-red-500">{error}</p>;
  }

  return (
    <div className="tab">
      <div className="block w-full md:flex pt-5 items-center justify-between">
        <h5 className="font-semibold text-xl whitespace-nowrap">
          Popular Products
        </h5>

        <div className="tablist text-xs md:text-sm whitespace-nowrap flex gap-2.5 md:gap-5">
          <button
            className={activeTab === "tab1" ? "text-[#3BB77E]" : ""}
            onClick={() => setActiveTab("tab1")}
          >
            All
          </button>

          <button
            className={activeTab === "tab2" ? "text-[#3BB77E]" : ""}
            onClick={() => setActiveTab("tab2")}
          >
            Baking Material
          </button>

          <button
            className={activeTab === "tab3" ? "text-[#3BB77E]" : ""}
            onClick={() => setActiveTab("tab3")}
          >
            Fresh Fruits
          </button>

          <button
            className={activeTab === "tab4" ? "text-[#3BB77E]" : ""}
            onClick={() => setActiveTab("tab4")}
          >
            Milks & Dairies
          </button>

          <button
            className={activeTab === "tab5" ? "text-[#3BB77E]" : ""}
            onClick={() => setActiveTab("tab5")}
          >
            Meats
          </button>

          <button
            className={activeTab === "tab6" ? "text-[#3BB77E]" : ""}
            onClick={() => setActiveTab("tab6")}
          >
            Seafood
          </button>
        </div>
      </div>

      <div className="content">
        <div className="tabcontent flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-3 pt-6 px-2">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative border border-[#ECECEC] rounded-2xl flex flex-col py-5 px-3 overflow-hidden"
              >
                {product.discountPercent > 0 && (
                  <div className="absolute top-0 left-0 bg-[#3BB77E] text-white text-[11px] px-3 py-1 rounded-br-2xl">
                    {product.discountPercent}%
                  </div>
                )}

                {product.badge && (
                  <div className="absolute top-0 right-0 bg-[#3BB77E] text-white text-[11px] px-3 py-1 rounded-bl-2xl">
                    {product.badge}
                  </div>
                )}

                <div className="w-full min-h-25 pt-4">
                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.image}
                      className="w-full h-full object-cover cursor-pointer"
                      alt={product.name}
                    />
                  </Link>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[#ADADAD] text-xs cursor-pointer">
                    {product.category}
                  </span>

                  <h5 className="text-xs text-[#253D4E] font-semibold cursor-pointer">
                    {product.name}
                  </h5>

                  <p className="text-[#B6B6B6] text-xs">By {product.brand}</p>

                  <div className="flex items-center gap-[2px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        className={
                          index < product.rating
                            ? "text-[#FDC040] fill-[#FDC040]"
                            : "text-[#D4D4D4]"
                        }
                      />
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <span className="text-[#3BB77E] text-sm cursor-pointer font-semibold">
                      ${product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-[#ADADAD] text-sm line-through cursor-pointer">
                        ${product.oldPrice}
                      </span>
                    )}

                    <Button
                      text="Add"
                      icon={<ShoppingCart size={13} />}
                      onClick={() => addToCart(product)}
                      className="px-3 flex flex-row-reverse bg-[#DEF9EC] text-[#3BB77E] items-center justify-center text-sm cursor-pointer rounded-xs"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}