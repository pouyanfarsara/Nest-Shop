"use client";

import { useState } from "react";
import Button from "@/app/ui/components/Button/button";
import {
  Heart,
  Menu,
  MoveRight,
  Recycle,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import Link from "next/link";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="py-4 flex items-center justify-between border-b border-[#ECECEC] px-4 gap-4">
        {/* Logo */}
        <div className="logo">
          <Link href="/products">
            <img
              src="/Logo.png"
              alt="Nest Shop"
              className="w-32 sm:w-36 md:w-40 lg:w-44 max-h-12 object-contain"
            />
          </Link>
        </div>

        {/* Search (Desktop only) */}
        <div className="hidden lg:flex border border-[#3BB77E] rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-60 px-3 py-2 text-sm outline-none"
          />
          <button className="bg-[#3BB77E] cursor-pointer text-white px-5 text-sm">
            Search
          </button>
        </div>

        {/* Become Vendor */}
        <Button
          icon={<MoveRight width={20} />}
          text="Become vendor"
          className="hidden lg:flex gap-2 items-center border px-5 py-2 rounded-md border-[#ECECEC] text-[#3BB77E] cursor-pointer text-sm font-semibold whitespace-nowrap"
        />

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Compare */}
          <Link
            href="/"
            className="hidden lg:flex items-center gap-1 text-[#7E7E7E] text-sm"
          >
            <Recycle size={18} color="#253D4E" />
            <span>Compare</span>
          </Link>

          {/* Wishlist */}
          <Link
            href="/cart"
            className="hidden sm:flex items-center gap-1 text-[#7E7E7E] text-sm"
          >
            <Heart size={18} color="#253D4E" />
            <span>Wish List</span>
          </Link>

          {/* Cart */}
          <Link
            href="/Shoppingcart"
            className="flex items-center gap-1 text-[#7E7E7E] text-sm"
          >
            <ShoppingCart size={22} color="#253D4E" />
            <span className="hidden sm:inline">Cart</span>
          </Link>

          {/* Account */}
          <Link
            href="/auth"
            className="hidden lg:flex items-center gap-1 text-[#7E7E7E] text-sm"
          >
            <UserRound size={18} color="#253D4E" />
            <span>Account</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-72 h-full bg-white z-50 p-5 shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Menu</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-5 text-[#253D4E] font-semibold text-sm">
              <li>
                <Link href="/products" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/cart" onClick={() => setIsOpen(false)}>
                  Wish List
                </Link>
              </li>
              <li>
                <Link href="/Shoppingcart" onClick={() => setIsOpen(false)}>
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/auth" onClick={() => setIsOpen(false)}>
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
