"use client";

import Button from "@/app/ui/components/Button/button";
import {
  Heart,
  MoveRight,
  Recycle,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <div className=" py-4 flex gap-15 items-center border-b  border-[#ECECEC]">
        <div className="logo">
          <Link href="/products">
            <img src="logo.png" className="w-35" />
          </Link>
        </div>
        <div className="w-auto hidden lg:flex rounded-xs border-[#3BB77E] border justify-between pl-5 py-1 pr-1 ">
          <input
            type="text"
            placeholder="Search for products ... "
            className="w-60 text-sm outline-0 border-0 py-1.5 "
          />
          <button className="bg-[#3BB77E] text-[#FFFFFF] rounded-sm px-5  cursor-pointer text-sm">
            Search
          </button>
        </div>

        <Button
          icon={<MoveRight width={20} />}
          text="Become vencor"
          className=" hidden lg:flex gap-2 items-center border px-5  py-1.5 rounded-sm shadow-xs border-[#ECECEC] text-[#3BB77E] cursor-pointer text-sm ml-15 font-semibold whitespace-nowrap"
        />

        <div className="leftsection ">
          <ul className="flex gap-7 whitespace-nowrap">
            <li className="hidden lg:block">
              <Link
                href="/"
                className="flex text-[#7E7E7E] gap-1 text-sm items-center"
              >
                <span>
                  <Recycle size={18} color="#253D4E" />
                </span>
                <span>Compare</span>
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="flex text-[#7E7E7E] gap-1 text-sm items-center"
              >
                <span>
                  <Heart size={18} color="#253D4E" />
                </span>
                <span>Wish List</span>
              </Link>
            </li>
            <li>
              <Link
                href="/Shoppingcart"
                className="flex text-[#7E7E7E] gap-1 text-sm items-center"
              >
                <span>
                  <ShoppingCart size={18} color="#253D4E" />
                </span>
                <span> Cart</span>
              </Link>
            </li>
            <li className="hidden lg:block">
              <Link
                href="/auth"
                className="flex text-[#7E7E7E] gap-1 text-sm items-center"
              >
                <span>
                  <UserRound size={18} color="#253D4E" />
                </span>
                <span>Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
