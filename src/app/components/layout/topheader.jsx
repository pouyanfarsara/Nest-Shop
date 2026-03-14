import Link from "next/link";

export default function TopHeader() {
  return (
    <>
      <div className=" hidden  lg:flex whitespace-nowrap flex-col md:flex-row justify-between gap-2 pt-1 items-center md:border-b pb-1 ">
        <div className="rightsection  whitespace-nowrap">
          <ul className="flex gap-3 text-[#7E7E7E]  border-[#DEDFE2] text-sm">
            <li className="border-r pr-1 border-[#DEDFE2] ">
              <Link href="/about">About Us</Link>
            </li>
            <li className="border-r pr-1 border-[#DEDFE2]">
              <Link href="/auth">My Acoount</Link>
            </li>
            <li className="border-r pr-1 border-[#DEDFE2]">
              <Link href="/">WishList</Link>
            </li>
            <li className="border-r pr-1 border-[#DEDFE2]">
              <Link href="/">Order Tracking</Link>
            </li>
          </ul>
        </div>
        <div className="centertext text-[#3BB77E] justify-center text-bold font-semibold ">
          <Link href="/">
            100% Secure delivery without contacting the courier
          </Link>
        </div>
        <div className="leftsection options ">
          <ul className="flex items-center text-sm gap-3">
            <li className="text-[#7E7E7E] border-r pr-1 border-[#DEDFE2]">
              <Link href="/">
                Need help?Call Us:{" "}
                <span className="text-[#3BB77E]">+1800900122</span>
              </Link>
            </li>
            <li className="border-r border-[#DEDFE2] pr-1">
              <select
                name=""
                id=""
                className="outline-0 border-0 text-[#7E7E7E] text-sm"
              >
                <option value="">English</option>
                <option value="">Persian</option>
              </select>
            </li>
            <li className="border-r  border-[#DEDFE2] pr-1">
              <select
                name=""
                id=""
                className="outline-0 border-0 text-[#7E7E7E] text-sm"
              >
                <option value="">INR</option>
                <option value="">INR</option>
                <option value="">INR</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
