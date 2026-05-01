import Button from "@/app/ui/components/Button/button";
import Input from "../ui/components/input/input";

export default function MainBanner() {
  return (
    <div
      className="sm:mt-2 py-16 sm:rounded-3xl bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/mainbanner.png")' }}
    >
      <div className="flex items-center flex-col gap-7 px-4">
        <h1 className="text-center text-[#253D4E] text-4xl font-bold">
          Fresh Vegetables Big discount
        </h1>
        <h1 className="text-center text-[#253D4E] text-4xl font-bold">
          Pure Coffe Big discount
        </h1>

        <h4 className="text-center text-[#7E7E7E] cursor-pointer">
          Sign up for the daily newsletter
        </h4>

        <div className="relative w-full max-w-md">
          <Input
            type="text"
            className="bg-white text-xs w-full text-[#838383] rounded-3xl px-4 py-3 outline-0 border-0"
            placeholder="Your email address"
          />
          <Button
            text="Subscribe"
            className="bg-[#3BB77E] absolute right-0 top-0 rounded-3xl h-full text-white text-xs cursor-pointer px-6"
          />
        </div>
      </div>
    </div>
  );
}