export default function ProductCardSkeleton() {
  return (
    <div className="relative border border-[#ECECEC] rounded-2xl flex flex-col py-5 px-3 overflow-hidden animate-pulse">
      <div className="absolute top-0 left-0 w-10 h-6 bg-gray-200 rounded-br-2xl"></div>

      <div className="w-full min-h-25 pt-4">
        <div className="w-full h-28 bg-gray-200 rounded-xl"></div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <div className="w-20 h-3 bg-gray-200 rounded"></div>
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-24 h-3 bg-gray-200 rounded"></div>

        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-2">
          <div className="w-14 h-4 bg-gray-200 rounded"></div>
          <div className="w-12 h-4 bg-gray-200 rounded"></div>
          <div className="w-16 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}