import { ChevronDown, Flame, Headset } from "lucide-react";
import Link from "next/link";

export default function ShopNavbar() {
  return (
    <>
      <div className="lg:flex items-center pt-3 justify-between hidden">
        <div className="select">
          <select className="bg-[#3BB77E] text-[#ffff] px-3 outline-0 border-0 py-2 flex items-center">
            <option>Browse All Categories</option>
            <option>Browse All Categories</option>
          </select>
        </div>

        <div className="Navbarlist">
          <ul className="flex gap-9 text-[#253D4E] font-semibold text-sm ">
            <li className="flex items-center">
              <span>
                <Flame color="#3BB77E" size={18} />
              </span>
              <span>Hot Deals</span>
            </li>
            <li className="relative">
              <select
                name=""
                id=""
                className=" appearance-none outline-0 border-0"
              >
                <option value="">Home</option>
                <option value="">Home</option>
              </select>
              <ChevronDown className="absolute top-1.5 left-9.5" size={14} />
            </li>
            <li>  <Link href="/about">About</Link>  </li>
            <li className="relative">
              <select
                name=""
                id=""
                className="outline-0 appearance-none border-0"
              >
                <option value="">Shop</option>
                <option value="">Home</option>
              </select>
              <ChevronDown className="absolute top-1.5 left-8" size={14} />
            </li>
            <li className="relative">
              <select
                name=""
                id=""
                className=" appearance-none outline-0 border-0"
              >
                <option value="">Mega vendor</option>
                <option value="">Home</option>
              </select>
              <ChevronDown className="absolute top-1.5 left-21" size={14} />
            </li>
            <li className="relative">
              <select
                name=""
                id=""
                className="appearance-none outline-0 border-0"
              >
                <option value="">Vendors</option>
                <option value="">Home</option>
              </select>
              <ChevronDown className="absolute top-1.5 left-13" size={14} />
            </li>
            <li>
              <select
                name=""
                id=""
                className=" appearance-none outline-0 border-0"
              >
                <option value="">Blog</option>
                <option value="">Home</option>
              </select>
            </li>
            <li className="relative">
              <select
                name=""
                id=""
                className=" appearance-none outline-0 border-0"
              >
                <option value="">Pages</option>
                <option value="">Home</option>
              </select>
              <ChevronDown className="absolute top-1.5 left-9.5" size={14} />
            </li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="callway flex items-center">
          <span>
            <Headset color="#253D4E" size={28} />
          </span>
          <div className="flex flex-col">
            <span className="text-[#3BB77E] font-bold">1900888123</span>
            <span className="text-xs text-[#7E7E7E]">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </>
  );
}
