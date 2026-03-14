import Button from "@/app/ui/components/Button/button";

export default function Category() {
  return (
    <>
      <div className="hidden lg:block  border border-[#ECECEC] rounded-2xl px-5 pt-8">
        <h5 className="border-b pb-3 border-[#cfe4d6] font-semibold">
          Category
        </h5>
        <div>
          <ul className="pt-5 gap-2 flex-col flex">
            <li className="border px-3 py-1 border-[#ECECEC] rounded-lg flex justify-between items-center cursor-pointer ">
              <img src="/category-1.png" className="h-7" />
              <span className="text-xs">Baking Material</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1  border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-2.png" className="h-7" />
              <span className="text-xs">Bread and Juice</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 cursor-pointer border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-3.png" className="h-7" />
              <span className="text-xs">Clothing & beauty</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 cursor-pointer border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-4.png" className="h-7" />
              <span className="text-xs">Deals Of The Day</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 cursor-pointer border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-7.png" className="h-7" />
              <span className="text-xs">Fresh Fruit</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-8.png" className="h-7" />
              <span className="text-xs">Fresh Seafood</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-9.png" />
              <span className="text-xs">Milks and Dairies</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-9.png" className="h-7" />
              <span className="text-xs">Pet Foods & Toy</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-11.png" className="h-7" />
              <span className="text-xs">Vegetables</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-12.png" className="h-7" />
              <span className="text-xs">Wines & Drinks</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
            <li className="border px-3 py-1 border-[#ECECEC] rounded-lg flex justify-between items-center ">
              <img src="/category-14.png" className="h-7" />
              <span className="text-xs">Uncategorized</span>
              <Button
                text="11"
                className="bg-[#BCE3C9] rounded-full px-1.5 flex items-center justify-center py-1 text-xs text-[#253D4E] font-semibold"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
