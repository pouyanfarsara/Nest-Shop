"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Heart, ShoppingCart, Shuffle, Star } from "lucide-react";
import Button from "@/app/ui/components/Button/button";

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params?.slug;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!slug) return;

    fetch(`http://localhost:3001/products/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("product fetch error:", err);
        setError("محصول پیدا نشد");
        setLoading(false);
      });
  }, [slug]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="grid lg:grid-cols-2 gap-10 animate-pulse">
          <div className="border border-[#ECECEC] rounded-2xl p-8">
            <div className="w-full h-[420px] bg-gray-200 rounded-2xl"></div>
            <div className="flex gap-4 mt-6">
              <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>
              <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>
              <div className="w-20 h-20 bg-gray-200 rounded-xl"></div>
            </div>
          </div>

          <div>
            <div className="w-20 h-6 bg-gray-200 rounded mb-4"></div>
            <div className="w-2/3 h-8 bg-gray-200 rounded mb-4"></div>
            <div className="w-32 h-5 bg-gray-200 rounded mb-6"></div>
            <div className="w-40 h-10 bg-gray-200 rounded mb-6"></div>
            <div className="w-full h-24 bg-gray-200 rounded mb-6"></div>
            <div className="w-52 h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto py-10 px-4">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="border border-[#ECECEC] rounded-2xl p-6 md:p-8">
          <div className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="flex gap-4 mt-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative w-20 h-20 border border-[#ECECEC] rounded-xl overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="80px"
                  className="cursor-pointer object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          {product.badge && (
            <span className="inline-block bg-[#FDECEC] text-[#F74B81] text-xs px-3 py-1 rounded-md mb-4">
              {product.badge}
            </span>
          )}

          <h1 className="text-2xl md:text-4xl font-semibold text-[#253D4E] leading-tight mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-[2px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={
                    index < product.rating
                      ? "text-[#FDC040] fill-[#FDC040]"
                      : "text-[#D4D4D4]"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-[#B6B6B6]">(32 reviews)</span>
          </div>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl font-semibold text-[#3BB77E]">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-xl text-[#B6B6B6] line-through mb-1">
                ${product.oldPrice}
              </span>
            )}

            {product.discountPercent > 0 && (
              <span className="text-lg text-[#F74B81] font-semibold mb-1">
                {product.discountPercent}% Off
              </span>
            )}
          </div>

          <p className="text-[#7E7E7E] leading-7 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            <span className="text-[#7E7E7E]">
              Brand: <span className="text-[#3BB77E]">{product.brand}</span>
            </span>
            <span className="text-[#7E7E7E]">
              Category:{" "}
              <span className="text-[#3BB77E]">{product.category}</span>
            </span>
          </div>

          <div className="sm:flex  justify-center items-center gap-4 mb-6">
            <div className=" flex flex-col sm:flex sm:flex-row  gap-2">
              <div className="flex items-center border border-[#3BB77E] rounded-md overflow-hidden">
                <button
                  onClick={decreaseQty}
                  className="cursor-pointer  px-4 py-2 text-[#3BB77E]  text-lg"
                >
                  -
                </button>
                <span className="px-4 py-2 min-w-10 text-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQty}
                  className="cursor-pointer px-4 py-2 text-[#3BB77E] text-lg"
                >
                  +
                </button>
              </div>
              <Button
                text="Add to cart"
                icon={<ShoppingCart size={16} />}
                className="cursor-pointer  px-6 py-3 flex flex-row-reverse gap-2 bg-[#3BB77E] text-white items-center justify-center rounded-md whitespace-nowrap "
              />
            </div>

            <div className="react flex gap-1 ">
              {" "}
              <button className=" cursor-pointer w-11 h-11 border border-[#ECECEC] rounded-md flex items-center justify-center text-[#3BB77E]">
                <Heart size={18} />
              </button>
              <button className="cursor-pointer w-11 h-11 border border-[#ECECEC] rounded-md flex items-center justify-center text-[#3BB77E]">
                <Shuffle size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
