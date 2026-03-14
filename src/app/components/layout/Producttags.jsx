import Button from "@/app/ui/components/Button/button";
import { X } from "lucide-react";

export default function ProductTags() {
  return (
    <>
      <div className="hidden lg:block border border-[#ECECEC] rounded-2xl px-5 pt-8">
        <h5 className="border-b pb-3 border-[#cfe4d6] font-semibold">
          Product Tags
        </h5>

        <div className="buttonlist py-4 px-2 flex flex-wrap gap-2">
            <Button className="flex cursor-pointer flex-row-reverse gap-1 border border-[#ECECEC] rounded-2xl px-2 py-1 items-center font-semibold text-[#3BB77E]" text="Brown" icon={<X size={16} color="#B6B6B6"/>}/>
                  <Button className="flex flex-row-reverse gap-1 border border-[#ECECEC] rounded-2xl cursor-pointer px-2 py-1 items-center font-semibold text-[#3BB77E]" text="Brown" icon={<X size={16} color="#B6B6B6"/>}/>      <Button className="flex cursor-pointer flex-row-reverse gap-1 border cursor-pointer border-[#ECECEC] rounded-2xl px-2 py-1 items-center font-semibold text-[#3BB77E]" text="Brown" icon={<X size={16} color="#B6B6B6"/>}/>      <Button className="flex flex-row-reverse gap-1 border border-[#ECECEC] rounded-2xl px-2 py-1 cursor-pointer items-center font-semibold text-[#3BB77E]" text="Brown" icon={<X size={16} color="#B6B6B6"/>}/>
        </div>
      </div>
    </>
  );
}
