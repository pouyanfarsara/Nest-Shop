"use client";

import { useMemo, useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "Field Roast Chao Cheese Creamy Original",
    image: "/products/product-1.png",
    price: 23.85,
    oldPrice: 32.32,
    quantity: 2,
  },
  {
    id: 2,
    name: "Fresh Organic Mustard Leaves",
    image: "/products/product-2.png",
    price: 25.85,
    oldPrice: 39.86,
    quantity: 1,
  },
  {
    id: 3,
    name: "Organic Green Bell Pepper",
    image: "/products/product-3.png",
    price: 28.85,
    oldPrice: 26.05,
    quantity: 1,
  },
];

const suggestedProducts = [
  {
    id: 11,
    name: "Fresh Organic Mustard Leaves",
    image: "/products/product-2.png",
    price: 28.85,
    oldPrice: 32.85,
    badge: "Hot",
  },
  {
    id: 12,
    name: "Organic Green Bell Pepper",
    image: "/products/product-3.png",
    price: 18.85,
    oldPrice: 24.85,
    badge: "20%",
  },
  {
    id: 13,
    name: "Organic Hass Green Avocado",
    image: "/products/product-4.png",
    price: 42.0,
    oldPrice: 52.85,
    badge: "Best",
  },
  {
    id: 14,
    name: "Unreal Dark Chocolate",
    image: "/products/product-5.png",
    price: 12.85,
    oldPrice: 22.95,
    badge: "Sale",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState("");

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = () => {
    console.log("Coupon:", coupon);
  };

  return (
    <div className="min-h-screen bg-[#f7f8f7] text-[#253D4E]">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="mb-4 text-sm text-gray-500">
          Home <span className="mx-2">›</span> Shopping Cart
        </div>

        <h1 className="mb-8 text-3xl font-bold md:text-5xl">
          Your Shopping Cart
        </h1>

        <div className="mb-8 flex flex-col gap-3 rounded-2xl bg-[#EAF6EE] px-5 py-4 text-sm text-[#253D4E] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3BB77E] text-white">
              ✓
            </div>
            <p>Free shipping on all orders over $50!</p>
          </div>

          <button className="font-medium text-[#3BB77E] hover:underline">
            Continue Shopping
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          <div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="hidden grid-cols-12 border-b px-6 py-5 text-sm font-semibold text-gray-500 md:grid">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              {cartItems.length === 0 ? (
                <div className="px-6 py-16 text-center text-gray-500">
                  Your cart is empty.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b last:border-b-0"
                  >
                    <div className="grid gap-4 px-4 py-5 md:grid-cols-12 md:px-6 md:py-6">
                      <div className="md:col-span-6">
                        <div className="flex gap-4">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-[#F4F6FA]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-contain p-2"
                            />
                          </div>

                          <div className="flex flex-1 flex-col justify-center">
                            <h3 className="max-w-md text-lg font-semibold leading-snug">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-400">
                              ${item.oldPrice.toFixed(2)} x {item.quantity}
                            </p>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="mt-3 w-fit text-sm text-red-500 hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:col-span-2 md:justify-center">
                        <span className="text-sm text-gray-500 md:hidden">
                          Price
                        </span>
                        <span className="text-2xl font-semibold text-[#253D4E]">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between md:col-span-2 md:justify-center">
                        <span className="text-sm text-gray-500 md:hidden">
                          Quantity
                        </span>

                        <div className="flex items-center overflow-hidden rounded-xl border">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="h-11 w-11 text-lg text-gray-600 transition hover:bg-gray-100"
                          >
                            −
                          </button>
                          <div className="flex h-11 w-11 items-center justify-center border-x text-base font-medium">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => increaseQty(item.id)}
                            className="h-11 w-11 text-lg text-gray-600 transition hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:col-span-2 md:justify-end">
                        <span className="text-sm text-gray-500 md:hidden">
                          Subtotal
                        </span>
                        <span className="text-2xl font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                    className="h-14 w-full rounded-xl border px-4 outline-none ring-0 transition focus:border-[#3BB77E]"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="h-14 rounded-xl bg-[#3BB77E] px-6 font-semibold text-white transition hover:bg-[#2ea76f]"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-2xl font-semibold">
                  Calculate Shipping
                </h3>

                <div className="space-y-3">
                  <select className="h-12 w-full rounded-xl border px-4 outline-none focus:border-[#3BB77E]">
                    <option>Select a country</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>France</option>
                  </select>

                  <select className="h-12 w-full rounded-xl border px-4 outline-none focus:border-[#3BB77E]">
                    <option>United Kingdom</option>
                    <option>England</option>
                    <option>Scotland</option>
                  </select>

                  <input
                    type="text"
                    placeholder="State / Country"
                    className="h-12 w-full rounded-xl border px-4 outline-none focus:border-[#3BB77E]"
                  />

                  <input
                    type="text"
                    placeholder="Postcode / ZIP"
                    className="h-12 w-full rounded-xl border px-4 outline-none focus:border-[#3BB77E]"
                  />

                  <button className="mt-2 h-12 rounded-xl bg-[#3BB77E] px-6 font-semibold text-white transition hover:bg-[#2ea76f]">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-6 text-3xl font-bold">You May Also Like</h2>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {suggestedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <span className="rounded-lg bg-[#3BB77E] px-3 py-1 text-xs font-semibold text-white">
                        {product.badge}
                      </span>
                    </div>

                    <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-[#F4F6FA]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-32 object-contain"
                      />
                    </div>

                    <h3 className="min-h-[56px] text-xl font-semibold leading-snug">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#3BB77E]">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </div>

                    <button className="mt-5 h-12 w-full rounded-xl bg-[#3BB77E] font-semibold text-white transition hover:bg-[#2ea76f]">
                      Add To Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl bg-[#EAF6EE]">
              <div className="grid items-center gap-6 px-6 py-8 md:grid-cols-2 md:px-10">
                <div>
                  <h3 className="max-w-md text-3xl font-bold leading-tight">
                    Stay home & get your daily needs from our shop
                  </h3>
                  <p className="mt-4 text-lg text-gray-500">
                    Start Your Daily Shopping with Nest
                  </p>

                  <div className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="h-12 w-full rounded-full border border-white bg-white px-5 outline-none"
                    />
                    <button className="h-12 rounded-full bg-[#3BB77E] px-6 font-semibold text-white">
                      Subscribe
                    </button>
                  </div>
                </div>

                <div className="flex justify-center md:justify-end">
                  <img
                    src="/banner-vegetable.png"
                    alt="vegetables"
                    className="max-h-56 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="border-b pb-4 text-3xl font-bold">
                Cart Summary
              </h2>

              <div className="space-y-4 py-5 text-lg">
                <div className="flex items-center justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#253D4E]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-500">
                  <span>Estimated Shipping</span>
                  <span className="font-medium text-[#253D4E]">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-5">
                <span className="text-2xl font-semibold">Total</span>
                <span className="text-4xl font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button className="mt-6 h-14 w-full rounded-xl bg-[#3BB77E] text-lg font-semibold text-white transition hover:bg-[#2ea76f]">
                Proceed To Checkout
              </button>

              <button className="mt-4 w-full text-center font-medium text-[#3BB77E] hover:underline">
                Continue Shopping
              </button>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Delivery Note
              </h3>
              <textarea
                rows="8"
                placeholder="Add a note for your order..."
                className="w-full rounded-xl border p-4 outline-none focus:border-[#3BB77E]"
              />
              <button className="mt-4 h-12 w-full rounded-xl bg-[#3BB77E] font-semibold text-white transition hover:bg-[#2ea76f]">
                Save Note
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}