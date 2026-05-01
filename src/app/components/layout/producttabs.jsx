"use client";

import { ShoppingCart, Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ProductCardSkeleton from "./Skeletonloading";
import Link from "next/link";
import Button from "@/app/ui/components/Button/button";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : data.products || []);
      } catch (err) {
        console.log("products load error:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    try {
      const storedCart = localStorage.getItem("cart");
      const cart = storedCart ? JSON.parse(storedCart) : [];

      const existingItem = cart.find(
        (item) => String(item.productId) === String(product.id)
      );

      const updatedCart = existingItem
        ? cart.map((item) =>
            String(item.productId) === String(product.id)
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [
            ...cart,
            {
              id: crypto.randomUUID(),
              productId: String(product.id),
              quantity: 1,
            },
          ];

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Product added to cart");
    } catch (error) {
      console.log("add to cart error:", error);
      alert("Failed to add product to cart");
    }
  };

  const tabs = [
    { id: "tab1", label: "All" },
    { id: "tab2", label: "Baking Material" },
    { id: "tab3", label: "Fresh Fruits" },
    { id: "tab4", label: "Milks & Dairies" },
    { id: "tab5", label: "Meats" },
    { id: "tab6", label: "Seafood" },
  ];

  const filteredProducts = useMemo(() => {
    if (activeTab === "tab1") return products;

    const categories = {
      tab2: "Baking Material",
      tab3: "Fresh Fruit",
      tab4: "Dairy",
      tab5: "Meats",
      tab6: "Seafood",
    };

    return products.filter(
      (product) => product.category === categories[activeTab]
    );
  }, [activeTab, products]);

  if (loading) {
    return (
      <div className="w-full px-4 sm:px-5 lg:px-0">
        <div className="flex flex-col gap-4 pt-5">
          <h5 className="font-semibold text-xl text-[#253D4E]">
            Popular Products
          </h5>

          <div className="flex gap-3 overflow-x-auto whitespace-nowrap pb-2 text-sm">
            {tabs.map((tab) => (
              <span key={tab.id}>{tab.label}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-6">
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
    <div className="w-full px-4 sm:px-5 lg:px-0">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-5">
        <h5 className="font-semibold text-xl text-[#253D4E]">
          Popular Products
        </h5>

        <div className="flex gap-3 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 transition ${
                activeTab === tab.id
                  ? "bg-[#3BB77E] text-white font-semibold"
                  : "bg-[#F3F5F7] text-[#253D4E]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex gap-4 sm:block border border-[#ECECEC] rounded-2xl p-3 sm:p-4 bg-white hover:shadow-lg transition-all duration-300"
          >
            <Link
              href={`/products/${product.id}`}
              className="shrink-0 w-32 sm:w-full"
            >
              <div className="bg-[#F7F8FA] rounded-2xl p-3 sm:p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-28 sm:h-36 object-contain group-hover:scale-105 transition"
                />
              </div>
            </Link>

            <div className="flex flex-1 flex-col min-w-0">
              <span className="text-xs text-gray-400 truncate">
                {product.category}
              </span>

              <Link href={`/products/${product.id}`}>
                <h5 className="text-sm sm:text-[15px] font-semibold mt-1 line-clamp-2 text-[#253D4E] hover:text-[#3BB77E] transition">
                  {product.name}
                </h5>
              </Link>

              <div className="flex mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={
                      i < product.rating
                        ? "text-[#FDC040] fill-[#FDC040]"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 mt-auto pt-3">
                <span className="text-[#3BB77E] font-bold text-base">
                  ${product.price}
                </span>

                <Button
                  text="Add"
                  icon={<ShoppingCart size={20} />}
                  onClick={() => addToCart(product)}
                  className="flex cursor-pointer items-center gap-1.5 bg-[#DEF9EC] text-[#3BB77E] px-3 py-2 rounded-lg text-xs font-semibold hover:bg-[#3BB77E] hover:text-white transition"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}