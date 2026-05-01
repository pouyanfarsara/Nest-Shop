import { ChevronDown, Flame, Headset } from "lucide-react";
import Link from "next/link";

export default function ShopNavbar() {
  return (
    <>
      <div className="lg:flex items-center pt-3 justify-between hidden">
        {/* Browse All Categories */}
        <div className="relative">
          <select className="bg-[#3BB77E] text-white px-4 pr-10 py-2 rounded-md outline-none appearance-none">
            <option>Browse All Categories</option>
            <option>Fresh Fruits</option>
            <option>Meats</option>
            <option>Dairy</option>
          </select>

          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            size={16}
            color="white"
          />
        </div>

        {/* Navbar Links */}
        <div className="Navbarlist">
          <ul className="flex gap-9 text-[#253D4E] font-semibold text-sm ">
            <li className="flex items-center gap-1">
              <Flame color="#3BB77E" size={18} />
              <span className="cursor-pointer">Hot Deals</span>
            </li>

            <li className="relative">
              <select className="appearance-none outline-none border-0 pr-5">
                <option className="cursor-pointer">Home</option>
              </select>
              <ChevronDown className="absolute right-0 top-1.5" size={14} />
            </li>

            <li className="cursor-pointer">
              <Link href="/about">About</Link>
            </li>

            <li className="relative">
              <select className="appearance-none outline-none border-0 pr-5">
                <option className="cursor-pointer">Shop</option>
              </select>
              <ChevronDown className="absolute right-0 top-1.5" size={14} />
            </li>

            <li className="relative">
              <select className="appearance-none outline-none border-0 pr-5">
                <option className="cursor-pointer">Mega vendor</option>
              </select>
              <ChevronDown className="absolute right-0 top-1.5" size={14} />
            </li>

            <li className="relative">
              <select className="appearance-none outline-none border-0 pr-5">
                <option className="cursor-pointer">Vendors</option>
              </select>
              <ChevronDown className="absolute right-0 top-1.5" size={14} />
            </li>

            <li>
              <select className="appearance-none outline-none border-0">
                <option className="cursor-pointer">Blog</option>
              </select>
            </li>

            <li className="relative">
              <select className="appearance-none outline-none border-0 pr-5">
                <option className="cursor-pointer">Pages</option>
              </select>
              <ChevronDown className="absolute right-0 top-1.5" size={14} />
            </li>

            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div className="callway flex items-center gap-2">
          <Headset color="#253D4E" size={28} />
          <div className="flex flex-col">
            <span className="text-[#3BB77E] font-bold">1900888123</span>
            <span className="text-xs cursor-pointer text-[#7E7E7E]">
              24/7 Support Center
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
